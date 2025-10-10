import { Container } from "../../UI/UiComponent";
import { motion } from "framer-motion";





export function HeroSection  ()  {
  return (
 <section className="bg-green-100 text-white px-4 sm:px-6 py-20 sm:py-28 pt-38 sm:pt-40 -mt-20">
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

             <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
          >
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
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-xs -mt-10  md:mt-2 -mb-20 md:mb-10 sm:max-w-sm md:max-w-md rounded-lg">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            src="/Client_Logo/4.png"
            alt="Betmode Honeymoon Promo"
            className="max-w-xs md:max-w-md rounded-lg"
          ></motion.img>
        </div>
      </Container>
    </section>
  );
};
