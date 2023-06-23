/*
    Este archivo contiene funciones que se utilizan para realizar peticiones a la API
    Como se llama a la API externa, se utiliza axios para realizar las peticiones.
    una tiene como base la API de Pexels, y la otra tiene como base la API de usuarios
    La api de los usuarios se maneja con json-server
    Tiene funciones para obtener usuarios, registrar usuarios, y loguear usuarios
    Tiene una función para obtener fotos de la API de Pexels
*/
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/curated',
});

const auth = axios.create({
    baseURL: 'http://localhost:8000/',
});

export const getUsers = async () => {
    try {
        const response = await auth.get('users');
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const registerUser = async (user) => {
    try {
        const response = await auth.post('users', user);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const loginUser = async (user) => {
    try {
        const email = user.email;
        const password = user.password;
        const response = await auth.get('users',{params: {email, password}});
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const getPhotos = async (page, per_page) => {
    try {
        const response = await api.get(`?page=${page}&per_page=${per_page}`, {
            headers: {
                Authorization: import.meta.env.VITE_PHOTOS_API_KEY
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }    
}