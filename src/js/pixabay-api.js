
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
});
const loader = document.querySelector('.loader')

export async function searchImage(searchimage,page = 1,perPage = 40) {
    
    try {
        const res = await instance
        .get('', { 
            params: { 
                key: '48800941-5fb7e609fca175f45db8152fa',
                q: searchimage,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page,
                per_page: perPage
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
            

        }
        
}

