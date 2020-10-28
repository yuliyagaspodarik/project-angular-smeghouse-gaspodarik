export interface Products {
  category: string;
  url: string,
  name: string;
  article: string;
  price: number;
  color: string;
  body: string;
  volume: number;
  size: string;
  rotate?: number;
  levels?: number;
  speed?: number;
  filters?: number;
  temperature?: string;
  power: number;
  light: boolean;
  additionally: string;
  producer: string;
  select: boolean;
  quantity?: number;
  favorites?: boolean;
  id?: string;
}

export interface Contacts {
  name: string;
  url: string;
  phoneNumber: number;
}

export interface User {
  login: string;
  password: string;
  email: string;
  stock: Products[];
  favorites: Products[];
}

