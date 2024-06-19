// src/services/apiService.js
import axios from 'axios';

const apiUrl = 'http://localhost:1337'; // Update this URL based on your Strapi server

const apiService = axios.create({
    baseURL: apiUrl,
});

export const getProducts = async () => {
    try {
        const response = await apiService.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};