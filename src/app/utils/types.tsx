import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    image: string | StaticImageData | undefined;
    name: string;
    description: string;
    price: number;
    discountPrice: number | null;
    discount: string | null;
    isNew?: boolean;
    slug: string,
    category: string;
    size: string [] ;
    colour: string [];
    quantity: number;
    sku: string;
    tags:string[]
    shareOptions:string[]
  }; 

  
export type Cart = {
    id: number;
    image: string | StaticImageData | undefined;
    name: string;
    description: string;
    price: number;
    size: string [];
    colour: string [];
    quantity: number;
  }; 