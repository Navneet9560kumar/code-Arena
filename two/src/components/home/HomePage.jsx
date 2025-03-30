import React from "react";
import { useNavigate } from "react-router-dom"; 
import Header from "./header/Header"; // Importing Header

const HomePage = () => {
  const navigate = useNavigate(); 
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-Screen Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Header - Move Inside HomePage */}
      <Header />

      {/* Content Section */}
     {/* Content Section */}
<div className="absolute top-2/3 left-10 transform -translate-y-1/2 flex flex-col gap-5 w-full max-w-6xl">
  {/* Left Text Section */}
  <div className="text-white w-1/2">
    <h1 className="text-[#103c9b] text-5xl font-bold">A New Way to Learn</h1>
    <p className="text-lg mt-5">
      DreamCode is the best platform to help you enhance your skills,
      expand your knowledge, and prepare for technical interviews.
    </p>

    {/* Buttons Section */}
    <div className="mt-6 flex gap-4">
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
  onClick={() => navigate("/login")}
  >
    Create Account
  </button>
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
    Learn More
  </button>
</div>
  </div>
</div>

    </div>
  );
};

export default HomePage;
