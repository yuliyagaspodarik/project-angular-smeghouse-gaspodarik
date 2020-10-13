export interface Products {
  category: string;
  url: string,
  name: string;
  article: string;
  price: number;
  description: {
    color: string,
    body: string,
    volume: number,
    size: string,
    rotate?: number,
    levels?: number,
    speed?: number,
    filters?: number,
    temperature?: string,
    power: number,
    light: boolean,
    additionally: string,
    producer: string
  };
  select: boolean;
  quantity?: number;
  favorites?: boolean;
}

export interface Contacts {
  name: string;
  url: string;
  phoneNumber: number;
}
