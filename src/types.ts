export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "mains" | "drinks" | "desserts" | "pasalubong";
  image?: string;
  isNative?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  location: string;
  description: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  image: string;
}

export interface Farmer {
  id: string;
  name: string;
  crop: string;
  location: string;
  story: string;
  image: string;
}
