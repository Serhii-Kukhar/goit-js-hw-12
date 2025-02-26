
import axios from 'axios';


const API_KEY ='48800941-5fb7e609fca175f45db8152fa';
const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
});


export async function searchImage(searchimage,page = 1,perPage = 40) {
    try {
        const res = await instance
        .get('', { 
            params: { 
                key: API_KEY,
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
        } 
        
}

