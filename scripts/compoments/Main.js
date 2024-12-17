export const Main = (data) => {
    return `
        <main class="container">
            ${data.map(photographer => `
                <div class="user">
                    <section class="photo__name">
                        <img src="assets/images/photographers/thumbnails/${photographer.portrait}" 
                             alt="Photographe ${photographer.name}" 
                             class="photo__thumb">
                        <h3 class="subtitle__h3 user__name__thumb">${photographer.name}</h3>
                    </section>
                    <section class="localisation__price">
                        <h4 class="subtitle__h4 user__localisation__thumb">${photographer.city}, ${photographer.country}</h4>
                        <p class="user__definition">${photographer.tagline}</p>
                        <p class="price">${photographer.price}€/jour</p>
                    </section>
                </div>
            `).join('')}
        </main>
    `;
};
