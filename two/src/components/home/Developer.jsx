import React from 'react';
import { MdDeveloperBoard } from "react-icons/md";

function Developer() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <MdDeveloperBoard className="text-[#259AF3] text-7xl mb-4" />
      <h3 className="text-[#35A397] text-5xl font-bold">Developer</h3>
      <p className="text-gray-600 mt-4 max-w-lg">
        We now support 14 popular coding languages. At our core, LeetCode is about developers. 
        Our powerful development tools such as Playground help you test, debug and even write 
        your own projects online.
      </p>
    </div>
  );
}

export default Developer;
