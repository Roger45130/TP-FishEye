import { Header } from '../compoments/Header.js';
import { Main } from '../compoments/Main.js';
import { Footer } from '../compoments/Footer.js';
import { getPhotographers } from '../utils/Api.js';

const displayData = (data) => {
    const body = document.querySelector('body');
    body.innerHTML = `
        <div class="wrapper">
            ${Header()}
            ${Main(data)}
            ${Footer()}
        </div>
    `;

    // Ajoutez des écouteurs d'événements à chaque "photo__name" du photographe
    const users = document.querySelectorAll('.photo__name');
    users.forEach((user, index) => {
        user.addEventListener('click', () => {
            const photographerId = data[index].id; // Obtenir l'identifiant du photographe
            window.location.href = `photographer-page.html?id=${photographerId}`; // Redirection avec l'ID comme paramètre de requête
        });
    });
};

(async () => {
    try {
        const data = await getPhotographers();
        displayData(data);
    } catch (error) {
        console.error("Erreur d'affichage des photographes :", error);
    }
})();
