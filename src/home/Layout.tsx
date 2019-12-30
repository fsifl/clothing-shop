import * as React from "react";
import "./Layout.styles.scss";
import HeaderLayout from "./header/HeaderLayout";
import { BrowserRouter as Router, Route } from "react-router-dom";

export interface LayoutProps {}

export interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return (
      <Router>
        <div className="generalLayout">
          <Route exact path="/" component={HeaderLayout} />
        </div>
      </Router>
    );
  }
}

export default Layout;
