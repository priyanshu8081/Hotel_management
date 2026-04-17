import React, { createContext, useState } from 'react';

export const AppContext=createContext();

const AuthProvider = ({children}) => {
    const intialAuth=localStorage.getItem("users");
    const [authUser,setAuthUSer]=useState(
        intialAuth ? JSON.parse(intialAuth):undefined
    )
  return (
    <AppContext.Provider value={{authUser,setAuthUSer}} >
            {children}
    </AppContext.Provider>
  )
}

export default AuthProvider
