// export default function Company() {
//   return <h1 className="text-center text-3xl p-10">Company Page</h1>;
// }

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


      </Container>
    </section>
  );
}
