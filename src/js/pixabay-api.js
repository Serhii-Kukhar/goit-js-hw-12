
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
});
const loader = document.querySelector('.loader')
const loadbtn = document.querySelector('.js-load-button')

export async function searchImage(searchimage) {
    loader.style.display ='block';
    try {
        const res = await instance
        .get('', { 
            params: { 
                key: '48800941-5fb7e609fca175f45db8152fa',
                q: searchimage,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
            } 
        });
        
        if (res.data.hits.length === 0) {
                throw new Error('No images found');  
            }
            return res.data;
    }catch(error) {
            console.error('API Error:', error);
            throw error; 
        } finally {
            loader.style.display = 'none';
            loadbtn.style.display = 'block';

        }
        
}

