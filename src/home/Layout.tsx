import * as React from "react";
import "./Layout.styles.scss";

export interface LayoutProps {}

export interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return <div className="generalLayout">Layout</div>;
  }
}

export default Layout;
