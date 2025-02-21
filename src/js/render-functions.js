
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
    formEl: document.querySelector('.js-image-form'),
    imageEl: document.querySelector('.js-image-container'),
    loadMoreBtn: document.querySelector('.js-load-button'),
};

export function imageTemplate(image) {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
    return `
        <li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
                <img class="image" src="${webformatURL}" alt="${tags}" class="gallery-img" width="360"/>
            </a>
            <ul class="info-list">
                <li class="info-item">
                    <h4 class="info-title">Likes</h4>
                    <p class="info-descr">${likes}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Views</h4>
                    <p class="info-descr">${views}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Comments</h4>
                    <p class="info-descr">${comments}</p>
                </li>
                <li class="info-item">
                    <h4 class="info-title">Downloads</h4>
                    <p class="info-descr">${downloads}</p>
                </li>
            </ul>
        </li>
    `;
}

export function imagesTemplate(images) {
    return images.map(imageTemplate).join('');
}

export function renderImages(images) {
    const markup = imagesTemplate(images);
    refs.imageEl.insertAdjacentHTML('beforeend', markup); 
    
    const lightbox = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionDelay: 250,
        
    });
    lightbox.refresh();
}
