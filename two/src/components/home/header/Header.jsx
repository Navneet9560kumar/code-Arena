import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import MyUserMenu from "../components/MyUserMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { setIsLoggedIn, setData } = useAuthContext();

  // Check if user is logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setData(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  // Scroll to top and navigate function
  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between py-3 px-6 bg-opacity-70 backdrop-blur-lg text-white shadow-md z-50">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-200">DreamCode</div>

      {/* Navigation and User Menu */}
      {user ? (
        <MyUserMenu />
      ) : (
        <nav className="hidden md:flex space-x-8 ml-[-40px]">
          <button className="text-gray-300 hover:text-gray-100 transition" onClick={() => handleNavigation("/explore")}>
            Explore
          </button>
          <button className="text-gray-300 hover:text-gray-100 transition" onClick={() => handleNavigation("/product")}>
            Product
          </button>
          <button className="text-gray-300 hover:text-gray-100 transition" onClick={() => handleNavigation("/developer")}>
            Developer
          </button>

          {/* Show First Letter of User or Sign In */}
          {user ? (
            <div className="relative group">
              <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {user.name?.charAt(0).toUpperCase()}
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-gray-800 text-white p-2 rounded-md shadow-lg hidden group-hover:block">
                <button className="w-full text-left px-2 py-1 hover:bg-gray-700" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button className="text-gray-300 hover:text-gray-100 transition" onClick={() => navigate("/login")}>
              Sign In
            </button>
          )}
        </nav>
      )}

      {/* Mobile Menu Button */}
      <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-12 right-4 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 rounded-lg shadow-lg md:hidden flex flex-col items-start space-y-4 z-50">
          <button className="text-gray-300 hover:text-gray-100" onClick={() => handleNavigation("/explore")}>
            Explore
          </button>
          <button className="text-gray-300 hover:text-gray-100" onClick={() => handleNavigation("/product")}>
            Product
          </button>
          <button className="text-gray-300 hover:text-gray-100" onClick={() => handleNavigation("/developer")}>
            Developer
          </button>
          {user ? (
            <button className="text-gray-300 hover:text-gray-100" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="text-gray-300 hover:text-gray-100" onClick={() => handleNavigation("/login")}>
              Sign In
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
