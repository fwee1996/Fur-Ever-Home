import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const Authorized = ({ children }) => {
  let location = useLocation();
  const user = localStorage.getItem("furEverHome_user");

  //Check if the user is logged in. If they are, process the user and show the child components
  if (user) {
    const currentUser = JSON.parse(user);
    return React.cloneElement(children, { currentUser });
  } else {
    return <Navigate to="/login" />;
  }
};
