import * as React from "react";
import ShopBag from "../../assets/shopping-bag.svg";
import "./Cart.styles.scss";

export interface CartProps {
  quantity: string;
}

const Cart: React.SFC<CartProps> = () => {
  return <img src={ShopBag} alt="shopbag" className="cart" />;
};

export default Cart;
