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
};

(async () => {
    try {
        const data = await getPhotographers();
        displayData(data);
    } catch (error) {
        console.error("Erreur d'affichage des photographes :", error);
    }
})();
