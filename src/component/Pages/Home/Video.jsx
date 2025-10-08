import { Container } from "../../UI/UiComponent";
import { useState, useEffect, useRef } from "react";

export default function Video() {
  // ✅ Multiple categories
  const videoCategories = {
    UGC: [
      "/videos/video1.mp4",
      "/videos/video2.mov",
      "/videos/video3.MP4",
      "/videos/video4.mov",
      "/videos/bg1.mp4",
    ],
    EVENTS: [
      "/videos/video1.mp4",
      "/videos/bg1.mp4",
      "/videos/video3.MP4",
      "/videos/video2.mov",
      "/videos/video4.mov",
    ],
    SMM: [
      "/videos/video3.MP4",
      "/videos/video2.mov",
      "/videos/bg1.mp4",
      "/videos/video4.mov",
      "/videos/video1.mp4",
    ],
    "Video Production": [
      "/videos/video2.mov",
      "/videos/video4.mov",
      "/videos/bg1.mp4",
      "/videos/video3.MP4",
      "/videos/video1.mp4",
    ],
    "Personal Branding": [
      "/videos/bg1.mp4",
      "/videos/video1.mp4",
      "/videos/video3.MP4",
      "/videos/video2.mov",
      "/videos/video4.mov",
    ],
    "Influencer Marketing": [
      "/videos/video1.mp4",
      "/videos/video3.MP4",
      "/videos/video2.mov",
      "/videos/bg1.mp4",
      "/videos/video4.mov",
    ],
  };

  const categories = Object.keys(videoCategories);

  // ✅ Active category state
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const videos = videoCategories[activeCategory];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState(
    videos.map(() => true) // sab mute by default
  );

  // ✅ Reset when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setMutedStates(videos.map(() => true));
  }, [activeCategory]);

  // ✅ Responsive visible slides
  const getVisibleSlides = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < videos.length - visibleSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // ✅ Ek hi video unmute rahe
  const toggleMute = (index) => {
    setMutedStates((prev) =>
      prev.map((_, i) => (i === index ? !prev[i] : true))
    );
  };

  // Section Ref
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Agar section poora viewport se bahar चला गया
            setMutedStates((prev) => prev.map(() => true));
          }
        });
      },
      { threshold: 0 } // jaise hi section bahar jaye, trigger ho
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="-mt-20">
      <Container>
        {/* Category Buttons Section */}
        <div className="w-full overflow-x-auto scrollbar-hide scroll-smooth relative z-10">
          <div className="flex flex-nowrap gap-3 justify-start sm:justify-center p-4 min-w-max bg-cream-50 rounded-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-8 sm:px-10 py-2 rounded-full text-base sm:text-lg font-medium transition border ${
                    isActive
                      ? "bg-sky-500 text-white border-sky-500 shadow-md"
                      : "bg-white text-gray-800 border-cream-300 hover:bg-cream-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ✅ Videos Slider */}
        <div 
         ref={sectionRef}
         className="relative w-full py-10 overflow-hidden ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / visibleSlides
              }%)`,
            }}
          >
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2"
              >
                <div className="relative w-full aspect-[9/16] bg-black rounded-[2rem] border border-neutral-800 shadow-xl overflow-hidden">
                  {/* Video */}
                  <video
                    
                    src={video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted={mutedStates[idx]}
                  />
                  {/* Mute/Unmute Button */}
                  <button
                    onClick={() => toggleMute(idx)}
                    className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full text-xs hover:bg-black transition"
                  >
                    {mutedStates[idx] ? "🔇" : "🔊"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute -left-1 top-1/2 -translate-y-1/2 z-40 bg-white text-black p-3 rounded-full "
            >
              {"<"}
            </button>
          )}

          {/* Right Arrow */}
          {currentIndex < videos.length - visibleSlides && (
            <button
              onClick={nextSlide}
              className="absolute -right-1 top-1/2 -translate-y-1/2 z-40 bg-white text-black p-3 rounded-full"
            >
              {">"}
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
