export interface Recensione {
  _id?: string;
  userId?: { username: string };
  nome?: string;
  rating: number;
  text: string;
  data: string;
}

export interface NuovaRecensione {
  rating: number;
  text: string;
}
