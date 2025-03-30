import React from "react";
import ExploreCard from "./ExploreCard";
import exploreData from "../data/ExploreData";

const ExploreList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-10">
      {/* Featured Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured</h2>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {exploreData.featured.map((course, index) => (
            <ExploreCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* Interview Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Interview</h2>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {exploreData.interview.map((course, index) => (
            <ExploreCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreList;
