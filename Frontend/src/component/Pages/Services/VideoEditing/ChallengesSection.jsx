


import {GradientText,Container,SectionTitle} from  "../../../UI/UiComponent"


const helpItems = [
  {
    title: "Our videos didn’t look professional or engaging.",
    answer:
      "Bluenose Marketing uses advanced editing tools, professional color grading, and seamless transitions to deliver cinematic-quality videos that elevate your brand presence.",
  },
  {
    title: "Editing videos in-house took too long.",
    answer:
      " Our video editing team manages the entire process, from cutting to final polish, ensuring fast turnaround times and consistent, high-quality results.",
  },
  {
    title: "Our videos weren’t performing well on social media.",
    answer:
      "We create platform-optimized videos with attention-grabbing hooks, dynamic pacing, and trending styles that improve engagement and viewer retention.",
  },
  {
    title: "We weren’t sure what type of video content fits our brand.",
    answer:
      "From short-form reels to detailed brand films, we help businesses define the perfect video style aligned with their goals and audience preferences. ",
  },
  {
    title: "Our raw footage lacked energy and creativity. ",
    answer:
      "We enhance every clip with on-brand animations, smooth transitions, professional sound design, and text overlays, turning simple footage into powerful visual stories.",
  },
  {
    title: "We needed videos optimized for multiple platforms. ",
    answer:
      "Bluenose Marketing produces channel-specific edits for YouTube, Instagram, TikTok, and LinkedIn,  each crafted to perform at its best on that platform.",
  },
  {
    title: "Freelancers didn’t deliver consistent results.",
    answer:
      "Our dedicated video editing team ensures brand consistency, reliability, and top-tier quality across all projects, without the hassle of managing freelancers.",
  },
  {
    title: "We had no process for repurposing long videos.",
    answer:
      "We transform your existing content into short clips, teasers, and highlight reels, maximizing visibility and content ROI across every channel.",
  },
  {
    title: "Our storytelling lacked emotional impact.",
    answer:
      "We craft videos with strong narrative flow, cinematic visuals, and emotional depth that connect authentically with your audience and build brand trust.",
  },
];


export function ChallengesSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.15),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.12),transparent)] " />
      <Container>
        <SectionTitle
          title={
            <>
              Common Challenges Our <br />
              <GradientText>Clients Encountered</GradientText>
            </>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {helpItems.map((item, idx) => (
           <div
  key={idx}
  className="group relative bg-neutral-900 border border-transparent rounded-2xl p-6 h-56 flex flex-col justify-start 
  transition duration-300 
  hover:border-purple-500/70 hover:shadow-[0_0_0.5rem_0.2rem_rgba(168,85,247,0.2)]"
>
              <div className="text-4xl text-white/30 mb-4"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 11.102C0 5.17007 2.98259 1.46939 8.94776 0V4.4898C7.3607 4.97959 6.23881 5.71429 5.58209 6.69388C4.92537 7.61905 4.62438 9.08844 4.6791 11.102H8.94776V20H0V11.102ZM22 4.4898C20.4129 4.97959 19.291 5.71429 18.6343 6.69388C17.9776 7.61905 17.6766 9.08844 17.7313 11.102H22V20H13.0522V11.102C13.0522 5.17007 16.0348 1.46939 22 0V4.4898Z" fill="#333333"></path></svg></div>
              <h3 className="text-lg font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
