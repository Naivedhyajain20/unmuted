"use client";

import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Join the Community",
    sub: "Click to join",
    desc: "Join a supportive community focused on improving public speaking and confidence.",
    icon: "👋",
    accent: "text-[#534AB7]",
    border: "border-[#534AB7]",
    dotActive: "bg-[#EEEDFE]",
    subColor: "text-[#7F77DD]",
    ring: "ring-[#534AB7]",
  },
  {
    num: "02",
    title: "Record & Send Video",
    sub: "Record and submit a video",
    desc: "Share a short introduction video to help us understand your speaking level.",
    icon: "🎥",
    accent: "text-[#BA7517]",
    border: "border-[#BA7517]",
    dotActive: "bg-[#FFF8EC]",
    subColor: "text-[#BA7517]",
    ring: "ring-[#BA7517]",
  },
  {
    num: "03",
    title: "Get Batched & Grouped",
    sub: "You'll be assigned a batch",
    desc: "Get matched with 4 peers at a similar speaking level.",
    icon: "👥",
    accent: "text-[#0F6E56]",
    border: "border-[#0F6E56]",
    dotActive: "bg-[#EAFBF2]",
    subColor: "text-[#1D9E75]",
    ring: "ring-[#0F6E56]",
  },
  {
    num: "04",
    title: "Your Journey Starts",
    sub: "Journey starts!",
    desc: "Practice in live sessions, receive feedback, and build confidence.",
    icon: "🚀",
    accent: "text-[#993556]",
    border: "border-[#993556]",
    dotActive: "bg-[#FDEEF2]",
    subColor: "text-[#D4537E]",
    ring: "ring-[#993556]",
  },
];

export default function JourneySteps() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full pt-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4">
            How it works
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your path to confident speaking
          </p>
        </div>

        {/* Timeline — extra bottom padding so cards don't get clipped */}
        <div className="relative pb-40 md:pb-50">

          {/* Connector line */}
          <div className="absolute top-[21px] left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0" />

          {/* Steps grid — overflow visible so cards escape the container */}
          <div className="relative z-10 grid grid-cols-4 gap-4 overflow-visible">
            {steps.map((step, i) => {
              const isActive = activeIndex === i;
              const flipCard = i >= 2;

              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center overflow-visible"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Dot + Card wrapper */}
                  <div className="relative flex flex-col items-center overflow-visible">

                    {/* Dot */}
                    <button
                      className={[
                        "w-11 h-11 rounded-full border-2 flex items-center justify-center bg-white",
                        "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                        step.border,
                        step.ring,
                        isActive ? `scale-110 ${step.dotActive}` : "hover:scale-105",
                      ].join(" ")}
                      aria-label={`Step ${step.num}: ${step.title}`}
                      onFocus={() => setActiveIndex(i)}
                      onBlur={() => setActiveIndex(null)}
                    >
                      <span className="text-base leading-none">{step.icon}</span>
                    </button>

                    {/* Hover Card — positioned below dot, flipped for right-side steps */}
                    <div
                      role="tooltip"
                      className={[
                        "absolute top-14 w-56 rounded-2xl border border-gray-100 bg-white shadow-xl p-4 z-50",
                        "transition-all duration-200",
                        flipCard ? "right-0" : "left-0",
                        isActive
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-2 pointer-events-none",
                      ].join(" ")}
                    >
                      <div className="text-2xl mb-3 leading-none">{step.icon}</div>

                      <span className={`text-[10px] font-bold tracking-widest uppercase ${step.accent}`}>
                        {step.num}
                      </span>

                      <h3 className="text-sm font-semibold text-gray-900 mt-1 mb-0.5 leading-snug">
                        {step.title}
                      </h3>

                      <p className={`text-xs font-medium mb-2.5 ${step.subColor}`}>
                        {step.sub}
                      </p>

                      <p className="text-xs text-gray-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Label below dot */}
                  <p className={`mt-3 text-[10px] font-bold tracking-widest uppercase ${step.accent}`}>
                    {step.num}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-700 text-center leading-snug px-1">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}