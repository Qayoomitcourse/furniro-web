import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    image: string | StaticImageData | undefined | any;
    name: string;
    description: string;
    price: number;
    discountPrice: number | null;
    discount: string | null;
    isNew?: boolean;
    slug: string,
    Category: string;
    size: string [] | any[];
    colour: string [] | any;
    quantity: number;
    sku: string;
    tags:string[]
    shareOptions:string[]
  }; 

  
export type Cart = {
    id: number;
    image: string | StaticImageData | undefined | any;
    name: string;
    description: string;
    price: number;
    size: string [] | any[];
    colour: string [] | any;
    quantity: number;
  }; 