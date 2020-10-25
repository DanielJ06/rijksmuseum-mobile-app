import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.rijksmuseum.nl/api/en'
});

export const key = 'zckoVP2q';