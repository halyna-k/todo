import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthButton } from "./Button";

const Auth: React.FC = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-center items-center">
      {isAuthenticated ? (
        <AuthButton
          text={user?.name}
          onClick={() => logout({ logoutParams: { returnTo:  window.location.origin } })}
          customStyles="text-gray-900"
        />
      ) : (
        <AuthButton
          text="Log in"
          onClick={() => loginWithRedirect()}
          customStyles="text-gray-900"
        />
      )}
    </div>
  );
};

export default Auth;
