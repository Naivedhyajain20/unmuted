"use client";

import React, { useState } from "react";
import { FaUserPlus, FaVideo, FaUsers, FaRocket } from "react-icons/fa";

const JourneySteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Join the Community",
      subtitle: "Click Join Community",
      description: "Take your first brave step. Join our vibrant public speaking community of student builders and professionals dedicated to overcoming stage fright together.",
      icon: <FaUserPlus className="w-6 h-6" />,
      accentColor: "from-blue-500/20 to-indigo-500/20",
      accentBorder: "border-blue-500/30",
      pillBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
    },
    {
      number: "02",
      title: "Record & Send Video",
      subtitle: "Video banakar bhejo",
      description: "Record a quick 60-second video speaking about yourself or answering our simple prompt, and send it to our coach feedback channel.",
      icon: <FaVideo className="w-6 h-6" />,
      accentColor: "from-amber-500/20 to-orange-500/20",
      accentBorder: "border-amber-500/30",
      pillBg: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
    },
    {
      number: "03",
      title: "Get Batched & Grouped",
      subtitle: "Aap batched hoge",
      description: "Our core matching system groups you with 4 matching peers who are at similar speaking levels, ensuring a fully comfortable, judgment-free environment.",
      icon: <FaUsers className="w-6 h-6" />,
      accentColor: "from-emerald-500/20 to-teal-500/20",
      accentBorder: "border-emerald-500/30",
      pillBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
    },
    {
      number: "04",
      title: "Your Journey Starts",
      subtitle: "Journey started like this",
      description: "Begin interactive, high-energy live speaking sessions. Receive premium feedback cards, practice without fear, and watch your confidence skyrocket.",
      icon: <FaRocket className="w-6 h-6" />,
      accentColor: "from-rose-500/20 to-pink-500/20",
      accentBorder: "border-rose-500/30",
      pillBg: "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400"
    }
  ];

  return (
    <section id="journey" className="bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-all duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in-up">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-4 font-bold">
            Four Steps to Freedom
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-zinc-955 dark:text-white tracking-tight mb-6">
            How It Works<br />
            <span className="text-zinc-900 dark:text-zinc-300 font-light">
              Your UnmuteX Journey
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            From hesitation to absolute speaking clarity in a simple, community-guided process.
          </p>
        </div>

        {/* Steps Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Hand: Steps Cards List Selector */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group flex items-start gap-5 p-6 rounded-3xl cursor-pointer transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 shadow-md scale-[1.02]"
                    : "bg-transparent border border-transparent hover:bg-zinc-100/50 dark:hover:bg-zinc-900/20"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs select-none transition-transform duration-300 group-hover:scale-105 shrink-0 ${
                  activeStep === idx
                    ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400"
                }`}>
                  {step.number}
                </div>

                <div className="min-w-0">
                  <h3 className={`text-base font-semibold tracking-tight transition-colors duration-200 ${
                    activeStep === idx ? "text-zinc-955 dark:text-white" : "text-zinc-800 dark:text-zinc-350"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 mt-0.5 uppercase tracking-wide">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Hand: Detailed Interactive Step Visual Display Box */}
          <div className="lg:col-span-6">
            <div className="relative h-[340px] sm:h-[300px] w-full rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 shadow-lg">
              
              {/* Dynamic Gradient Glow Background */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${steps[activeStep].accentColor} blur-3xl opacity-60 pointer-events-none transition-all duration-500`} />

              {/* Step Main Icon Header */}
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${steps[activeStep].pillBg} transition-all duration-500`}>
                  {steps[activeStep].icon}
                </div>
                <span className="text-4xl font-extrabold text-zinc-200/50 dark:text-zinc-800/40 select-none">
                  {steps[activeStep].number}
                </span>
              </div>

              {/* Step Narrative Details */}
              <div className="mt-8 flex-1">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-2">
                  {steps[activeStep].subtitle}
                </span>
                <h4 className="text-xl font-bold text-zinc-955 dark:text-white tracking-tight mb-3 transition-all duration-300">
                  {steps[activeStep].title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed transition-all duration-300">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Onboarding Interactive Stepper Navigation Indicators */}
              <div className="flex gap-2.5 mt-6">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === i ? "w-8 bg-zinc-955 dark:bg-white" : "w-1.5 bg-zinc-200 dark:bg-zinc-800"
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JourneySteps;
