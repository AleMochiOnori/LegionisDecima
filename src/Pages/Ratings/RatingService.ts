import axios from 'axios';

import type { Recensione, NuovaRecensione } from './RatingTypes';

export const fetchReviews = async (): Promise<Recensione[]> => {
  const res = await axios.get('http://localhost:5000/api/reviews');
  return res.data;
};

export const createReview = async (nuovaRecensione: NuovaRecensione, token: string): Promise<Recensione> => {
  const res = await axios.post(
    'http://localhost:5000/api/reviews',
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
    `http://localhost:5000/api/reviews/${id}`,
    { text, rating },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const deleteReview = async (id: string, token: string): Promise<void> => {
  await axios.delete(`http://localhost:5000/api/reviews/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
