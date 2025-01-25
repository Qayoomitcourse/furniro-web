export interface Product {
    _id: number;
    name: string;
    _type: string;  // Change from hardcoded "product"
    description: string;
    price: number;
    discountPrice: number | null;
    discount: string | null;
    isNew?: boolean;
    slug: { 
        current: string  // Slug in Sanity is an object with a 'current' property
    };
    category: string;  // Lowercase to match schema
    size: string[];
    colour: string[];
    quantity: number;
    sku: string;
    tags: string[];
    shareOptions: string[];
    image: {
        asset: {  // Changed from 'assets'
            _ref: string;
            _type: string;
        }
    };
}