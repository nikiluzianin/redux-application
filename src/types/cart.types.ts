export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantitiy: number;
    image: string;
}

export interface CartState {
    items: CartItem[];
    isOpen: boolean;
}