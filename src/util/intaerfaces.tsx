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
  id: number;
  username: string;
  first_name: string;
  last_name: string | null;
  email: string;
  address: string;
  is_staff: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  category: string;
  image: string;
  is_available: boolean;
  created_at?: string;
  updated_at?: string;
}

