import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext"; // ✅ Import AuthContextProvider
import HomePage from "./components/home/HomePage";
import Header from "./components/home/header/Header";
import Product from "./components/home/Product";
import InfiniteScrollTags from "./components/home/InfiniteLoopSlider";
import ExplorePage from "./components/home/page/ExplorePage";
import Explore from "./components/home/Explore";
import Login from "./components/auth/Login";
import SignupPage from "./components/auth/SingupPage";

function App() {
  return (
    <AuthContextProvider> {/* ✅ Wrap with AuthContextProvider */}
      <Router>
        <Header />
        <Routes>
          {/* 🏠 Home Page */}
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <Explore />
                <Product />
                <InfiniteScrollTags />
              </>
            }
          />
          {/* 🔑 Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* 🔍 Explore Page */}
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
