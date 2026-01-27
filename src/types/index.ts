export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
  bestseller: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
