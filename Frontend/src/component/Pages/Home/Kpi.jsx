import {
  Container,
  GradientText,
  SectionTitle,
  Stat,
  
} from "../../UI/UiComponent";


export default function Kpi(){
  return(
    <section className="py-12 sm:py-16">
              <Container>
                <SectionTitle
                  title={<>The Next Era of Marketing, <GradientText>Designed for Growth
</GradientText> </>}
                />
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-[50%_50%] md:grid-cols-[50%_50%] lg:grid-cols-[24%_24%_48%] ">
                  <Stat
                    kpi="24"
                  
                    title="Hours Turnaround"
                    desc="Launch projects in less than a day. Perfect for those tight deadlines and urgent tasks."
                  />
                  <Stat
                    kpi="3x"
                   
                    title="Faster Go-to-Market"
                    desc="Accelerate launches with agile strategy and creative execution."
                  />
                  <Stat
                    kpi="100%"
                  
                    title="Transparent Pricing"
                    desc="No hidden fees. No fine print. Only clear, results-driven value."
                  />
                </div>
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-[48%_48%] lg:grid-cols-[48%_24%_24%]">
                  <Stat
                    kpi="15+"
                   
                    title="Industries Served"
                    desc="From cafés to hotels, proven strategies that drive real growth across every niche."
                  />
                  <Stat
                    kpi="100%"
                   
                    title="Data-Driven Decisions"
                    desc="Every strategy is backed by analytics. No guesswork, just results."
                  />
                  <Stat
                    kpi="24/7"
                    
                    title="Strategic Support"
                    desc="Always available to align, analyze, and advance your marketing goals."
                  />
                </div>
              </Container>
            </section>
  )
}