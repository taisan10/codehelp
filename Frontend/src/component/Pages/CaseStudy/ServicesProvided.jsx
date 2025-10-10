


export function ServicesProvided  ()  {
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
