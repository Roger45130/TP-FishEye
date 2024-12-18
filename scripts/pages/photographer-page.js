import { Header } from '../compoments/Header-photographer.js';
import { Main } from '../compoments/Main-photographer.js';
import { Footer } from '../compoments/Footer.js';
import { getPhotographerById, getMediaByPhotographerId } from '../utils/Api.js';

// Fonction permettant d'obtenir l'identifiant du photographe à partir de l'URL
const getPhotographerId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
};

const displayData = async () => {
    const photographerId = getPhotographerId();
    if (!photographerId) {
        console.error("No photographer ID found in the URL.");
        document.body.innerHTML = "<h1>Photographer not found</h1>";
        return;
    }

    try {
        // Récupérer les données du photographe et des médias
        const photographer = await getPhotographerById(photographerId);
        const media = await getMediaByPhotographerId(photographerId);

        if (!photographer) {
            console.error("Photographer not found.");
            document.body.innerHTML = "<h1>Photographer not found</h1>";
            return;
        }

        const body = document.querySelector('body');
        body.innerHTML = `
            <div class="wrapper">
                ${Header()}
                ${Main({ ...photographer, media })}
                ${Footer()}
            </div>
        `;
    } catch (error) {
        console.error("Error fetching photographer data:", error);
        document.body.innerHTML = "<h1>Error loading data</h1>";
    }
};

// Exécuter la logique d'affichage
(async () => {
    await displayData();
})();
