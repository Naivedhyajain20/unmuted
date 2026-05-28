"use client";

import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaTimes, FaGraduationCap, FaQuoteLeft, FaMicrophone } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ananya Iyer",
    role: "Founder & Lead Facilitator",
    college: "SRCC, Delhi University",
    initials: "AI",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    bio: "Ananya started UnmuteX to solve a personal struggle with public speaking. She designs the speaking modules and runs the core community.",
    tagline: "Speak to express, not to impress."
  },
  {
    name: "Kabir Malhotra",
    role: "Co-Founder & Coach",
    college: "IIT Delhi",
    initials: "KM",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    bio: "Kabir runs our advanced debate batches. He helps members structure logical flow under high pressure.",
    tagline: "Structure your thoughts, command the room."
  },
  {
    name: "Riya Sen",
    role: "Lead Community Builder",
    college: "St. Stephen's College",
    initials: "RS",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    bio: "Riya handles peer matching and onboarding circles, making sure every new joiner finds a comfortable circle.",
    tagline: "Belonging precedes confidence."
  },
  {
    name: "Devansh Patel",
    role: "Head of Product & Tech",
    college: "BITS Pilani",
    initials: "DP",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    bio: "Devansh designed the matching algorithm and runs the platform dashboard that schedules community sessions.",
    tagline: "Code that empowers community voices."
  },
  {
    name: "Meera Nair",
    role: "Workshop Director",
    college: "Lady Shri Ram College",
    initials: "MN",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    bio: "Meera curates the daily speech prompts and coordinates with schools and colleges for live outreach activities.",
    tagline: "Fun prompts break ice faster than advice."
  },
  {
    name: "Ishaan Das",
    role: "Creative & Brand Lead",
    college: "NID Ahmedabad",
    initials: "ID",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    bio: "Ishaan is behind the sleek visual language and modern slide decks that guide our live speaking circles.",
    tagline: "Good design makes hard skills approachable."
  },
  {
    name: "Zara Khan",
    role: "Mentorship Coordinator",
    college: "Ashoka University",
    initials: "ZK",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    bio: "Zara leads the coach-to-student pairing system and tracks regular feedback card delivery.",
    tagline: "Constructive feedback heals stage anxiety."
  },
  {
    name: "Aditya Joshi",
    role: "Growth & Outreach Manager",
    college: "Christ University",
    initials: "AJ",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    bio: "Aditya establishes partnerships with colleges and student bodies to host external debate tourneys.",
    tagline: "Connecting voices, bridging communities."
  },
  {
    name: "Siddharth Roy",
    role: "Events Organizer",
    college: "Symbiosis, Pune",
    initials: "SR",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    bio: "Siddharth hosts the weekly Sunday UnmuteX open mics, managing logistics and speaker order.",
    tagline: "The stage is yours. Claim it."
  },
  {
    name: "Tanya Gill",
    role: "Student Advisor",
    college: "Lady Shri Ram College",
    initials: "TG",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
    bio: "Tanya represents school students' feedback, ensuring the introductory batches are perfectly paced.",
    tagline: "Confidence starts at sixteen."
  }
];

const AboutTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalPos, setModalPos] = useState({ top: 0, left: 0, width: 360 });

  const handleCardClick = (e, member) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const section = document.getElementById("about-team");
    if (!section) return;

    const sectionRect = section.getBoundingClientRect();

    const cardLeft = rect.left - sectionRect.left;
    const cardTop = rect.top - sectionRect.top;
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    const containerWidth = sectionRect.width;
    const containerHeight = sectionRect.height;

    const modalWidth = Math.min(672, containerWidth - 32);
    const isMobile = containerWidth < 768;
    const estimatedHeight = isMobile ? 580 : 480;

    // Shift left to center over card
    let calculatedLeft = cardLeft + cardWidth / 2 - modalWidth / 2;
    if (calculatedLeft < 16) calculatedLeft = 16;
    if (calculatedLeft + modalWidth > containerWidth - 16) {
      calculatedLeft = containerWidth - modalWidth - 16;
    }

    // Shift top to center over card
    let calculatedTop = cardTop + cardHeight / 2 - estimatedHeight / 2;
    // Bounds checking
    if (calculatedTop < 20) calculatedTop = 20;
    if (calculatedTop + estimatedHeight > containerHeight - 20) {
      calculatedTop = containerHeight - estimatedHeight - 20;
    }

    if (calculatedTop < 10) calculatedTop = 10;

    setModalPos({
      top: calculatedTop,
      left: calculatedLeft,
      width: modalWidth
    });
    setSelectedMember(member);
  };

  // Duplicate the array to ensure perfect seamless looping marquee
  const marqueeMembers = [...teamMembers, ...teamMembers];

  return (
    <section id="about-team" className="bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-all duration-300 overflow-hidden relative">

      {/* Inline styles for custom infinite scrolling marquee slider */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-4 font-bold">
            The Hearts Behind UnmuteX
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-zinc-950 dark:text-white tracking-tight mb-6">
            Meet Our Founder<br />
            <span className="text-zinc-900 dark:text-zinc-300 font-light">
              & Core Team
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            A passionate group of youth mentors, debate champions, and technology builders committed to helping you speak without fear.
          </p>
        </div>

        {/* Founder Spotlights split layout (Left: Large Photo Box, Right: Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 max-w-5xl mx-auto">

          {/* Left Column: Founder Large Image Box */}
          <div className="lg:col-span-5 animate-fade-in-up">
            <div className="relative group max-w-md mx-auto aspect-square sm:aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-[0_30px_60px_rgba(0,0,0,0.02)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              {/* Premium abstract graphic overlay for high-end designer photo style */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 z-20 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2">
                  Founder & Lead Facilitator
                </span>
                <h3 className="text-2xl font-bold tracking-tight mb-1">
                  Ananya Iyer
                </h3>
                <p className="text-xs text-zinc-350 font-light">
                  SRCC, Delhi University
                </p>
              </div>

              {/* High-end Styled Abstract Avatar Image Box representing founder */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center select-none">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-5xl font-light text-white mx-auto shadow-inner mb-4">
                    AI
                  </div>
                  <span className="text-zinc-500 text-xs tracking-wider block">UNMUTEX PORTRAIT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Details Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 dark:text-zinc-500 block mb-3">
                Founder's Story
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-white tracking-tight mb-4 leading-snug">
                "We aren't here to teach you to be perfect. We are here to help you be real."
              </h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                UnmuteX was born from a very raw realization. Traditional speaking courses throw you into high-pressure setups or focus too much on vocabulary rules and posture. For someone struggling with hand shivering or social stutter, that is terrifying.
                <br /><br />
                I built UnmuteX as a safe haven. By pairing members in small, warm groups of 4 peers at matching skill levels, we erase judgment before you even unmute your microphone. Over 1,500 students have broken their silence through our batch system, and this is just the beginning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-900">
              <div>
                <h4 className="text-sm font-bold text-zinc-955 dark:text-white mb-0.5">
                  Ananya Iyer
                </h4>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
                  Founder, Lead Coach & Facilitator
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-955 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition duration-300">
                  <FaLinkedin size={12} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-955 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition duration-300">
                  <FaTwitter size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* About the Team: 10 Cards Infinite Scrolling Loop Slider with 60-40 Split */}
        <div className="mt-20 pt-16 border-t border-zinc-100 dark:border-zinc-900/60 relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2">
              About the Core Team
            </h3>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs font-light">
              Hover to pause. Click any member's card to read their full profile !!!
            </p>
          </div>

          {/* Marquee Wrapper Container */}
          <div className="w-full relative overflow-hidden py-4 select-none">

            {/* Fade Overlays on Edges */}
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

            {/* Marquee Animation Slider */}
            <div className="animate-marquee-slow flex gap-6">
              {marqueeMembers.map((member, idx) => (
                <div
                  key={idx}
                  onClick={(e) => handleCardClick(e, member)}
                  className="w-[360px] shrink-0 rounded-3xl p-3 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.02)] dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 cursor-pointer flex gap-3.5 items-center liquid-glass"
                >

                  {/* Left Column (60% split - Visual Element block) */}
                  <div className="w-[60%] h-[155px] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-800 dark:to-zinc-950 relative flex flex-col items-center justify-center border border-zinc-200/20 shadow-inner select-none shrink-0">
                    {/* Glossy reflective overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />

                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-sm border-2 z-10 ${member.color}`}>
                      {member.initials}
                    </div>

                    {/* Dynamic voice frequency visualizer bars */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex justify-between items-end h-6 opacity-30 select-none">
                      <span className="w-1 bg-white h-2 rounded-full animate-pulse-glow" style={{ animationDelay: '0.1s' }} />
                      <span className="w-1 bg-white h-4 rounded-full animate-pulse-glow" style={{ animationDelay: '0.4s' }} />
                      <span className="w-1 bg-white h-5 rounded-full animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1 bg-white h-3 rounded-full animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
                      <span className="w-1 bg-white h-1.5 rounded-full animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
                      <span className="w-1 bg-white h-4 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <span className="absolute top-2.5 left-3 text-[7.5px] uppercase font-black tracking-widest text-white/55 flex items-center gap-1 select-none">
                      <FaMicrophone size={6} className="text-white/60 animate-pulse" /> Live Coach
                    </span>
                  </div>

                  {/* Right Column (40% split - Info/Text Details block) */}
                  <div className="w-[40%] min-w-0 pr-1 flex flex-col justify-center">
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white tracking-tight truncate mb-0.5">
                      {member.name}
                    </h4>
                    <p className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider truncate mb-1">
                      {member.role.split('&')[0]}
                    </p>

                    <div className="flex items-center gap-1 text-[8.5px] text-zinc-400 dark:text-zinc-500 font-medium mb-2 truncate">
                      <FaGraduationCap className="shrink-0 text-zinc-350 dark:text-zinc-655" />
                      <span>{member.college.split(',')[0]}</span>
                    </div>

                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-light line-clamp-2 leading-relaxed italic">
                      "{member.tagline}"
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Team Member Detail Pop-up Modal Card with 60-40 Split Layout */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          className="absolute inset-0 z-[100] bg-zinc-950/60 dark:bg-black/85 backdrop-blur-md transition-all duration-300"
        >

          {/* Modal content body card with genie spring-in transition & viewport scroll compatibility */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: `${modalPos.top}px`,
              left: `${modalPos.left}px`,
              width: `${modalPos.width}px`
            }}
            className="max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_40px_90px_rgba(0,0,0,0.08)] dark:shadow-[0_40px_90px_rgba(0,0,0,0.6)] animate-genie"
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 flex items-center justify-center transition cursor-pointer z-20"
              aria-label="Close modal"
            >
              <FaTimes size={12} />
            </button>

            {/* 60-40 Split Grid Container for Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-stretch mt-4">

              {/* Left Column (40% split - col-span-4): Large Speaker Portrait container */}
              <div className="md:col-span-4 flex flex-col justify-between items-center text-center p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-850">
                <div className="my-auto">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center font-bold text-3xl shadow-sm mx-auto mb-4 border ${selectedMember.color}`}>
                    {selectedMember.initials}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Coach
                  </span>
                </div>

                <div className="w-full mt-6 pt-4 border-t border-zinc-200/40 dark:border-zinc-800">
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">
                    Primary Chapter
                  </p>
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-350 truncate mt-1">
                    {selectedMember.college}
                  </p>
                </div>
              </div>

              {/* Right Column (60% split - col-span-6): Details narrative content */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest block mb-1">
                    Team Spotlight
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-955 dark:text-white tracking-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mt-0.5">
                    {selectedMember.role}
                  </p>

                  {/* Modal Quote Tagline */}
                  <div className="bg-zinc-50/50 dark:bg-zinc-955/20 border border-zinc-100 dark:border-zinc-850 rounded-2xl p-4 my-5 relative">
                    <FaQuoteLeft className="text-zinc-200/50 dark:text-zinc-800/40 absolute top-3 left-3" size={16} />
                    <blockquote className="relative z-10 pl-5 text-zinc-650 dark:text-zinc-350 text-[13px] font-light italic leading-relaxed">
                      "{selectedMember.tagline}"
                    </blockquote>
                  </div>

                  {/* Modal Bio description */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
                      Role & Direct Impact
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>

                {/* Modal Footer actions */}
                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-95 transition cursor-pointer"
                  >
                    Close Profile
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default AboutTeam;
