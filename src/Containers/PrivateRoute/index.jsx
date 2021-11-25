import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.authentication) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
export default PrivateRoute;
