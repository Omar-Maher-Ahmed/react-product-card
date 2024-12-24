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
  price: number;
  image: string;
  stock: number;
  category: string;
  is_available: boolean;
}

