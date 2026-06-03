"use client";

import { useState } from "react";

const steps = [
  {
    stage: "Stage 1",
    title: "Join the Community",
    desc: "Join a supportive community focused on improving public speaking and confidence.",
    stageColor: "text-[#534AB7]",
    dotBorder: "border-[#534AB7]",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(83,74,183,0.15)]",
    cardHoverBorder: "hover:border-[#534AB7]/30",
    side: "right",
  },
  {
    stage: "Stage 2",
    title: "Record & Send Video",
    desc: "Share a short introduction video to help us understand your speaking level.",
    stageColor: "text-[#BA7517]",
    dotBorder: "border-[#BA7517]",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(186,117,23,0.15)]",
    cardHoverBorder: "hover:border-[#BA7517]/30",
    side: "left",
  },
  {
    stage: "Stage 3",
    title: "Get Batched & Grouped",
    desc: "Get matched with 4 peers at a similar speaking level for focused practice.",
    stageColor: "text-[#0F6E56]",
    dotBorder: "border-[#0F6E56]",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(15,110,86,0.15)]",
    cardHoverBorder: "hover:border-[#0F6E56]/30",
    side: "right",
  },
  {
    stage: "Stage 4",
    title: "Your Journey Starts",
    desc: "Practice in live sessions, receive feedback, and build lasting confidence.",
    stageColor: "text-[#993556]",
    dotBorder: "border-[#993556]",
    dotGlow: "hover:shadow-[0_0_0_4px_rgba(153,53,86,0.15)]",
    cardHoverBorder: "hover:border-[#993556]/30",
    side: "left",
  },
];

export default function JourneySteps() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full py-16 px-6 bg-white dark:bg-[#0a0a0a]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .step-item {
          opacity: 0;
          animation: fadeUp 0.5s ease forwards;
        }
        .step-item:nth-child(1) { animation-delay: 0.05s; }
        .step-item:nth-child(2) { animation-delay: 0.15s; }
        .step-item:nth-child(3) { animation-delay: 0.25s; }
        .step-item:nth-child(4) { animation-delay: 0.35s; }
      `}</style>

      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            How it works
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Your path to confident speaking
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-800" />

          {steps.map((step, i) => {
            const isRight = step.side === "right";
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className={`step-item relative flex items-start mb-8 last:mb-0 ${
                  isRight ? "flex-row" : "flex-row-reverse"
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Empty half */}
                <div className="flex-1" />

                {/* Dot */}
                <div
                  className={`
                    absolute left-1/2 -translate-x-1/2 top-[18px] w-3 h-3 rounded-full z-10
                    bg-white dark:bg-[#0a0a0a] border-2 ${step.dotBorder}
                    transition-all duration-250
                    ${step.dotGlow}
                    ${isHovered ? "scale-150" : "scale-100"}
                  `}
                />

                {/* Card half */}
                <div className={`flex-1 ${isRight ? "pl-7" : "pr-7 flex justify-end"}`}>
                  <div
                    className={`
                      bg-white dark:bg-[#111]
                      border border-gray-200 dark:border-gray-800
                      ${step.cardHoverBorder}
                      rounded-2xl p-4 w-full max-w-[280px]
                      transition-all duration-250
                      ${isHovered ? "-translate-y-1 shadow-lg dark:shadow-black/40" : "translate-y-0 shadow-none"}
                    `}
                  >
                    <p className={`text-[10px] font-bold tracking-widest uppercase mb-1.5 ${step.stageColor}`}>
                      {step.stage}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1 leading-snug">
                      {step.title}
                    </p>
                    <p className={`text-xs leading-relaxed transition-colors duration-250 ${isHovered ? "text-gray-600 dark:text-gray-400" : "text-gray-400 dark:text-gray-600"}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}