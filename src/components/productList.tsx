type Product = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: string;
    discountPrice: string | null;
    discount: string | null;
    isNew?: boolean;
    category?: string
  };
  

 const products: Product[] = [
  {
    id: 1,
    image: "/assets/image 1.png",
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.500.000",
    discount: "-30%",
    category: "chairs"
  },
  {
    id: 2,
    image: "/assets/image 2.png",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: null,
    discount: null,
    category: "Sofa"
  },
  {
    id: 3,
    image: "/assets/image 3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discountPrice: "Rp 14.000.000",
    discount: "-50%",
    category: "Sofa"
  },
  {
    id: 4,
    image: "/assets/image 4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountPrice: null,
    discount: null,
    isNew: true,
    category: "Table & Stool"
  },

  {
    id:5,
    image: "/assets/image 1.png",
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.500.000",
    discount: "-30%",
    category:"Chair"
  },
  {
    id:6,
    image: "/assets/image 2.png",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: null,
    discount: null,
    category: "Chair"
  },
  {
    id:7,
    image: "/assets/image 3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discountPrice: "Rp 14.000.000",
    discount: "-50%",
    category: "Sofa"
  },
  {
    id:8,
    image: "/assets/image 4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountPrice: null,
    discount: "New",
    category: "Table & Stool"
  },
  {
    id:9,
    image: "/assets/Image 5.png",
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    discountPrice: null,
    discount: null,
    category:"Lapmps"
  },
  {
    id:10,
    image: "/assets/image 6.png",
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    discountPrice: null,
    discount: "New",
    category: "Decoration Accessories"
  },
  {
    id:11,
    image: "/assets/image 7.png",
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    discountPrice: "Rp 14.000.000",
    discount: "-50%",
    category: "Beds"
  },
  {
    id:12,
    image: "/assets/image 8.png",
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    discountPrice: null,
    discount: "New",
    category: "Decoration Accessories"
  },
  {
    id: 13,
    image: "/assets/image 1.png",
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.500.000",
    discount: "-30%",
    category:"Chair"
  },
  {
    id: 14,
    image: "/assets/image 2.png",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: null,
    discount: null,
    category:"Chair"
  },
  {
    id: 15,
    image: "/assets/image 3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discountPrice: "Rp 14.000.000",
    discount: "-50%",
    category:"Sofa"
  },
  {
    id: 16,
    image: "/assets/image 4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountPrice: null,
    discount: null,
    isNew: true,
    category:"Tables $ Stools"
  },
  {
    id: 17,
    image: "/assets/image 1.png",
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.500.000",
    discount: "-30%",
    category: "Chairs"
  },
  {
    id: 18,
    image: "/assets/image 2.png",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: null,
    discount: null,
    category:"Chairs"
  },
  {
    id: 19,
    image: "/assets/image 3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discountPrice: "Rp 14.000.000",
    discount: "-50%",
    category: "Chairs"
  },
  {
    id: 20,
    image: "/assets/image 4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountPrice: null,
    discount: null,
    isNew: true,
    category: "Tables & Stools"
  },
  
];
export default products