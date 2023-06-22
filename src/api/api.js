import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/curated',
});

export const getPhotos = async (page, per_page) => {
    try {
        const response = await api.get(`?page=${page}&per_page=${per_page}`, {
            headers: {
                Authorization: 'XntubFls3jSSHAnK6jzsHfKogwc0eqPt5NdYXd1tCQLfodVdUQhGwlit',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }    
}