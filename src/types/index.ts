export type Product = {
  id: number;
  name: string;
  price: string;
  rating: number;
  size: string[];
  color: string[];
  category: 'upper' | 'lower' | 'shoes' | 'accessories';
  gender: 'men' | 'women';
  image: string;
  description: string;
};

export type FilterOptions = {
  minPrice: number;
  maxPrice: number;
  size: string;
  color: string;
  rating: number;
  category?: string;
  gender?: 'men' | 'women';
};

export type Admin = {
  id: string;
  username: string;
  email: string;
  role: 'admin';
};