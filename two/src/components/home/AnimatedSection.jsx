import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3000"
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden w-full h-screen flex">
      <div className="section w-screen h-screen bg-red-500 flex items-center justify-center text-white text-4xl">
        Section 1
      </div>
      <div className="section w-screen h-screen bg-blue-500 flex items-center justify-center text-white text-4xl">
        Section 2
      </div>
      <div className="section w-screen h-screen bg-green-500 flex items-center justify-center text-white text-4xl">
        Section 3
      </div>
      <div className="section w-screen h-screen bg-yellow-500 flex items-center justify-center text-white text-4xl">
        Section 4
      </div>
    </div>
  );
}
 