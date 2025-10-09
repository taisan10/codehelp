// // export default function Work() {
// //   return <h1 className="text-center text-3xl p-10">Work Page</h1>;
// // }
// BetmodeCase.jsx

import { Container } from "../UI/UiComponent";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white px-6 py-28 pt-40 -mt-20">
      <Container className="md:flex md:items-center md:justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
           Triveeni Events 
         </motion.h1>
          <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl font-medium"
      >
           1.3M+ Views in 90 Days: Organic Social Media Strategy 
      </motion.p>
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              "Strategic Planning",
              "Data Insights",
              "Community Building",
              
            ].map((tag) => (
              <button
                key={tag}
                className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
       
      
            src="/Our_Service/8.png"
            alt="Betmode Honeymoon Promo"
            className="max-w-xs md:max-w-md rounded-lg">
        </motion.img>
        </div>
      </Container>
    </section>
  );
};

const Sidebar = () => {
  const links = [
    "Overview",
    "Services Provided",
    "Challenge",
    "Approach",
    "Curious About Our Approach",
  ];

  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase().replace(/\s+/g, "-"));
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = link;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="sticky top-2 h-screen bg-gray-50 border-r px-6 py-10">
      <nav className="space-y-6">
        {links.map((link) => {
          const linkId = link.toLowerCase().replace(/\s+/g, "-");
          const isActive = active === link;
          return (
            <a
              key={link}
              href={`#${linkId}`}
              className={`block font-medium px-2 py-1 rounded transition-colors ${
                isActive ? "text-blue-600 border-l-4 border-blue-600" : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {link}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};




import { useEffect, useState, useRef } from "react";

const OverviewSection = () => {
  const metrics = [
    { label: "Views", value: 1300_000, suffix: "+" },
    { label: "Accounts Reached", value: 439_000, suffix: "+" },
    { label: "Followers (136% Growth)", value: 713, suffix: "+" },
    { label: "Organic Reach", value: 89, suffix: "%" },
    { label: "Non-Follower Engagement", value: 62, suffix: "%" },
    { label: "Avg. Monthly Growth Rate", value: 130, suffix: "%" },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    let observer;
    let countersStarted = false;

    const startCounting = () => {
      const duration = 5000; // 5 seconds
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      const easeOutQuad = (t) => t * (2 - t);

      metrics.forEach((metric, i) => {
        const countTo = metric.value;
        let frame = 0;

        const counter = setInterval(() => {
          frame++;
          const progress = easeOutQuad(frame / totalFrames);
          const current = Math.floor(countTo * progress);

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = current;
            return newCounts;
          });

          if (frame === totalFrames) clearInterval(counter);
        }, 1000 / frameRate);
      });
    };

    if (sectionRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            startCounting();
          }
        },
        { threshold: 0.5 } // start when 50% of section is visible
      );
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const formatValue = (value, metric) => {
    if (metric.suffix === "M+") {
      return value >= metric.value
        ? `${metric.value / 1_000_000}M+`
        : `${Math.floor(value / 1_000_000)}M`;
    } else if (metric.suffix === "%") {
      return value >= metric.value ? `${metric.value}%` : `${value}%`;
    } else if (metric.suffix === "+") {
      return value >= metric.value
        ? `${metric.value.toLocaleString()}+`
        : `${value.toLocaleString()}`;
    } else {
      return value.toLocaleString();
    }
  };

  return (
    <section ref={sectionRef} id="overview" className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
      <p className="text-gray-700 text-lg mb-8 max-w-3xl">
        Triveeni Events is a women-led event planning company specializing in creating extraordinary Indian celebrations and cultural events across the Atlantic region. <br /><br />
The target audience includes people of all ages who love to experience and celebrate the vibrancy of Indian festivals, traditions, and cultural gatherings.<br /><br />
As a women-led business, Triveeni Events brings a unique perspective and deep understanding of Indian traditions, customs, and the importance of preserving cultural heritage while creating modern, memorable experiences. <br /><br />
Our goal was to establish Triveeni Events as the premier Instagram presence for Indian event planning in the Atlantic region through organic growth strategies. <br /><br />
We focused on a Reels-first content approach and algorithm optimization to maximize reach without heavy ad spend, effectively showcasing Triveeni Events' stunning portfolio of colorful celebrations to attract high-quality client inquiries and engage enthusiasts across all demographics.

      </p>

      <div className="grid grid-cols-2 gap-6 max-w-xl">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="text-2xl font-bold text-blue-900">
              {formatValue(counts[index], item)}
            </div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};






const ServicesProvided = () => {
  const services = [
    { name: "Social Media Strategy", icon: "⭐" },
    { name: "Content Creation & Optimization", icon: "🛡️" },
    { name: "Reels Production & Editing", icon: "✏️" },
    { name: "Analytics & Performance Tracking", icon: "✏️" },
    { name: "Audience Growth Management", icon: "✏️" },
  ];

  return (
    <section id="services-provided" className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Services Provided
      </h2>
      <div className="flex flex-wrap gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white border rounded-lg shadow-sm px-6 py-4"
          >
            <div className="text-3xl">{service.icon}</div>
            <div className="text-lg font-medium text-gray-800">
              {service.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ChallengeSection = () => {
  return (
    <section id="challenge" className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
      <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
       We started by reviewing Triveeni Events' existing Instagram presence, brand guidelines, and growth objectives. 
        <br />
        <br />
        The client was operating in a competitive event management market with limited advertising budget and needed rapid, sustainable growth to attract quality leads. Key challenges included:

        Low initial engagement <br />
        <br />
Limited organic reach and visibility in a saturated event planning niche 
<br />
        <br />
Need for cost-effective growth without relying on paid ads <br />
        <br />
Requirement to build authentic audience of potential clients and industry partners <br />
        <br />
Showcasing event portfolio in engaging, shareable formats

      </p>
    </section>
  );
};

const ApproachSection = () => {
  return (
    <section id="approach" className="bg-gray-50 text-gray-900 py-12 sm:py-16">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 p-6 sm:p-8 ring-1 ring-white/10">
          <h2 className="text-3xl font-bold mb-4">Approach</h2>
          <p className="text-lg leading-relaxed max-w-6xl text-black">
           Phase 1: Build awareness through algorithm-optimized content strategy. Establish baseline metrics and test various content formats to identify top performers. Focus on Reels production featuring event highlights, venue transformations, and client testimonials with trending audio and viral content elements.
           <br />
        <br />
Phase 2: Scale successful content formats and double down on Reels strategy showcasing Triveeni Events' diverse portfolio. Optimize posting times based on audience analytics. Implement advanced hashtag research targeting event planning, wedding, and corporate event niches. Create Explore page optimization tactics.
<br />
        <br />
Phase 3: Maximize reach through refined content calendar featuring seasonal events and proven viral formulas. Achieve consistent non-follower engagement above 60% to attract new clients. Establish sustainable growth model for long-term lead generation and brand authority.

          </p>
        </div>
      </Container>
    </section>
  );
};

const CuriousSection = () => {
  return (
    <section id="curious-about-our-approach" className="py-12 sm:py-16 bg-gray-50 ">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 p-6 sm:p-8 ring-1 ring-white/10">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl sm:text-3xl font-semibold">
              Curious about our approach?
            </h3>
            <p className="mt-2 text-white/80">
              Contact us to see how we can meet your needs!
            </p>
            <div className="mt-5 sm:mt-6">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
const CaseStudyLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <OverviewSection />
        <ServicesProvided />
        <ChallengeSection />
        <ApproachSection />
        <CuriousSection />
      </main>
    </div>
  );
};


const CaseStudiesSections = () => {
  const studies = [
    {
      title: "Betmode",
      desc: "500,000 Views on Twitter in 3 Months: Influencer Marketing for Betmode’s Gambling Platform",
      img: "/Our_Service/8.png",
      bg: "bg-blue-400",
    },
    {
      title: "Platoon",
      desc: "Platoon Case Study: Community Management for a Military-Themed Crypto Project",
      img: "/Our_Service/9.png",
      bg: "bg-orange-400",
    },
    {
      title: "Zoomex",
      desc: "In Just 2 Months, We Relaunched the Zoomex Blog and Kickstarted Organic Growth in a Highly Competitive Crypto Niche",
      img: "/Our_Service/10.png",
      bg: "bg-purple-600",
    },
    {
      title: "UDAO",
      desc: "How NinjaPromo Helped UDAO Enter the Crypto Market: From Idea to Successful Listing",
      img: "/Our_Service/1.png",
      bg: "bg-red-400",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-12">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Read other Case Studies Of Company
        </h2>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* 60% */}
          <div className="md:w-3/5 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
            <div className={`${studies[0].bg} text-white p-6 flex flex-col justify-between h-full`}>
              <div>
                <h3 className="text-2xl font-bold mb-4">{studies[0].title}</h3>
                <p className="text-lg">{studies[0].desc}</p>
              </div>
              <img src={studies[0].img} alt={studies[0].title} className="w-70 mt-4 rounded-lg object-cover max-h-60" />
            </div>
          </div>

          {/* 40% */}
          <div className="md:w-2/5 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
            <div className={`${studies[1].bg} text-white p-6 flex flex-col justify-between h-full`}>
              <div>
                <h3 className="text-2xl font-bold mb-4">{studies[1].title}</h3>
                <p className="text-lg">{studies[1].desc}</p>
              </div>
              <img src={studies[1].img} alt={studies[1].title} className="w-80 mt-4 rounded-lg object-cover max-h-60" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* 35% */}
          <div className="md:w-35% rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
            <div className={`${studies[2].bg} text-white p-6 flex flex-col justify-between h-full`}>
              <div>
                <h3 className="text-2xl font-bold mb-4">{studies[2].title}</h3>
                <p className="text-lg">{studies[2].desc}</p>
              </div>
              <img src={studies[2].img} alt={studies[2].title} className="w-90 mt-4 rounded-lg object-cover max-h-60" />
            </div>
          </div>

          {/* 65% */}
          <div className="md:w-65% rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
            <div className={`${studies[3].bg} text-white p-6 flex flex-col justify-between h-full`}>
              <div>
                <h3 className="text-2xl font-bold mb-4">{studies[3].title}</h3>
                <p className="text-lg">{studies[3].desc}</p>
              </div>
              <img src={studies[3].img} alt={studies[3].title} className="w-70 mt-4 rounded-lg object-cover max-h-60" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};





const Work = () => (
  <div>
    <HeroSection />
    <CaseStudyLayout />
   
    <CaseStudiesSections />
  </div>
);

export default Work;


// import { Container } from "../UI/UiComponent";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const HeroSection = () => (
//   <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 text-white px-6 py-38 pt-40 -mt-20 overflow-hidden">
//     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)]" />
//     <Container className="relative md:flex md:items-center md:justify-between">
//       {/* Left Side */}
//       <div className="md:w-1/2 space-y-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
//         >
//           Betmode
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-lg md:text-xl font-light text-blue-100"
//         >
//           500,000 Views on Twitter in 3 Months: Influencer Marketing for
//           Betmode’s Gambling Platform.
//         </motion.p>

//         <motion.div
//           className="flex flex-wrap gap-3 pt-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.7 }}
//         >
//           {["iGaming", "Digital Design", "Influencer Marketing", "Social Media"].map(
//             (tag) => (
//               <button
//                 key={tag}
//                 className="bg-white/90 text-blue-900 font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-white transition-all duration-300"
//               >
//                 {tag}
//               </button>
//             )
//           )}
//         </motion.div>
//       </div>

//       {/* Right Side */}
//       <motion.div
//         className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
//         initial={{ opacity: 0, x: 150 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2, delay: 0.5 }}
//       >
//         <img
//           src="/Our_Service/8.png"
//           alt="Betmode Honeymoon Promo"
//           className="max-w-xs md:max-w-md rounded-2xl shadow-2xl ring-2 ring-white/30"
//         />
//       </motion.div>
//     </Container>
//   </section>
// );

// const Sidebar = () => {
//   const links = [
//     "Overview",
//     "Services Provided",
//     "Challenge",
//     "Approach",
//     "Curious About Our Approach",
//   ];

//   return (
//     <aside className="sticky top-0 h-screen bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 px-6 py-10 hidden lg:block">
//       <nav className="space-y-6">
//         {links.map((link) => (
//           <a
//             key={link}
//             href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
//             className="block text-gray-800 font-medium hover:text-blue-600 transition-colors duration-300"
//           >
//             {link}
//           </a>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// const OverviewSection = () => {
//   const metrics = [
//     { label: "Views", value: 200_000_000, suffix: "M+" },
//     { label: "Likes", value: 7701, suffix: "+" },
//     { label: "Reposts", value: 2530, suffix: "+" },
//     { label: "Comments", value: 2343, suffix: "+" },
//     { label: "Bookmarks", value: 32, suffix: "+" },
//     { label: "Engagement Rate", value: 2, suffix: "%" },
//   ];

//   const [counts, setCounts] = useState(metrics.map(() => 0));

//   useEffect(() => {
//     const duration = 5000;
//     const frameRate = 60;
//     const totalFrames = Math.round((duration / 1000) * frameRate);
//     const easeOutQuad = (t) => t * (2 - t);

//     metrics.forEach((metric, i) => {
//       const countTo = metric.value;
//       let frame = 0;
//       const counter = setInterval(() => {
//         frame++;
//         const progress = easeOutQuad(frame / totalFrames);
//         const current = Math.floor(countTo * progress);
//         setCounts((prev) => {
//           const newCounts = [...prev];
//           newCounts[i] = current;
//           return newCounts;
//         });
//         if (frame === totalFrames) clearInterval(counter);
//       }, 1000 / frameRate);
//     });
//   }, []);

//   const formatValue = (value, metric) => {
//     if (metric.suffix === "M+") {
//       return value >= metric.value
//         ? `${metric.value / 1_000_000}M+`
//         : `${Math.floor(value / 1_000_000)}M`;
//     } else if (metric.suffix === "%") {
//       return value >= metric.value ? `${metric.value}%` : `${value}%`;
//     } else if (metric.suffix === "+") {
//       return value >= metric.value
//         ? `${metric.value.toLocaleString()}+`
//         : `${value.toLocaleString()}`;
//     } else {
//       return value.toLocaleString();
//     }
//   };

//   return (
//     <section id="overview" className="px-6 py-20 bg-gray-50">
//       <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
//       <p className="text-gray-700 text-lg mb-10 max-w-3xl leading-relaxed">
//         Betmode is a new online gambling platform in the iGaming niche. The
//         target audience includes experienced Web3 and crypto users with their
//         own wallets, who are looking for fair and transparent iGaming
//         platforms.
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl">
//         {metrics.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 text-center"
//           >
//             <div className="text-3xl font-extrabold text-blue-700 mb-1">
//               {formatValue(counts[index], item)}
//             </div>
//             <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
//               {item.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const ServicesProvided = () => (
//   <section id="services-provided" className="px-6 py-20 bg-gray-50">
//     <h2 className="text-4xl font-bold text-gray-900 mb-10">
//       Services Provided
//     </h2>
//     <div className="flex flex-wrap gap-8">
//       {[
//         { name: "Influencer Marketing", icon: "⭐" },
//         { name: "Social Media", icon: "🛡️" },
//         { name: "Digital Design", icon: "✏️" },
//       ].map((service, index) => (
//         <div
//           key={index}
//           className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm px-8 py-5 hover:shadow-lg transition-all duration-300"
//         >
//           <div className="text-4xl">{service.icon}</div>
//           <div className="text-lg font-semibold text-gray-800">
//             {service.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// const ChallengeSection = () => (
//   <section id="challenge" className="px-6 py-20 bg-gray-50">
//     <h2 className="text-4xl font-bold text-gray-900 mb-8">Challenge</h2>
//     <div className="space-y-6 max-w-3xl text-lg leading-relaxed text-gray-700">
//       <p>
//         We started by reviewing all the initial materials: the client’s brief,
//         product, and goals. Together, we discussed the key objectives. For
//         competitor analysis, we focused on the projects the client had pointed
//         to as references — well-known names in the iGaming and Web3 segments.
//       </p>
//       <p>
//         Using brand analytics, we looked into which influencers had promoted
//         these platforms, what their posts looked like, and what kind of offers
//         they used. This research led us to two key insights.
//       </p>
//     </div>
//   </section>
// );

// const ApproachSection = () => (
//   <section id="approach" className="py-20 bg-gray-50 text-white">
//     <Container>
//       <div className="rounded-3xl p-10 bg-white/10 bg-gradient-to-r from-blue-700 to-teal-600  backdrop-blur-md shadow-xl">
//         <h2 className="text-4xl font-bold mb-6">Approach</h2>
//         <p className="text-lg leading-relaxed max-w-3xl text-white/90">
//           Build awareness for the new project and stand out from competitors.
//           Test an influencer campaign as the first stage of the funnel — helping
//           to establish awareness before moving into performance campaigns aimed
//           at direct registrations and deposits. Plan the next move via a
//           cross-project track, map metrics, identify the best-performing
//           influencers, and lay the groundwork for the next stage of promotion.
//         </p>
//       </div>
//     </Container>
//   </section>
// );

// const CuriousSection = () => (
//   <section
//     id="curious-about-our-approach"
//     className="py-20 bg-gray-50 text-white"
//   >
//     <Container>
//       <div className="rounded-3xl p-10 text-center max-w-2xl bg-gradient-to-br from-sky-600 via-teal-500 to-blue-600 mx-auto shadow-lg bg-white/10 backdrop-blur-md">
//         <h3 className="text-3xl font-semibold mb-3">
//           Curious about our approach?
//         </h3>
//         <p className="text-white/80 mb-6">
//           Contact us to see how we can meet your needs!
//         </p>
//         <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300">
//           Book a call
//         </button>
//       </div>
//     </Container>
//   </section>
// );

// const CaseStudyLayout = () => (
//   <div className="flex">
//     <Sidebar />
//     <main className="flex-1 overflow-y-auto">
//       <OverviewSection />
//       <ServicesProvided />
//       <ChallengeSection />
//       <ApproachSection />
//       <CuriousSection />
//     </main>
//   </div>
// );

// const Work = () => (
//   <div>
//     <HeroSection />
//     <CaseStudyLayout />
//   </div>
// );

// export default Work;




// // pages/Work.jsx
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Container } from "../UI/UiComponent";

// const HeroSection = () => {
//   return (
//     <section className="bg-blue-900 text-white px-6 py-28 pt-40 -mt-20">
//       <Container className="md:flex md:items-center md:justify-between">
//         {/* Left Side */}
//         <div className="md:w-1/2 space-y-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-4xl md:text-6xl font-bold leading-tight"
//           >
//             Betmode
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-lg md:text-xl font-medium"
//           >
//             500,000 Views on Twitter in 3 Months: Influencer Marketing for
//             Betmode’s Gambling Platform
//           </motion.p>
//           <div className="flex flex-wrap gap-3 pt-4">
//             {["iGaming", "Digital Design", "Influencer Marketing", "Social Media"].map(
//               (tag) => (
//                 <button
//                   key={tag}
//                   className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition"
//                 >
//                   {tag}
//                 </button>
//               )
//             )}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
//           <motion.img
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.3 }}
//             src="/Our_Service/8.png"
//             alt="Betmode Honeymoon Promo"
//             className="max-w-xs md:max-w-md rounded-lg shadow-lg"
//           />
//         </div>
//       </Container>
//     </section>
//   );
// };

// const Sidebar = () => {
//   const links = [
//     "Overview",
//     "Services Provided",
//     "Challenge",
//     "Approach",
//     "Curious About Our Approach",
//   ];

//   const [active, setActive] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       let current = "";
//       links.forEach((link) => {
//         const section = document.getElementById(link.toLowerCase().replace(/\s+/g, "-"));
//         if (section && window.scrollY >= section.offsetTop - 100) {
//           current = link;
//         }
//       });
//       setActive(current);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <aside className="sticky top-2 h-screen bg-gray-50 border-r px-6 py-10">
//       <nav className="space-y-6">
//         {links.map((link) => {
//           const linkId = link.toLowerCase().replace(/\s+/g, "-");
//           const isActive = active === link;
//           return (
//             <a
//               key={link}
//               href={`#${linkId}`}
//               className={`block font-medium px-2 py-1 rounded transition-colors ${
//                 isActive ? "text-blue-600 border-l-4 border-blue-600" : "text-gray-800 hover:text-blue-600"
//               }`}
//             >
//               {link}
//             </a>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// };

// const OverviewSection = () => {
//   const metrics = [
//     { label: "Views", value: 200_000_000, suffix: "M+" },
//     { label: "Likes", value: 7701, suffix: "+" },
//     { label: "Reposts", value: 2530, suffix: "+" },
//     { label: "Comments", value: 2343, suffix: "+" },
//     { label: "Bookmarks", value: 32, suffix: "+" },
//     { label: "Engagement Rate", value: 2, suffix: "%" },
//   ];

//   const [counts, setCounts] = useState(metrics.map(() => 0));

//   useEffect(() => {
//     const duration = 5000; // 5 seconds
//     const frameRate = 60;
//     const totalFrames = Math.round((duration / 1000) * frameRate);

//     const easeOutQuad = (t) => t * (2 - t);

//     metrics.forEach((metric, i) => {
//       const countTo = metric.value;
//       let frame = 0;
//       const counter = setInterval(() => {
//         frame++;
//         const progress = easeOutQuad(frame / totalFrames);
//         const current = Math.floor(countTo * progress);

//         setCounts((prev) => {
//           const newCounts = [...prev];
//           newCounts[i] = current;
//           return newCounts;
//         });

//         if (frame === totalFrames) clearInterval(counter);
//       }, 1000 / frameRate);
//     });
//   }, []);

//   const formatValue = (value, metric) => {
//     if (metric.suffix === "M+") {
//       return value >= metric.value ? `${metric.value / 1_000_000}M+` : `${Math.floor(value / 1_000_000)}M`;
//     } else if (metric.suffix === "%") {
//       return value >= metric.value ? `${metric.value}%` : `${value}%`;
//     } else if (metric.suffix === "+") {
//       return value >= metric.value ? `${metric.value.toLocaleString()}+` : `${value.toLocaleString()}`;
//     } else {
//       return value.toLocaleString();
//     }
//   };

//   return (
//     <section id="overview" className="px-6 py-10 bg-gray-50">
//       <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
//       <p className="text-gray-700 text-lg mb-8 max-w-3xl">
//         Betmode is a new online gambling platform in the iGaming niche. The target audience includes experienced Web3 and crypto users with their own wallets, who are looking for fair and transparent iGaming platforms.
//       </p>
//       <div className="grid grid-cols-2 gap-6 max-w-xl">
//         {metrics.map((item, index) => (
//           <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
//             <div className="text-2xl font-bold text-blue-900">{formatValue(counts[index], item)}</div>
//             <div className="text-sm text-gray-600">{item.label}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const ServicesProvided = () => {
//   const services = [
//     { name: "Influencer Marketing", icon: "⭐" },
//     { name: "Social Media", icon: "🛡️" },
//     { name: "Digital Design", icon: "✏️" },
//   ];

//   return (
//     <section id="services-provided" className="px-6 py-10 bg-gray-50">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Provided</h2>
//       <div className="flex flex-wrap gap-6">
//         {services.map((service, index) => (
//           <div key={index} className="flex items-center gap-4 bg-white border rounded-xl shadow-lg px-6 py-4 hover:shadow-xl transition-all">
//             <div className="text-3xl">{service.icon}</div>
//             <div className="text-lg font-medium text-gray-800">{service.name}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const ChallengeSection = () => (
//   <section id="challenge" className="px-6 py-10 bg-gray-50">
//     <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
//     <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
//       We started by reviewing all the initial materials: the client’s brief, product, and goals. Together, we discussed the key objectives. For competitor analysis, we focused on the projects the client had pointed to as references — well-known names in the iGaming and Web3 segments.
//       <br /><br />
//       Using brand analytics, we looked into which influencers had promoted these platforms, what their posts looked like, and what kind of offers they used. This research led us to two key insights.
//     </p>
//   </section>
// );

// const ApproachSection = () => (
//   <section id="approach" className="bg-gray-50 text-gray-900 py-10">
//     <Container>
//       <div className="rounded-3xl bg-gradient-to-r from-sky-600/80 via-black-400/40 to-teal-600/80 p-6 sm:p-8 ring-1 ring-white/10 w-full">
//         <h2 className="text-3xl font-bold mb-4">Approach</h2>
//         <p className="text-lg leading-relaxed max-w-3xl">
//           Build awareness for the new project and stand out from competitors. Test an influencer campaign as the first stage of the funnel — helping to establish awareness before moving into performance campaigns aimed at direct registrations and deposits. Plan the next move via a cross-project track, map metrics, identify the best-performing influencers, and lay the groundwork for the next stage of promotion.
//         </p>
//       </div>
//     </Container>
//   </section>
// );

// const CuriousSection = () => (
//   <section id="curious-about-our-approach" className="py-12 sm:py-16 bg-gray-50">
//     <Container>
//       <div className="rounded-3xl bg-gradient-to-r from-sky-600/80 via-black-400/40 to-teal-600/80 p-6 sm:p-8 ring-1 ring-white/10">
//         <div className="mx-auto max-w-2xl text-center">
//           <h3 className="text-xl sm:text-3xl font-semibold">Curious about our approach?</h3>
//           <p className="mt-2 text-white/80">Contact us to see how we can meet your needs!</p>
//           <div className="mt-5 sm:mt-6">
//             <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
//               Book a call
//             </button>
//           </div>
//         </div>
//       </div>
//     </Container>
//   </section>
// );

// const CaseStudyLayout = () => (
//   <div className="flex">
//     <Sidebar />
//     <main className="flex-1 overflow-y-auto">
//       <OverviewSection />
//       <ServicesProvided />
//       <ChallengeSection />
//       <ApproachSection />
//       <CuriousSection />
//     </main>
//   </div>
// );

// const Work = () => (
//   <div>
//     <HeroSection />
//     <CaseStudyLayout />
//   </div>
// );

// export default Work;
