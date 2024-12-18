const BASE_URL = 'data/data.json';

export const getData = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Erreur de récupération des données");
        }
        return await response.json();
    } catch (error) {
        console.error("Quelque chose ne va pas :", error);
        throw error;
    }
};

export const getPhotographers = async () => {
    const data = await getData();
    return data.photographers; // Accès aux photographes
};

export const getPhotographerById = async (id) => {
    const data = await getData();
    return data.photographers.find((photographer) => photographer.id == id);
};

export const getMediaByPhotographerId = async (id) => {
    const data = await getData();
    return data.media.filter((media) => media.photographerId == id);
};
