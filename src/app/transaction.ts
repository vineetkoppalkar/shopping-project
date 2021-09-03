import { Product } from "./product";
import { User } from "./user";

export interface Transaction {
  id: number;
  user: User;
  product: Product;
}
