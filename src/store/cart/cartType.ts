import { CategoryItem } from "../categories/categoryType";

export enum CART_ACTION_TYPES {
  SET_CART_ITEM = "SET_CART_ITEM",
  SET_IS_CART_OPEN = "SET_IS_CART_OPEN",
};

export type CartItem = CategoryItem & {
  quantity: number;
}