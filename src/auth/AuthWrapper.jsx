/* eslint-disable no-unused-vars */

import { useState, createContext, useContext } from "react";
import { Header } from "../components/structure/Header";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";
//this here AuthContext and in return statement AuthContext name should be same
const AuthContext = createContext();
// AuthData is going to be used later on for accessing values -- constant of context
export const AuthData = () => useContext(AuthContext);

const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });


  const login = (userName, password) => {
    //Make the call to the authentication Api(back-end) to check the username/password match.
    return new Promise((resolve, reject) => {
      if (password === "password") {
        setUser({ name: userName, isAuthenticated: true });
        resolve("success");
      } else {
        reject("Failed! Incorrect Password.");
      }
    });
  };


  const logout=()=>{
    setUser({...user , isAuthenticated: false})
  }


  return (
       <AuthContext.Provider value={{ user , login , logout}}> 
           
           <>
            <Header />
            <RenderMenu />
            <RenderRoutes />
            
           
           
           </>
  
      </AuthContext.Provider>)
};

export default AuthWrapper;
