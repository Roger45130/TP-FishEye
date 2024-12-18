export const Main = (data) => {
    const { name, city, country, tagline, portrait, media } = data;

    return `
        <main class="containerPhotographerPage">
            <div class="photographer-header">
                <section class="photographer-profile">
                    <h3 class="subtitle__h3 user__name__thumb__photographer">${name}</h3>
                    <h4 class="subtitle__h4 user__localisation__thumb__photographer">${city}, ${country}</h4>
                    <p class="user__definition__photographer">${tagline}</p>
                </section>
                <section class="cta">
                    <button type="button" class="cta">Contactez-moi</button>
                </section>
                <section class="user__photographer">
                    <img src="assets/images/photographers/thumbnails/${portrait}" alt="user ${name}" class="photo__thumb__user">
                </section>
            </div>

            <div class="dropdown-container">
                <label for="trierPar" class="Tier">Trier par</label>
                <div class="dropdown">
                    <button id="trierPar">
                        Popularité <i class="fa-solid fa-chevron-up"></i>
                    </button>
                    <div class="dropdown-content">
                        <div class="option" data-sort="date">Date</div>
                        <div class="option" data-sort="title">Titre</div>
                    </div>
                </div>
            </div>

            <div class="galery__img__user">
                ${media.map(item => `
                    <div class="thumb-imgfull">
                        ${item.image ? `<img src="assets/images/photographers/samplePhotos-Medium/${name}/${item.image}" alt="${item.title}" class="thumb-img">` : ''}
                        ${item.video ? `<video src="assets/images/photographers/samplePhotos-Medium/${name}/${item.video}" alt="${item.title}" class="thumb-img" autoplay></video>` : ''}
                        <div class="indication__img">
                            <h4 class="subtitle__h4 user__thumb__img__title">${item.title}</h4>
                            <div class="like">
                                <h4 class="subtitle__h4 user__note__like">${item.likes}</h4>
                                <div class="heart__content">
                                    <i class="fa-solid fa-heart heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </main>
    `;
};

