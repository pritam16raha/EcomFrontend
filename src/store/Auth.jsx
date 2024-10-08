import { createContext, useContext, useEffect, useState } from "react";
import SummaryApi from "../commonData/SummaryApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [access_Token, setAccessToken] = useState(
    localStorage.getItem("access_Token")
  );
  const [currentUser, setCurrentUser] = useState("");

  const authToken = `Bearer ${access_Token}`;

  const storeTokenInLocal = (serverToken) => {
    return localStorage.setItem("access_Token", serverToken);
  };

  const LogoutUser = () => {
    setAccessToken("");
    return localStorage.removeItem("access_Token");
  };

  //user data is getting
  const userAuthentication = async () => {
    try {
      const userRespondedData = await fetch(SummaryApi.userInfo.url, {
        method: SummaryApi.userInfo.method,
        headers: {
          Authorization: authToken,
        },
      });

      if (userAuthentication.ok || userRespondedData.status === 200) {
        const myLoggedinUserData = await userRespondedData.json();
        console.log("Now Logged in user is: ", myLoggedinUserData);
        setCurrentUser(myLoggedinUserData);
      }
    } catch (err) {
      console.log("Error in front-end UserAuthentication");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLocal, LogoutUser, currentUser, authToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useMyAuth = () => {
  return useContext(AuthContext);
};
