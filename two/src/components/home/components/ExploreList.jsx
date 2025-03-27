import React from "react";
import ExploreCard from "./ExploreCard";
import exploreData from "../data/ExploreData";

const ExploreList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-wrap gap-10 justify-center">
      {/* Featured Column */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Featured</h2>
        <div className="flex flex-wrap gap-6">
          {exploreData.featured.map((course, index) => (
            <ExploreCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* Interview Column */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Interview</h2>
        <div className="flex flex-wrap gap-6">
          {exploreData.interview.map((course, index) => (
            <ExploreCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreList;
