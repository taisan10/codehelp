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
                  title={<>Meet the new generation of <GradientText>digital marketing services</GradientText> </>}
                />
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-[50%_50%] lg:grid-cols-[24%_24%_48%] ">
                  <Stat
                    kpi="24"
                    accent="purple"
                    title="Hours Turnaround"
<<<<<<< HEAD
                    // desc="Launch projects in less than a day. Perfect for those tight deadlines and urgent tasks."
=======
                    desc="Launch projects in less than a day. Perfect for those tight deadlines and urgent tasks."
>>>>>>> 3b6d227 (First commit)
                  />
                  <Stat
                    kpi="50%+"
                    accent="pink"
                    title="Output Growth"
<<<<<<< HEAD
                    // desc="Get ready for a major marketing scale‑up. Outpace your average agency’s output."
=======
                    desc="Get ready for a major marketing scale‑up. Outpace your average agency’s output."
>>>>>>> 3b6d227 (First commit)
                  />
                  <Stat
                    kpi="$100k"
                    accent="orange"
                    title="Saving"
<<<<<<< HEAD
                    // desc="Average saving on annual agency fees."
=======
                    desc="Average saving on annual agency fees."
>>>>>>> 3b6d227 (First commit)
                  />
                </div>
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-[48%_48%] lg:grid-cols-[48%_24%_24%]">
                  <Stat
                    kpi="10"
                    accent="sky"
                    title="Extra Hours/Week"
<<<<<<< HEAD
                    // desc="Reclaim your schedule with simplified management. Take your time back to lead."
=======
                    desc="Reclaim your schedule with simplified management. Take your time back to lead."
>>>>>>> 3b6d227 (First commit)
                  />
                  <Stat
                    kpi="30+"
                    accent="purple"
                    title="Services On Tap"
<<<<<<< HEAD
                    // desc="Every design and marketing service you can imagine. Available to you on‑demand."
=======
                    desc="Every design and marketing service you can imagine. Available to you on‑demand."
>>>>>>> 3b6d227 (First commit)
                  />
                  <Stat
                    kpi="1%"
                    accent="orange"
                    title="Top 1% Global Experts"
<<<<<<< HEAD
                    // desc="Build a ready‑to‑go vetted team. Watch your ROI shoot sky‑high."
=======
                    desc="Build a ready‑to‑go vetted team. Watch your ROI shoot sky‑high."
>>>>>>> 3b6d227 (First commit)
                  />
                </div>
              </Container>
            </section>
  )
}