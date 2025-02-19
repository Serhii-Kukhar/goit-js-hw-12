
import { searchImage } from './js/pixabay-api';
import { renderImages, refs } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

refs.formEl.addEventListener('submit', async event => {
    event.preventDefault();
    

    const searchQuery = event.target.elements.query.value.trim(); 
    

    if (searchQuery === '') {
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
        return;
        
    }


    refs.imageEl.innerHTML = '';
    event.target.elements.query.value = '';

    try{
        const data = await searchImage(searchQuery);
            
        if (data && data.hits) {
            renderImages(data.hits);
        }
    } catch (error) {
            
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
        
});






