import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Signin from "./components/SignIn";
import Signup from "./components/Signup";
import Category from "./components/Category";
import AddFriend from "./components/AddfFriend";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/AddFriend" element={<AddFriend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
