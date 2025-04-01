// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";

// function ExplorePage() {
//   const cardRef = useRef(null);
//   const [flipped, setFlipped] = useState(false);

//   useEffect(() => {
//     const card = cardRef.current;

//     // Hover effect: Floating effect dene ke leye hai ye 
//     const handleMouseEnter = () => {
//       gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
//     };

//     card.addEventListener("mouseenter", handleMouseEnter);
//     card.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       card.removeEventListener("mouseenter", handleMouseEnter);
//       card.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   // Flip effect on click
//   const handleFlip = () => {
//     setFlipped(!flipped);
//     gsap.to(cardRef.current, {
//       rotateY: flipped ? 0 : 180,
//       duration: 0.6,
//       ease: "power2.inOut",
//       // 
//       //   ease: "none", // Linear animation (bilkul constant speed)
//       // ✔️ Pehle animation slow hoga, fir fast hoga, aur fir dubara slow hoke rukega.
//       // ✔️ Zyada natural aur realistic lagta hai.
      
       
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center  p-8 rounded-lg shadow-lg">
        
//         {/* Left Side - Text Content */}
//         <div className="w-full md:w-1/2 md:pr-8">
//           <h2 className="text-4xl font-bold text-gray-800">Start Exploring</h2>
//           <p className="text-gray-600 mt-4">
//             Explore is a well-organized tool that helps you get the most out of LeetCode by
//             providing structure to guide your progress towards the next step in your programming career.
//           </p>
//           <a href="#" className="text-blue-600 font-bold hover:underline">
//             Get Started
//           </a>
//         </div>

//         {/* Right Side - 3D Floating & Flipping Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div
//             ref={cardRef}
//             onClick={handleFlip}
//             className="rounded-lg shadow-lg w-full md:w-auto max-h-80 cursor-pointer transition-transform"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <img
//               src="https://media.istockphoto.com/id/2198173081/photo/3d-statistics-data-analysis-chart-graphic-on-purple-background.jpg?s=612x612&w=0&k=20&c=lGVtyrWy1qfMzuBFoeKstzqlET3KEnwyYwOmPZjhD4g="
//               alt="Explore Illustration"
//               className="rounded-lg shadow-lg w-full"
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ExplorePage;
import React from "react";
import ExploreList from "../components/ExploreList";  // Explore List import ho raha hai

const ExplorePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-6">Explore Courses</h1>
      <ExploreList />
    </div>
  );
};

export default ExplorePage;
