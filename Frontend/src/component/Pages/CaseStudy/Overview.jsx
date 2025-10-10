
import { useEffect, useState, useRef } from "react";

export  function OverviewSection  () {
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

    <div className="text-gray-700 text-base sm:text-lg  leading-relaxed max-w-3xl space-y-6 mb-10 mx-auto sm:mx-0 px-2 sm:px-0">
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
