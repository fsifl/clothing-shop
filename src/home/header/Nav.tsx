import * as React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Nav.styles.scss";

import { connect } from "react-redux";

import { Action, Dispatch } from "redux";

import { RootState } from "../../home/redux/rootReducer";

import { signIn, signOut } from "./redux/signIn-signOut";

import { InitialState } from "../header/redux/initialState";

export interface NavBarProps {
  isLogin: InitialState;
  signIn: () => void;
  signOut: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  isLogin,
  signIn,
  signOut
}): JSX.Element => {
  return (
    <div className="navlinks">
      <Router>
        <Link to="/" className="navlinks__link">
          SHOP
        </Link>
        <Link to="/" className="navlinks__link">
          CONTACT
        </Link>
        {!isLogin.isLogin ? (
          <Link to="/" className="navlinks__link" onClick={signIn}>
            SIGNIN
          </Link>
        ) : (
          <Link to="/" className="navlinks__link" onClick={signOut}>
            SIGNOUT
          </Link>
        )}
      </Router>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLogin: state.login
});

// const dispatchProps = {
//   signIn: signIn,
//   signOut: signOut
// };

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  signIn: () => dispatch(signIn()),
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
