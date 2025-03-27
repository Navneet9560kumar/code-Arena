import React from "react";
import { MdDeveloperBoard } from "react-icons/md";

const COLORS = [
  "bg-green-200",
  "bg-teal-200",
  "bg-blue-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-orange-200",
  "bg-red-200",
];

const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "React",
  "Next.js",
  "Gatsby",
  "UI/UX",
  "SVG",
  "Animation",
  "WebDev",
];

const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `scroll ${duration}ms linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
      {/* Custom CSS for Keyframes */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

const Tag = ({ text }) => (
  <div
    className={`text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-md ${
      COLORS[Math.floor(Math.random() * COLORS.length)]
    }`}
  >
    #{text}
  </div>
);

const InfiniteScrollTags = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
<header className="flex items-center justify-center gap-4 mb-6 text-center">
  <MdDeveloperBoard className="text-[#259AF3] text-7xl" />
  <h1 className="text-3xl md:text-4xl font-bold">Developer</h1>
</header>

<p className="text-gray-400 text-center mt-2 mb-8">
  We now support 14 popular coding languages. At our core, LeetCode is about developers. 
  Our powerful development tools such as Playground help you test, debug and even write your own projects online.
</p>

    <div className="relative w-full max-w-4xl space-y-4">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 pointer-events-none"></div>
    </div>
  </div>
);

export default InfiniteScrollTags;
