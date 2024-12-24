export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;            // Unique identifier for the user
  username: string;      // The user's username
  email: string;         // The user's email address
  first_name: string;    // The user's first name
  last_name: string;     // The user's last name
  is_staff: boolean;     // Indicates whether the user is a staff member
  address: string;       // The user's address
  phone_number: string;  // The user's phone number
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image_url: string;
  is_available: boolean;
  created_at: string;
  updated_at: string;
}
export interface CartList {
  id: number;              // Unique identifier for the cart
  items: CartItem[];       // List of items in the cart
  total_price: string;     // Total price of items in the cart
  order_date: string;      // Date when the cart was created or last updated
  status: string;          // Status of the order (e.g., "CART")
  user: number;            // User ID associated with this cart
}
export interface CartItem {
  id: number;              // Unique identifier for the item in the cart
  quantity: number;        // Quantity of the product in the cart
  price: string;           // Price of the product
  order: number;           // Order ID to which this item belongs
  product: number;         // Product ID
}
