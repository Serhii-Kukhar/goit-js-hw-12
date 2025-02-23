
import { searchImage } from './js/pixabay-api';
import { renderImages,scrollNewImages, refs } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// iziToast message
function showMessageInfo() {
    iziToast.show({
        title: 'Info!',
        message: "We're sorry, but you've reached the end of search results.",
        color: 'blue',
        position: 'topRight',
        timeout: 3000,
        maxWidth: 300,
        progressBar: true,
        close: true,
        transitionIn: 'bounceInLeft',
        transitionOut: 'fadeOutRight'   
    });
}
function showMessageWarning() {
    iziToast.show({
        title: 'Warning!',
        message: 'Please enter a search query.',
        color: 'yellow',
        position: 'topRight',
        timeout: 3000,
        progressBar: true,
        close: true,
        transitionIn: 'bounceInLeft',
        transitionOut: 'fadeOutRight'
    });
}
function showMessageError() {
    iziToast.show({
        title: 'Error!',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
        timeout: 3000,
        maxWidth: 300,
        progressBar: true,
        close: true,
        transitionIn: 'bounceInLeft',
        transitionOut: 'fadeOutRight'   
        
    });
}



let searchQuery = '';
let page = 1;
const perPage = 40;
let totalHits = 0;



refs.formEl.addEventListener('submit', async event => {
    event.preventDefault();

    

    const newQuery = event.target.elements.query.value.trim(); 

    if (newQuery === '') {
        showMessageWarning ();
        return;
        
    }

if (newQuery !== searchQuery){
    searchQuery = newQuery;
    page = 1;
    refs.imageEl.innerHTML = '';
    totalHits = 0;
}
    

    event.target.elements.query.value = '';

    try{
        const data = await searchImage(searchQuery,page,perPage);
        totalHits = data.totalHits;
            
        if (data.hits.length > 0) {
            renderImages(data.hits);
            refs.loadMoreBtn.style.display = 'block';
        }else {
            refs.loadMoreBtn.style.display = 'none';
        }


        if (page * perPage >= totalHits){
            refs.loadMoreBtn.style.display = 'none';
            showMessageInfo();

        }
    } catch (error) {
        showMessageError ();
        }


    event.target.reset();

});




refs.loadMoreBtn.addEventListener('click', async () => {
    page += 1;


    try {
        const data = await searchImage(searchQuery, page, perPage);

        if (data.hits.length > 0) {
            renderImages(data.hits);
        }

    
        if (page * perPage >= totalHits) {
            refs.loadMoreBtn.style.display = 'none';
            showMessageInfo ();
        }

        scrollNewImages();

    } catch (error) {
        showMessageError();
    }
});




