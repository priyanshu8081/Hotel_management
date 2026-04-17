import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home.jsx';
import Addlist from './components/Addlist.jsx';
import Singup from './components/Singup.jsx';
import { AppContext } from './context/AuthProvider.jsx';
const App = () => {
  const { authUser, setAuthUSer } = useContext(AppContext);
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/addlist' element={authUser ? < Addlist /> : <Navigate to={"/singup"} />} />
        <Route path='/singup' element={< Singup />} />
      </Routes>
    </>
  )
}
export default App
