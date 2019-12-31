import * as React from "react";
import "./Layout.styles.scss";
import HeaderLayout from "./header/HeaderLayout";
import CategoriesLayout from "./../features/categories/CategoriesLayout";
import Hats from "../features/shop-hats/shop-hats";
import { BrowserRouter as Router, Route } from "react-router-dom";

export interface LayoutProps {}

export interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return (
      <Router>
        <div className="generalLayout">
          <HeaderLayout />
          <Route exact path="/" component={CategoriesLayout} />
          <Route path="/shop/hats" component={Hats} />
        </div>
      </Router>
    );
  }
}

export default Layout;
