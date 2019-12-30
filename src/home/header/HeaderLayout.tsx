import * as React from "react";
import NavBar from "./Nav";
import LogoIcon from "./Logo";
import "./HeaderLayout.styles.scss";
import ShopBag from "./Cart";

export interface LayoutProps {}

const Layout: React.SFC<LayoutProps> = () => {
  return (
    <div className="header-layout">
      <LogoIcon />
      <div className="header-layout__right">
        <NavBar />
        <ShopBag quantity="5" />
      </div>
    </div>
  );
};

export default Layout;
