
import {
  Container,
  GradientText,
  PrimaryButton,
  LogoCarousel
} from "../../UI/UiComponent";

export default function Hero() {

const logos = Array.from({ length: 20 }, (_, i) => `/Client_Logo/${i + 1}.png`);


  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.22),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.18),transparent)]" />

      <Container className="py-14 sm:py-20 lg:py-28 text-center mt-10 sm:mt-5">
        <h1 className="w-full text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          <GradientText> All-in-One Marketing, </GradientText>
          Built for Growing Businesses.
        </h1>

        <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-white/70 text-base sm:text-lg">
          Our team combines creativity, insight, and execution to deliver seamless marketing solutions that drive measurable results for your brand.
        </p>

        <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4">
          <PrimaryButton href="#contact">Contact Us Now</PrimaryButton>
        </div>

        <div className="mt-10">
          <LogoCarousel items={logos} />
        </div>
      </Container>
    </section>
  );
}