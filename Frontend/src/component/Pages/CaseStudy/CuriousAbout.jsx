
import { Container } from "../../UI/UiComponent";

export function  CuriousSection  () {
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