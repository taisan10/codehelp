// export default function Company() {
//   return <h1 className="text-center text-3xl p-10">Company Page</h1>;
// }

<<<<<<< HEAD

import { useState, useEffect } from "react";
import {Container} from "../UI/UiComponent"; // adjust import if needed

// Sample video data grouped by category
const videoCategories = [
  {
    name: "UGC",
    videos:  [
    "/videos/video1.mp4",
    "/videos/video2.mov",
    "/videos/video3.MP4",
    "/videos/video4.mov",
    "/videos/bg1.mp4",
  ],
  },
  {
    name: "EVENTS",
    videos: ["/event1.mp4", "/event2.mp4", "/event3.mp4", "/event4.mp4"],
  },
  {
    name: "SMM",
    videos: ["/smm1.mp4", "/smm2.mp4", "/smm3.mp4", "/smm4.mp4"],
  },
  {
    name: "Video Production",
    videos:  [
    "/videos/video1.mp4",
    "/videos/video2.mov",
    "/videos/video3.MP4",
    "/videos/video4.mov",
    "/videos/bg1.mp4",
  ],
  },
  {
    name: "Personal Branding",
    videos: ["/pb1.mp4", "/pb2.mp4", "/pb3.mp4", "/pb4.mp4"],
  },
  {
    name: "Influencer Marketing",
    videos: ["/im1.mp4", "/im2.mp4", "/im3.mp4", "/im4.mp4"],
  },
];

export default function Company() {
  const [selectedCategory, setSelectedCategory] = useState("UGC");
  const [videos, setVideos] = useState(videoCategories[0].videos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState(
    videoCategories[0].videos.map(() => true)
  );

  const visibleSlides = 4; // adjust for responsiveness if needed

  useEffect(() => {
    const matched = videoCategories.find((cat) => cat.name === selectedCategory);
    setVideos(matched ? matched.videos : []);
    setMutedStates(matched ? matched.videos.map(() => true) : []);
    setCurrentIndex(0); // reset carousel position on category change
  }, [selectedCategory]);

 const toggleMute = (idx) => {
  setMutedStates((prev) =>
    prev.map((state, i) => (i === idx ? !state : state))
  );
};

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, videos.length - visibleSlides)
    );
  };

  return (
    <section>
      <Container>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-26">
          {videoCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat.name
                  ? "bg-yellow-400 text-black"
                  : "bg-neutral-800 text-white hover:bg-neutral-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Video Carousel */}
        <div className="relative w-full py-10 overflow-hidden">
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
                <div className="relative w-full aspect-[9/16] bg-black rounded-[2rem] border-[1px] border-neutral-800 shadow-xl overflow-hidden">
                  <video
                    src={video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted={mutedStates[idx]}
                  />
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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition"
            >
              ◀
            </button>
          )}

          {/* Right Arrow */}
          {currentIndex < videos.length - visibleSlides && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition"
            >
              ▶
            </button>
          )}
        </div>
=======
import { PrimaryButton,GradientText,Container } from "../../component/UI/UiComponent";

import { useState } from "react";
const worksData = [
  {
    id: 1,
    name: "Adda",
    img: "/Our_Service/1.png",
    alt: "uihhlh",
      theme: "bg-blue-100 text-black",
    description:
      "500,000 Views on Twitter in 3 Months: Influencer Marketing for Betmode’s Gambling Platform",
    stats: [
      { label: "Views", value: "517,507" },
      { label: "Likes", value: "7,701" },
      { label: "Reposts", value: "2,530" },
      { label: "Comments", value: "2,343" },
    ],
  },
  {
    id: 2,
    name: "Desi_Garden",
    img: "/images/fintech.png",
    description: "Fintech Corp drove massive user deposits through campaigns.",
    stats: [
      { label: "Deposits", value: "20M" },
      { label: "Conversion Rate", value: "16.8%" },
      { label: "Engagement Reels", value: "30%" },
      { label: "PR Reach", value: "1.5M" },
    ],
  },
  
];


export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextWork = () => {
    setActiveIndex((prev) => (prev + 1) % worksData.length);
  };

  const prevWork = () => {
    setActiveIndex((prev) =>
      prev === 0 ? worksData.length - 1 : prev - 1
    );
  };

  const activeWork = worksData[activeIndex];

  

  return (
    <section className="py-16 px-4 md:px-12 text-center">
      <Container>
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-bold mb-10">Our Works</h2>

{/* Active Work Details */}
<div className={`${activeWork.theme} rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl text-white`}>

  {/* Left: Text Content */}
  <div className="md:w-[50%] flex flex-col gap-6">
    <h3 className="text-4xl font-bold text-black">{activeWork.name}</h3>
    <p className="text-lg opacity-90 text-black">{activeWork.description}</p>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-4 mt-4">
      {activeWork.stats.map((stat, idx) => (
        <div key={idx} className="bg-white text-black rounded-xl px-4 py-3 text-center shadow-md">
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Read More Button */}
    <div className="mt-6">
      <PrimaryButton href="#contact">Read More</PrimaryButton>
    </div>
  </div>

  {/* Right: Tablet-style Image */}
  <div className="md:w-[50%] flex justify-center">
    <img
      src={activeWork.img}
      alt={activeWork.name}
      className="w-full max-w-md rounded-2xl  object-cover "
    />
  </div>
</div>


>>>>>>> 3b6d227 (First commit)
      </Container>
    </section>
  );
}
