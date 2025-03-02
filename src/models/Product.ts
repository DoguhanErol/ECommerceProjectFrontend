export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: string; // Update to string
  color: string;
  size: 'XS' | 'S' | 'M' | 'L' | 'XL';
  category: number; // Update to number
  image: string;
  updatedAt: string; // Update to string, since it's in ISO format
};

  
  export type Category = {
    id:number;
    name: string;
  };
  
  export type ProductForCart= {
    product_id:number;
    quantity:number;
    color:string;
    size: 'XS' | 'S' | 'M' | 'L' | 'XL';

  }