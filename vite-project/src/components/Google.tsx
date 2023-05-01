/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useGoogleService } from "../shared/services/googleService";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

const Google = () => {
  const { profile } = useGoogleService();
  const [googleUserAccessToken, setGoogleUserAccessToken] = useState<string>();
  const { data: googleUserInfo, remove: removeGoogleUserInfo } = profile(
    googleUserAccessToken
  );

  const handleOnSignInWithGoogle = useGoogleLogin({
    onSuccess: (response) => {
      console.log(response);
      setGoogleUserAccessToken(response.access_token);
      removeGoogleUserInfo();
    },
    onError: (error) => console.log("Login failed: ", error),
  });

  const logOut = () => {
    console.log("logout button clicked");
    googleLogout();
    removeGoogleUserInfo();
    setGoogleUserAccessToken(undefined);
  };

  return (
    <>
      <h1>Google Auth Practice</h1>
      <h2>React Google Login</h2>
      <br />
      <br />
      {googleUserAccessToken && googleUserAccessToken ? (
        <div>
          <img src={googleUserInfo?.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {googleUserInfo?.name}</p>
          <p>Email Address: {googleUserInfo?.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => handleOnSignInWithGoogle()}>
          Sign in with Google 🚀{" "}
        </button>
      )}
      {/* <button onClick={() => handleOnSignInWithGoogle()}>
        Sign in with Google 🚀{" "}
      </button>
      <button onClick={logOut}>Log out</button> */}
    </>
  );
};

export default Google;
