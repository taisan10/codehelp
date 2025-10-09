

// // export default function Work() {
// //   return <h1 className="text-center text-3xl p-10">Work Page</h1>;
// // }
// BetmodeCase.jsx




import { Container } from "../UI/UiComponent";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
 <section className="bg-green-100 text-white px-4 sm:px-6 py-20 sm:py-28 pt-42 sm:pt-40 -mt-20">
   <Container className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-black leading-tight"
          >
            Triveeni Events
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl  text-black font-medium"
          >
            1.3M+ Views in 90 Days: Organic Social Media Strategy
          </motion.p>

          <div className="flex flex-wrap gap-3 pt-4   ">
            {["Strategic Planning", "Data Insights", "Community Building"].map(
              (tag) => (
                <button
                  key={tag}
                  className="bg-white  text-black  font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            src="/Client_Logo/6.png"
            alt="Betmode Honeymoon Promo"
            className="max-w-xs md:max-w-md rounded-lg"
          ></motion.img>
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
        const section = document.getElementById(
          link.toLowerCase().replace(/\s+/g, "-")
        );
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
    <aside className="sticky top-2 h-auto md:h-screen bg-gray-50 border-r px-4 sm:px-6 py-6 sm:py-10">
  <nav className="space-y-4 md:space-y-6 overflow-x-auto">

        {links.map((link) => {
          const linkId = link.toLowerCase().replace(/\s+/g, "-");
          const isActive = active === link;
          return (
            <a
              key={link}
              href={`#${linkId}`}
              className={`block font-medium px-2 py-1 rounded transition-colors ${
                isActive
                  ? "text-blue-600 border-l-4 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
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
      if (observer && sectionRef.current)
        observer.unobserve(sectionRef.current);
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
  <section
    ref={sectionRef}
    id="overview"
    className="px-4 sm:px-6 py-10 bg-gray-50"
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center sm:text-left">
      Overview
    </h2>

    <div className="text-gray-700 text-base sm:text-lg max-w-3xl space-y-6 mb-10 mx-auto sm:mx-0 px-2 sm:px-0">
      <p>
        <span className="font-semibold">Triveeni Events</span> is a women-led
        event planning company specializing in creating extraordinary Indian
        celebrations and cultural events across the Atlantic region.
      </p>

      <p>
        The target audience includes people of all ages who love to experience
        and celebrate the vibrancy of Indian festivals, traditions, and cultural
        gatherings.
      </p>

      <p>
        As a women-led business, Triveeni Events brings a unique perspective and
        deep understanding of Indian traditions, customs, and the importance of
        preserving cultural heritage while crafting modern, memorable
        experiences.
      </p>

      <p>
        Our goal was to establish Triveeni Events as the premier Instagram
        presence for Indian event planning in the Atlantic region through
        organic growth strategies.
      </p>

      <p>
        We focused on a{" "}
        <span className="font-medium text-sky-600">
          Reels-first content approach
        </span>{" "}
        and algorithm optimization to maximize reach without heavy ad spend —
        effectively showcasing Triveeni Events' stunning portfolio of colorful
        celebrations to attract high-quality client inquiries and engage
        enthusiasts across all demographics.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md sm:max-w-xl mx-auto">
      {metrics.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center sm:text-left"
        >
          <div className="text-xl sm:text-2xl font-bold text-blue-900">
            {formatValue(counts[index], item)}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

};

const ServicesProvided = () => {
  const services = [
  { name: "Social Media Strategy", icon: "📊" },         
  { name: "Content Creation & Optimization", icon: "🎨" }, 
  { name: "Reels Production & Editing", icon: "🎬" },     
  { name: "Analytics & Performance Tracking", icon: "📈" }, 
  { name: "Audience Growth Management", icon: "🚀" },    
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
      <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-4">
  We started by reviewing Triveeni Events' existing Instagram presence,
  brand guidelines, and growth objectives.
</p>

<p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-4">
  The client was operating in a competitive event management market with
  limited advertising budget and needed rapid, sustainable growth to
  attract quality leads. Key challenges included:
</p>

<ul className="list-disc list-inside text-gray-700 text-lg max-w-3xl leading-relaxed space-y-2">
  <li>Low initial engagement</li>
  <li>Limited organic reach and visibility in a saturated event planning niche</li>
  <li>Need for cost-effective growth without relying on paid ads</li>
  <li>Requirement to build authentic audience of potential clients and industry partners</li>
  <li>Showcasing event portfolio in engaging, shareable formats</li>
</ul>
    </section>
  );
};

const ApproachSection = () => {
  return (
    <section id="approach" className="bg-gray-50 text-gray-900 py-12 sm:py-16">
      <Container>
       <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 p-6 sm:p-8 ring-1 ring-white/10 text-black">
  <h2 className="text-3xl font-bold mb-6">Approach</h2>

  <div className="space-y-6 text-lg leading-relaxed max-w-6xl">
    <div>
      <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
        <span className="text-2xl">🧠</span> Phase 1: Awareness & Testing
      </h3>
      <p>
        Build awareness through algorithm-optimized content strategy. Establish baseline metrics and test various content formats to identify top performers. Focus on Reels production featuring event highlights, venue transformations, and client testimonials with trending audio and viral content elements.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
        <span className="text-2xl">📈</span> Phase 2: Scaling & Optimization
      </h3>
      <p>
        Scale successful content formats and double down on Reels strategy showcasing Triveeni Events' diverse portfolio. Optimize posting times based on audience analytics. Implement advanced hashtag research targeting event planning, wedding, and corporate event niches. Create Explore page optimization tactics.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
        <span className="text-2xl">🚀</span> Phase 3: Reach & Authority
      </h3>
      <p>
        Maximize reach through refined content calendar featuring seasonal events and proven viral formulas. Achieve consistent non-follower engagement above 60% to attract new clients. Establish sustainable growth model for long-term lead generation and brand authority.
      </p>
    </div>
  </div>
</div>
      </Container>
    </section>
  );
};

const CuriousSection = () => {
  return (
    <section
      id="curious-about-our-approach"
      className="py-12 sm:py-16 bg-gray-50 "
    >
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
  <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
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
    <section className="bg-gray-50 px-6 py-8">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Read other Case Studies Of Company
        </h2>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* 60% */}
       
<div className="md:basis-[60%] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between h-80">

            <div
              className={`${studies[0].bg} text-white p-6 flex flex-col justify-between h-full`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{studies[0].title}</h3>
                <p className="text-lg">{studies[0].desc}</p>
              </div>
              <img
                src={studies[0].img}
                alt={studies[0].title}
                className="w-40 mt-4 rounded-lg object-cover max-h-38"
              />
            </div>
          </div>

        
        {/* 40% */}
<div className="md:basis-[40%] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between h-80">

            <div
              className={`${studies[1].bg} text-white p-6 flex flex-col justify-between h-full`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{studies[1].title}</h3>
                <p className="text-lg">{studies[1].desc}</p>
              </div>
              <img
                src={studies[1].img}
                alt={studies[1].title}
                className="w-60 mt-4 rounded-lg object-cover max-h-38"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* 35% */}
<div className="md:basis-[35%] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between h-80">

            <div
              className={`${studies[2].bg} text-white p-6 flex flex-col justify-between h-full`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{studies[2].title}</h3>
                <p className="text-lg">{studies[2].desc}</p>
              </div>
              <img
                src={studies[2].img}
                alt={studies[2].title}
                className="w-55 mt-4 rounded-lg object-cover max-h-25 md:max-h-40"
              />
            </div>
          </div>

          {/* 65% */}
<div className="md:basis-[65%] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between h-80">

            <div
              className={`${studies[3].bg} text-white p-6 flex flex-col justify-between h-full`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{studies[3].title}</h3>
                <p className="text-lg">{studies[3].desc}</p>
              </div>
              <img
                src={studies[3].img}
                alt={studies[3].title}
                className="w-50 mt-4 rounded-lg object-cover max-h-40 md:max-h-4"
              />
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
