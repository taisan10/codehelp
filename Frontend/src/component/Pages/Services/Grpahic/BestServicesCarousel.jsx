import { useState, useEffect } from "react";
import { GradientText, Container, SectionTitle } from "../../../UI/UiComponent";

export function BestServicesCarousel() {
  const platforms = [
  {
    name: "Social Media Graphics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-pink-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4V4zm3 3v10h10V7H7z" />
      </svg>
    ),
    description:
      "Engaging visuals crafted to boost interaction, increase reach, and strengthen brand consistency. ",
    tags: [
      "Posts & Stories",
      "Banners & Ads Creative",
      "Platform-Optimized Designs",
      "High-Impact Visuals for Maximum Engagement",
  
    ],
  },
  {
    name: "Logo Design",
    icon: (

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v6c0 5.25 3.92 10.74 10 13 6.08-2.26 10-7.75 10-13V7l-10-5z" />
      </svg>
      
    ),
    description:
      "Create distinctive, memorable logos that define your brand and leave a lasting impression.",
    tags: [
      "Custom Logo Concepts",
      "Brand Identity Development",
      "Minimalist & Modern Designs",
      "Typography & Visual Storytelling",
     
    ],
  },
  {
    name: "Poster & Flyer Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 2h12a2 2 0 012 2v16l-8-4-8 4V4a2 2 0 012-2z" />
      </svg>
    ),
    description:
      "Promotional materials designed to capture attention and communicate your message effectively.",
    tags: [
      "Print-Ready Layouts",
      "Event & Marketing Flyers",
      "Typography-Focused Designs",
      "Bold & Eye-Catching Visuals",
   
    ],
  },
  {
    name: "Brand Identity",
    icon: (
     <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-red-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 3h18v2H3V3zm0 7h10v2H3v-2zm0 7h6v2H3v-2zM15 10h6v2h-6v-2zm-4 7h10v2H11v-2z" />
      </svg>
    ),
    description:
      "Comprehensive branding solutions that ensure consistency and recognition across all touchpoints. ",
    tags: [
      "Complete Brand Kits",
      "Color & Typography Guidelines",
      "Visual Style Development",
      "Creative Conceptualization",
  
    ],
  },
  {
    name: "Business Cards",
    icon: (
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm4 2v2h8V8H6zm0 4v2h6v-2H6z" />
      </svg>
      
    ),
    description:
      "Professional, stylish cards that make networking impactful and reflect your brand’s personality.",
    tags: [
      "Custom Layouts",
      "Minimalist & Corporate Styles",
      "Print-Ready High-Resolution Designs",
      "Consistent Brand Representation",
    
    ],
  },
  
];


  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === platforms.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [platforms.length]);

  // Swipe handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setIndex(index === platforms.length - 1 ? 0 : index + 1);
    }
    if (touchStart - touchEnd < -50) {
      setIndex(index === 0 ? platforms.length - 1 : index - 1);
    }
  };

  return (
    <div className="relative py-14 bg-neutral-950 text-white overflow-hidden">
      <Container>
        <SectionTitle
          title={<GradientText>What We Do Best
</GradientText>}
          subtitle="Tailored graphics solutions across every platform to elevate your brand presence. "
        />

        <div className="relative mt-10">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {platforms.map((platform, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-4 sm:px-8 md:px-15"
                >
                  <div className="bg-[#1a1a1a] rounded-3xl p-6 sm:p-10 shadow-xl h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl sm:text-5xl font-bold">
                        {platform.name}
                      </h3>
                      <div className="border border-white rounded-full h-20 w-20 sm:h-28 sm:w-28 flex items-center justify-center">
                        {platform.icon}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-white/70 mb-10">
                      {platform.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {platform.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-white text-xs sm:text-sm px-3 py-1 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {platforms.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i ? "bg-sky-500" : "bg-gray-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}










