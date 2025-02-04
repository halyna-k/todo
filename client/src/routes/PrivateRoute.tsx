import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "../components";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    // optionally render a loading spinner while auth status is loading
    return <Spinner />;
  }

  if (!isAuthenticated) {
    // redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
