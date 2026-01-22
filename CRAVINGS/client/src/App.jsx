import React from "react";
import Header from './components/header';
import Home from "./pages/home";
import About from "./pages/About";
import Login from "./pages/login";
import Register from "./pages/register";
import UserDashboard from "./pages/dashboards/UserDashboard";

import { BrowserRouter, Routes,Route } from "react-router-dom"; 
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
  
    <BrowserRouter>
    <Toaster/>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<UserDashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
