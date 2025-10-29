import axios from 'axios';
import type { Recensione, NuovaRecensione } from './RatingTypes';

// URL dinamico dal file .env
const API_URL = `${import.meta.env.VITE_API_URL}/api/reviews`;

export const fetchReviews = async (): Promise<Recensione[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createReview = async (nuovaRecensione: NuovaRecensione, token: string): Promise<Recensione> => {
  const res = await axios.post(
    API_URL,
    nuovaRecensione,
    { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
  );
  return res.data;
};

export const updateReview = async (
  id: string,
  text: string,
  rating: number,
  token: string
): Promise<Recensione> => {
  const res = await axios.patch(
    `${API_URL}/${id}`,
    { text, rating },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const deleteReview = async (id: string, token: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`, 
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
