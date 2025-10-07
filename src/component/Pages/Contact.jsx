import ContactPage from "../UI/Contactpage";
import { Container } from "../UI/UiComponent";

export default function Contact() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white text-black p-6 rounded-xl shadow">
        <ContactPage />
      </div>
    </Container>
  );
}


// const worksData = [
//   {
//     id: 1,
//     hero: {
//       title: "Adda",
//       description: "Influencer marketing campaign that gained 500,000 views in 3 months.",
//       tags: ["iGaming", "Social Media", "Design"],
//       img: "/Our_Service/1.png",
//       theme: "bg-gray-300 text-black"
//     },
//     overview: {
//       description: "Adda is an emerging platform targeting iGaming enthusiasts with crypto interests.",
//       metrics: [
//         { label: "Views", value: "517,507" },
//         { label: "Likes", value: "7,701" },
//         { label: "Reposts", value: "2,530" },
//         { label: "Comments", value: "2,343" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Social Media", icon: "📱" },
//       { name: "Digital Design", icon: "✏️" }
//     ],
//     challenge: "Initial user engagement was low, requiring targeted influencer campaigns to drive awareness.",
//     approach: "We analyzed competitor strategies, selected top influencers, and ran content-driven campaigns.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "Contact us to see how we can meet your needs!",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 2,
//     hero: {
//       title: "Desi_Garden",
//       description: "Fintech platform drove massive user deposits through campaigns.",
//       tags: ["Fintech", "Marketing", "Analytics"],
//       img: "/Our_Service/2.png",
//       theme: "bg-green-100 text-black"
//     },
//     overview: {
//       description: "Desi_Garden specializes in simplifying digital payments for Indian users.",
//       metrics: [
//         { label: "Deposits", value: "20M" },
//         { label: "Conversion Rate", value: "16.8%" },
//         { label: "Engagement", value: "30%" },
//         { label: "PR Reach", value: "1.5M" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Social Media", icon: "📱" },
//       { name: "Digital Design", icon: "✏️" }
//     ],
//     challenge: "High competition in fintech required differentiating messaging and influencer targeting.",
//     approach: "We created a series of social campaigns focusing on user benefits and trust-building.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "Reach out to discuss campaign strategies.",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 3,
//     hero: {
//       title: "Nayya",
//       description: "Boosted e-commerce sales with targeted influencer marketing.",
//       tags: ["E-commerce", "Social Media", "Brand Awareness"],
//       img: "/Our_Service/3.png",
//       theme: "bg-yellow-50 text-black"
//     },
//     overview: {
//       description: "Nayya is a health & lifestyle e-commerce platform focusing on organic products.",
//       metrics: [
//         { label: "Orders", value: "120K" },
//         { label: "Revenue Growth", value: "45%" },
//         { label: "Repeat Buyers", value: "18K" },
//         { label: "Social Shares", value: "32K" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Social Media Ads", icon: "📱" },
//       { name: "Content Creation", icon: "✏️" }
//     ],
//     challenge: "Low initial engagement on Instagram and TikTok, needed creative campaigns.",
//     approach: "Engaged niche lifestyle influencers to drive authentic content and audience growth.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "Explore how our strategies boosted Nayya's sales.",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 4,
//     hero: {
//       title: "Pita Nutso",
//       description: "AI Hub’s awareness campaign across social platforms.",
//       tags: ["AI", "Tech", "Social Media"],
//       img: "/Our_Service/4.png",
//       theme: "bg-gradient-to-r from-purple-300 to-indigo-300 text-black"
//     },
//     overview: {
//       description: "Pita Nutso is a tech platform providing AI solutions to small businesses.",
//       metrics: [
//         { label: "App Downloads", value: "89K" },
//         { label: "Retention Rate", value: "72%" },
//         { label: "Demo Requests", value: "1,200" },
//         { label: "Global Reach", value: "1.8M" }
//       ]
//     },
//     services: [
//       { name: "Social Media Campaigns", icon: "📱" },
//       { name: "Content Design", icon: "✏️" },
//       { name: "Influencer Marketing", icon: "⭐" }
//     ],
//     challenge: "Early-stage AI product needed visibility among tech enthusiasts.",
//     approach: "We ran awareness campaigns focusing on product benefits and demos to early adopters.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "Learn more about our AI marketing strategies.",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 5,
//     hero: {
//       title: "Rivaaj",
//       description: "GamingOne launch campaign generated huge buzz.",
//       tags: ["Gaming", "Influencer Marketing", "Digital Design"],
//       img: "/Our_Service/5.png",
//       theme: "bg-blue-50 text-black"
//     },
//     overview: {
//       description: "Rivaaj is a gaming platform targeting casual and competitive gamers.",
//       metrics: [
//         { label: "Players Joined", value: "300K" },
//         { label: "Daily Active Users", value: "50K" },
//         { label: "Streams", value: "12K" },
//         { label: "Engagement Rate", value: "64%" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Social Media Ads", icon: "📱" },
//       { name: "Digital Design", icon: "✏️" }
//     ],
//     challenge: "Launch required massive visibility across multiple gaming communities.",
//     approach: "Collaborated with top gaming influencers and ran live streams for maximum reach.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "See how we engaged gamers effectively.",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 6,
//     hero: {
//       title: "Triveeni Events",
//       description: "Healthcare brand awareness campaign in 2 months.",
//       tags: ["Healthcare", "Social Media", "Brand Awareness"],
//       img: "/Our_Service/6.png",
//       theme: "bg-green-100 text-black"
//     },
//     overview: {
//       description: "Triveeni Events organizes healthcare campaigns and patient engagement events.",
//       metrics: [
//         { label: "Consultations", value: "210K" },
//         { label: "Patient Signups", value: "35K" },
//         { label: "Conversion Rate", value: "22%" },
//         { label: "App Reviews", value: "9K" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Event Marketing", icon: "📅" },
//       { name: "Social Media Ads", icon: "📱" }
//     ],
//     challenge: "Awareness for new healthcare events was low in target regions.",
//     approach: "Used social media campaigns + influencer outreach to drive participation.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "Learn how we increased engagement in healthcare campaigns.",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 7,
//     hero: {
//       title: "Sake Cafe",
//       description: "SaaS product growth via targeted influencer collaborations.",
//       tags: ["SaaS", "Marketing", "Social Media"],
//       img: "/Our_Service/7.png",
//       theme: "bg-pink-100 text-black"
//     },
//     overview: {
//       description: "Sake Cafe is a SaaS platform for remote team collaboration and productivity.",
//       metrics: [
//         { label: "Subscribers", value: "275K" },
//         { label: "MRR Growth", value: "38%" },
//         { label: "Churn Reduced", value: "12%" },
//         { label: "Active Teams", value: "8,200" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Social Media Ads", icon: "📱" },
//       { name: "Content Marketing", icon: "✏️" }
//     ],
//     challenge: "User acquisition and retention needed focused influencer engagement.",
//     approach: "We partnered with SaaS influencers and ran targeted campaigns highlighting product features.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "Discover our approach to growing SaaS platforms.",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 8,
//     hero: {
//       title: "BB_Station",
//       description: "ForexWorld boosted lead generation via campaigns.",
//       tags: ["Finance", "Trading", "Influencer Marketing"],
//       img: "/Our_Service/8.png",
//       theme: "bg-blue-300 text-black"
//     },
//     overview: {
//       description: "BB_Station provides forex trading tools and educational content.",
//       metrics: [
//         { label: "Leads Generated", value: "145K" },
//         { label: "Conversion Rate", value: "11.5%" },
//         { label: "Trader Signups", value: "42K" },
//         { label: "Engagement", value: "27%" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Social Media", icon: "📱" },
//       { name: "Digital Design", icon: "✏️" }
//     ],
//     challenge: "Lead generation for forex traders required trust-building campaigns.",
//     approach: "Focused on educational influencer content and live trading sessions.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "See how we increased leads for BB_Station.",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 9,
//     hero: {
//       title: "Bar & Grill",
//       description: "EdTech platform grew with 200K organic reach.",
//       tags: ["EdTech", "Social Media", "Content Marketing"],
//       img: "/Our_Service/9.png",
//       theme: "bg-teal-100 text-black"
//     },
//     overview: {
//       description: "Bar & Grill is an EdTech platform offering online courses for skill development.",
//       metrics: [
//         { label: "Students Enrolled", value: "198K" },
//         { label: "Courses Completed", value: "75K" },
//         { label: "Mentor Signups", value: "1,200" },
//         { label: "Social Mentions", value: "5.5K" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Social Media", icon: "📱" },
//       { name: "Digital Design", icon: "✏️" }
//     ],
//     challenge: "EdTech platform needed engagement from learners and educators.",
//     approach: "Ran campaigns targeting both students and mentors using social proof strategies.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "Learn how we boosted EdTech engagement.",
//       buttonText: "Book a call"
//     }
//   },
//   {
//     id: 10,
//     hero: {
//       title: "Piink",
//       description: "Web3Chain’s marketing campaign for crypto adoption.",
//       tags: ["Web3", "Crypto", "Marketing"],
//       img: "/Our_Service/10.png",
//       theme: "bg-slate-400 text-black"
//     },
//     overview: {
//       description: "Piink focuses on driving adoption of Web3 and crypto products.",
//       metrics: [
//         { label: "Community Growth", value: "260K" },
//         { label: "Token Holders", value: "55K" },
//         { label: "Campaign Reach", value: "4.2M" },
//         { label: "Engagement Rate", value: "34%" }
//       ]
//     },
//     services: [
//       { name: "Influencer Marketing", icon: "⭐" },
//       { name: "Social Media Ads", icon: "📱" },
//       { name: "Digital Design", icon: "✏️" }
//     ],
//     challenge: "Web3 adoption required community trust and awareness campaigns.",
//     approach: "Focused on influencer-led education campaigns and social media content for crypto users.",
//     cta: {
//       title: "Curious about our approach?",
//       description: "See how we helped Piink grow its Web3 community.",
//       buttonText: "Book a call"
//     }
//   }
// ];

// export default worksData;
