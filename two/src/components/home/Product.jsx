import { GiAllSeeingEye, GiBackup } from "react-icons/gi"; 
import React from "react";
import {Link} from "react-router-dom";

function Product() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-stretch bg-white p-8 rounded-lg shadow-lg gap-8">
        
        {/* Left Side - Questions & Community */}
        <div className="flex-1 flex flex-col justify-between bg-gray-50 p-6 rounded-lg shadow-md">
          {/* Title with Icon */}
          <h4 className="text-3xl font-bold text-[#259AF3] flex items-center gap-2">
           
            Questions, Community & Contests
            <GiAllSeeingEye className="text-[#259AF3] text-7xl ml-auto" />  
          </h4>
          
          <p className="text-gray-600 mt-4">
            Over 3700 questions for you to practice. Come and join one of the
            largest tech communities with hundreds of thousands of active users
            and participate in our contests to challenge yourself and earn
            rewards.
          </p>
          <Link to="/explore" className="text-blue-600 font-bold hover:underline mt-auto">
            View Questions
          </Link>
        </div>

        {/* Right Side - Companies & Candidates */}
        <div className="flex-1 flex flex-col justify-between bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-[#B7892B] flex items-center gap-2">
            Companies & Candidates
            <GiBackup className="text-[#B7892B] text-7xl ml-auto" />
          </h2>
          <p className="text-gray-600 mt-4">
            Not only does LeetCode prepare candidates for technical interviews, we
            also help companies identify top technical talent. From sponsoring
            contests to providing online assessments and training, we offer
            numerous services to businesses.
          </p>
          <a href="#" className="text-blue-600 font-bold hover:underline mt-auto">
            Business Opportunities
          </a>
        </div>

      </div>
    </div>
  );
}

export default Product;
