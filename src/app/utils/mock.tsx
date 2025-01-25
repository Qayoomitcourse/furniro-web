import { Product } from "./types";
import image2 from "../../../public/assets/image 2.png";
import image3 from "../../../public/assets/image 3.png";
import image4 from "../../../public/assets/image 4.png";
import image5 from "../../../public/assets/Image 5.png";
import image6 from "../../../public/assets/image 6.png";
import image7 from "../../../public/assets/image 7.png";
import image8 from "../../../public/assets/image 8.png";
export const mockProducts: Product[] = [
    
    {
        id: 3,
        image: image2,
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: 25000,
        discountPrice: null,
        discount: null,
        category: "chairs",
        size: ["L", "XL", "XXL"],
        colour: ["#816DFA", "#000000", "#B88E2F"],
        quantity: 1,
        slug: "mock-leviosa-stylish-cafe-chair",
        sku: "SS003",
        tags: ["Chair", "Elegant", "Furniture"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
        id: 4,
        image: image3,
        name: "Lolito",
        description: "Luxury big sofa",
        price: 7000000,
        discountPrice: 14000,
        discount: "-50%",
        category: "Sofa",
        size: ["L", "XL", "XXL"],
        colour: ["#816DFA", "#000000", "#B88E2F"],
        quantity: 1,
        slug: "mock-lolito-luxury-big-sofa",
        sku: "SS004",
        tags: ["Sofa", "Luxury", "Comfort"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
        id: 5,
        image: image4,
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: 5000,
        discountPrice: null,
        discount: null,
        isNew: true,
        category: "Table & Stool",
        size: ["L", "XL", "XXL"],
        colour: ["#816DFA", "#000000", "#B88E2F"],
        quantity: 1,
        slug: "mock-respira-outdoor-bar-table-stool",
        sku: "SS005",
        tags: ["Table", "Outdoor", "Furniture"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
        id: 6,
        image: image5,
        name: "Lumina",
        description: "Modern table lamp",
        price: 1200000,
        discountPrice: 15000,
        discount: "-20%",
        category: "Lighting",
        size: ["S", "M"],
        colour: ["#FFD700", "#000000"],
        quantity: 1,
        slug: "mock-lumina-modern-table-lamp",
        sku: "SS006",
        tags: ["Lamp", "Modern", "Lighting"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
        id: 7,
        image: image6,
        name: "Orion",
        description: "Minimalist ceiling light",
        price: 3800,
        discountPrice: null,
        discount: null,
        category: "Lighting",
        size: ["L"],
        colour: ["#FFFFFF", "#000000"],
        quantity: 1,
        slug: "mock-orion-minimalist-ceiling-light",
        sku: "SS007",
        tags: ["Light", "Ceiling", "Minimalist"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
        id: 8,
        image: image7,
        name: "Astro",
        description: "Modern lounge chair",
        price: 5000,
        discountPrice: 6500,
        discount: "-25%",
        category: "chairs",
        size: ["M", "L", "XL"],
        colour: ["#816DFA", "#000000", "#FF6347"],
        quantity: 1,
        slug: "mock-astro-modern-lounge-chair",
        sku: "SS008",
        tags: ["Chair", "Lounge", "Modern"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
        id: 9,
        image: image8,
        name: "Nova",
        description: "Elegant sofa set",
        price: 12000,
        discountPrice: null,
        discount: null,
        category: "Sofa",
        size: ["L"],
        colour: ["#2F4F4F", "#FFD700"],
        quantity: 1,
        slug: "mock-nova-elegant-sofa-set",
        sku: "SS009",
        tags: ["Sofa", "Elegant", "Furniture"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
        id: 10,
        image: image4,
        name: "Capella",
        description: "Stylish dining table",
        price: 8000,
        discountPrice: 9000,
        discount: "-10%",
        category: "Table",
        size: ["XL"],
        colour: ["#8B0000", "#FFFFFF"],
        quantity: 1,
        slug: "mock-capella-stylish-dining-table",
        sku: "SS010",
        tags: ["Table", "Dining", "Stylish"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
    {
        id: 11,
        image: image7,
        name: "Polaris",
        description: "Comfortable lounge chair",
        price: 45000,
        discountPrice: null,
        discount: null,
        category: "chairs",
        size: ["M", "L"],
        colour: ["#FFA500", "#000000"],
        quantity: 1,
        slug: "mock-polaris-comfortable-lounge-chair",
        sku: "SS010",
        tags: ["Chair", "Lounge", "Comfort"],
        shareOptions: ["Facebook", "Twitter", "LinkedIn"],
    },
];

export default mockProducts;
