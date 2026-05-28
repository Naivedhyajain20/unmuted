import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Chhavi",
    role: "School Student",
    video: "/videos/chhavi.mp4",
    quote:
      "I stopped fearing meetings. Within 3 weeks, I started speaking confidently at work.",
  },
  {
    id: 2,
    name: "Vivek",
    role: "College Student",
    video: "/videos/vivek.mp4",
    quote:
      "UnmuteX helped me crack my placement interviews without freezing. The real-time live activities changed how I think and articulate under pressure.",
  },
  {
    id: 3,
    name: "Nikhil",
    role: "College Student",
    video: "/videos/nikhil.mp4",
    quote:
      "The live practice sessions changed everything. Being surrounded by supportive peers who are all trying to grow made me speak without hesitation.",
  },
  {
    id: 4,
    name: "Sonali",
    role: "College Student",
    video: "/videos/sonali.mp4",
    quote:
      "The live practice sessions changed everything. Being surrounded by supportive peers who are all trying to grow made me speak without hesitation.",
  },
  {
    id: 5,
    name: "Akriti",
    role: "College Student",
    video: "/videos/akriti.mp4",
    quote:
      "The live practice sessions changed everything. Being surrounded by supportive peers who are all trying to grow made me speak without hesitation.",
  },
  
];


const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-all duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24 animate-fade-in-up">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-4 font-bold">
            Success Stories
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-zinc-955 dark:text-white tracking-tight mb-6">
            Real People.<br />
            <span className="text-zinc-900 dark:text-zinc-300 font-light">
              Real Confidence.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Watch how our members transformed from hesitant speakers into highly confident, articulate communicators.
          </p>
        </div>

        {/* Pinterest-Style Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 w-full max-w-4xl mx-auto ">

          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid block w-full max-w-[290px] h-200 overflow-auto mx-auto rounded-[2.5rem]  hover:shadow-lg hover:-translate-y-2 transition-all duration-500 animate-fade-in-up mb-8 liquid-glass"
              style={{ animationDelay: `${index * 150}ms` }}
            >

              {/* Video Wrapper - Fully Responsive 9:16 vertical video */}
              <div className="relative w-full aspect-[9/16] bg-zinc-950 overflow-hidden group">
                <video
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Visual Label */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider select-none pointer-events-none">
                  Student Review
                </div>
              </div>

              {/* Review & Feedback directly underneath the Video */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center font-bold text-zinc-955 dark:text-white text-sm shadow-xs select-none">
                    {item.name[0]}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-955 dark:text-white tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                <blockquote className="text-zinc-600 dark:text-zinc-350 text-sm font-light leading-relaxed italic relative">
                  <span className="text-3xl text-zinc-200 dark:text-zinc-800 font-serif absolute -top-4 -left-2 select-none">“</span>
                  <span className="relative z-10 pl-4 block break-words">
                    {item.quote}
                  </span>
                </blockquote>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;