import { GiAllSeeingEye } from "react-icons/gi";
import { FaBattleNet } from "react-icons/fa"; 
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Explore() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  // Hover pe float animation (GSAP)
  useEffect(() => {
    gsap.to(cardRef.current, {
      y: -10, // Float effect
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  // Click pe flip animation (GSAP) - Faster Flip (0.3s)
  useEffect(() => {
    gsap.to(cardRef.current, {
      rotateY: flipped ? 180 : 0,
      duration: 2, // ✅ Faster flip
      ease: "power2.out",
    });
  }, [flipped]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-stretch p-8 rounded-lg shadow-lg bg-white gap-8">
        
        {/* Left Side - Questions & Community */}
        <div className="flex-1 flex flex-col justify-between bg-gray-50 p-6 rounded-lg shadow-md">
          <h4 className="text-3xl font-bold text-[#259AF3] flex items-center gap-2">
          Start Exploring
            <FaBattleNet className="text-[#259AF3] text-7xl ml-auto" />
          </h4>
          
          <p className="text-gray-600 mt-4">
          Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career
          </p>
           <Link to="/explore" className="text-blue-600 font-bold hover:underline mt-auto">
                    Get started
                   </Link>
        </div>

        {/* Floating & Flipping Image with GSAP */}
        <div className="flex items-center justify-center">
          <div
            ref={cardRef}
            className="w-[22rem] h-[16rem] cursor-pointer transform transition-all duration-500 relative"
            onClick={() => setFlipped(!flipped)}
          >
            <img
              src="https://media.istockphoto.com/id/2201065751/photo/technology-background-image-graph-concept-stock-market-investment-and-finance-trading.jpg?s=612x612&w=0&k=20&c=NLNgqU6U7PoBr4jGGyrgbDaBGJDj-egzkAKFhMPVPhU=" 
              alt="Tech Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Explore;
