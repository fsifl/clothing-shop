import * as React from "react";
import "./Header.styles.scss";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return <div className="header">Header</div>;
};

export default Header;
