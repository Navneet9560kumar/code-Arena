import React from "react";

const ExploreCard = ({
  title,
  description,
  image,
  chapters,
  items,
  progress,
  link,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border h-[340px] ">
      <div
        className="relative h-40 w-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center p-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-gray-600 text-sm">
          <div>
            <span className="font-bold text-lg">{chapters}</span> Chapters
          </div>
          <div>
            <span className="font-bold text-lg">{items}</span> Items
          </div>
        </div>
        <div className="mt-3 h-2 w-full bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <a
          href={link}
          className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
};

export default ExploreCard;
