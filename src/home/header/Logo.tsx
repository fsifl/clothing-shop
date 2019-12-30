import * as React from "react";
import LogoIcon from "../../assets/crown.svg";
import "./Logo.styles.scss";

const Logo: React.SFC = () => {
  return <img src={LogoIcon} alt="Logo" className="logo"></img>;
};

export default Logo;
