
import { PrimaryButton,GradientText,Container } from "../../UI/UiComponent";
import { useState } from "react";
// import worksData from "./Work";
import { useSwipeable } from "react-swipeable";


const worksData = [
   {
    id: 1,
    name: "Triveeni Events",
    img: "/Our_Service/6.png",
    theme: "bg-green-100 text-black",

    description: "Healthcare brand awareness campaign in 2 months.",
    stats: [
      { label: "Total Views", value: "1.3M+" },
      { label: "Accounts Reached", value: "439K+" },
      { label: "Followers (136% Growth)", value: "713" },
      { label: "Organic Reach", value: "89%" },
    ],
  },
   {
    id: 2,
    name: "BB_Station",
    img: "/Our_Service/8.png",
    theme: "bg-blue-300 text-black",

    description: "ForexWorld boosted lead generation via campaigns.",
    stats: [
    { label: "Total Views", value: "79K+" },
      { label: "Accounts Reached", value: "48K+" },
      { label: "Followers (Stable Base)", value: "3.9k" },
      { label: "Total Interactions", value: "439" },
    ],
  },
 
  {
    id: 3,
    name: "Nayya",
img: "/Our_Service/3.png",
theme: "bg-yellow-50 text-black",

    description: "Boosted E-commerce sales with influencer marketing.",
    stats: [
       { label: "Total Views(90 days)", value: "3.6M+" },
      { label: " Followers (+755 Growth)", value: "2.7K+" },
      { label: "New Followers (90 Days)", value: "755" },
      { label: "Total Interactions", value: "45.4K" },
    ],
  },
  {
    id: 4,
    name: "Pita Nutso",
   img: "/Our_Service/4.png",
    theme: "bg-gradient-to-r from-purple-300 to-indigo-300 text-black",

    description: "AI Hub’s awareness campaign across social platforms.",
    stats: [
      { label: "App Downloads", value: "89K" },
      { label: "Retention Rate", value: "72%" },
      { label: "Demo Requests", value: "1,200" },
      { label: "Global Reach", value: "1.8M" },
    ],
  },
  {
    id: 5,
    name: "Rivaaj",
   img: "/Our_Service/5.png",
   theme: "bg-blue-50 text-black",

    description: "GamingOne launch campaign generated huge buzz.",
    stats: [
      { label: "Players Joined", value: "300K" },
      { label: "Daily Active Users", value: "50K" },
      { label: "Streams", value: "12K" },
      { label: "Engagement Rate", value: "64%" },
    ],
  },
 {
    id: 6,
    name: "Adda",
    img: "/Our_Service/1.png",
    alt: "uihhlh",
   theme: "bg-gray-300 text-black",

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
    id: 7,
    name: "Sake Cafe",
    img: "/Our_Service/7.png",
      theme: "bg-pink-100 text-black",

    description: "SaaS product growth via targeted influencer collabs.",
    stats: [
      { label: "Subscribers", value: "275K" },
      { label: "MRR Growth", value: "38%" },
      { label: "Churn Reduced", value: "12%" },
      { label: "Active Teams", value: "8,200" },
    ],
  },
  {
    id: 8,
    name: "Desi_Garden",
    img: "/Our_Service/2.png",
    theme: "bg-green-200 text-black",
    description: "Fintech Corp drove massive user deposits through campaigns.",
    stats: [
      { label: "Deposits", value: "20M" },
      { label: "Conversion Rate", value: "16.8%" },
      { label: "Engagement Reels", value: "30%" },
      { label: "PR Reach", value: "1.5M" },
    ],
  },
  {
    id: 9,
    name: "Bar & Grill",
    img: "/Our_Service/9.png",
    theme: "bg-teal-100 text-black",

    description: "EdTech platform grew with 200K organic reach.",
    stats: [
      { label: "Students Enrolled", value: "198K" },
      { label: "Courses Completed", value: "75K" },
      { label: "Mentor Signups", value: "1,200" },
      { label: "Social Mentions", value: "5.5K" },
    ],
  },
  {
    id: 10,
    name: "Piink",
    img: "/Our_Service/10.png",
    theme: "bg-slate-400 text-black",

    description: "Web3Chain’s marketing campaign for crypto adoption.",
    stats: [
      { label: "Community Growth", value: "260K" },
      { label: "Token Holders", value: "55K" },
      { label: "Campaign Reach", value: "4.2M" },
      { label: "Engagement Rate", value: "34%" },
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

  // Swipe handlers
const handlers = useSwipeable({
  onSwipedLeft: () => nextWork(),   // Swipe left → next
  onSwipedRight: () => prevWork(),  // Swipe right → previous
  preventDefaultTouchmoveEvent: true,
  trackMouse: true,                 // desktop drag bhi support
});


   return (
    <section className="py-12 px-4 sm:px-6 md:px-12 text-center">
      <Container>
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-10">
          Our Works
        </h2>

      {/* Company Tabs */}
<div className="w-full overflow-x-auto scrollbar-hide scroll-smooth mb-6 sm:mb-10">
  <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 px-1 sm:px-0 min-w-max sm:min-w-0">
    {worksData.map((work, index) => (
      <button
        key={work.id}
        onClick={() => setActiveIndex(index)}
        className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-md font-medium transition-all duration-300 ${
          activeIndex === index
            ? `${activeWork.theme}`
            : "bg-gray-50 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {work.name}
      </button>
    ))}
  </div>
</div>
{/* Active Work Details with swipe support */}
<div
  {...handlers}
  className={`${activeWork.theme} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 shadow-xl`}
>
  {/* Left: Text Content */}
  <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 text-center md:text-left">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      {activeWork.name}
    </h3>
    <p className="hidden text-base sm:text-lg opacity-90">
      {activeWork.description}
    </p>

    {/* Stats */}
    <div className="grid md:grid grid-cols-2 gap-4 mt-4">
      {activeWork.stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white text-black rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center shadow-md"
        >
          <div className="text-lg sm:text-2xl font-bold">{stat.value}</div>
          <div className="text-xs sm:text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Read More Button */}
    <div className="mt-5 sm:mt-6 items-center">
      <PrimaryButton href={`/Work/Triveeni Events`}>Read More</PrimaryButton>
    </div>
  </div>

  {/* Right: Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={activeWork.img}
      alt={activeWork.name}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl sm:rounded-2xl object-cover"
    />
  </div>
</div>


        {/* Bottom Navigation */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {/* <PrimaryButton href="#contact">See More Success Stories</PrimaryButton> */}

          <div className="flex gap-2 sm:gap-3">
            {/* Prev */}
            <button
              onClick={prevWork}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white shadow-md"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={nextWork}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white shadow-md"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}