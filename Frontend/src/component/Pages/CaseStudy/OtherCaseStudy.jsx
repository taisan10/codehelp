import { Container } from "../../UI/UiComponent";



export function CaseStudiesSections  ()  {
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
                className="w-50 mt-4 rounded-lg object-cover max-h-40 md:max-h-41"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
