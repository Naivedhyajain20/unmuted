"use client";

import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaTimes, FaGraduationCap, FaQuoteLeft, FaMicrophone } from "react-icons/fa";

const teamMembers = [
  {
    name: "Shashwat Sharma",
    role: "Founder & Lead Facilitator",
    college: "SRCC, Delhi University",
    initials: "AI",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    bio: "Ananya started UnmuteX to solve a personal struggle with public speaking. She designs the speaking modules and runs the core community.",
    tagline: "Speak to express, not to impress.",
    image: '../found.jpeg'
  },
  {
    name: "Vivek Yadav",
    role: "Co-Founder & Coach",
    college: "IIT Delhi",
    initials: "KM",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    bio: "Kabir runs our advanced debate batches. He helps members structure logical flow under high pressure.",
    tagline: "Structure your thoughts, command the room.",
    image: '../vivek.jpeg'
  },
  {
    name: "Naivedya Jain",
    role: "Lead Community Builder",
    college: "St. Stephen's College",
    initials: "RS",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    bio: "Riya handles peer matching and onboarding circles, making sure every new joiner finds a comfortable circle.",
    tagline: "Belonging precedes confidence.",
    image: '../naivedya.jpeg'
  },
  {
    name: "Nikhil Kumar",
    role: "Head of Product & Tech",
    college: "BITS Pilani",
    initials: "DP",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    bio: "Devansh designed the matching algorithm and runs the platform dashboard that schedules community sessions.",
    tagline: "Code that empowers community voices.",
    image: '../nik.png'
  },
  {
    name: "Akriti",
    role: "Creative & Brand Lead",
    college: "NID Ahmedabad",
    initials: "ID",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    bio: "Ishaan is behind the sleek visual language and modern slide decks that guide our live speaking circles.",
    tagline: "Good design makes hard skills approachable.",
    image: '../akriti.jpeg'
  },
  {
    name: "Chhavi",
    role: "Mentorship Coordinator",
    college: "Ashoka University",
    initials: "ZK",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    bio: "Zara leads the coach-to-student pairing system and tracks regular feedback card delivery.",
    tagline: "Constructive feedback heals stage anxiety.",
    image: '../chavi.jpeg'
  },
  {
    name: "Grita",
    role: "Workshop Director",
    college: "Lady Shri Ram College",
    initials: "MN",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    bio: "Meera curates the daily speech prompts and coordinates with schools and colleges for live outreach activities.",
    tagline: "Fun prompts break ice faster than advice.",
    image: '../gritha.jpeg'
  },
  {
    name: "Sonali",
    role: "Growth & Outreach Manager",
    college: "Christ University",
    initials: "AJ",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    bio: "Aditya establishes partnerships with colleges and student bodies to host external debate tourneys.",
    tagline: "Connecting voices, bridging communities.",
    image: '../sonali.jpeg'
  },
];

const leftMembers = teamMembers.slice(1, 4);   // Vivek, Naivedya, Nikhil
const rightMembers = teamMembers.slice(4, 7);  // Gritha, Akriti, Chhavi

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

    let calculatedLeft = cardLeft + cardWidth / 2 - modalWidth / 2;
    if (calculatedLeft < 16) calculatedLeft = 16;
    if (calculatedLeft + modalWidth > containerWidth - 16) {
      calculatedLeft = containerWidth - modalWidth - 16;
    }

    let calculatedTop = cardTop + cardHeight / 2 - estimatedHeight / 2;
    if (calculatedTop < 20) calculatedTop = 20;
    if (calculatedTop + estimatedHeight > containerHeight - 20) {
      calculatedTop = containerHeight - estimatedHeight - 20;
    }
    if (calculatedTop < 10) calculatedTop = 10;

    setModalPos({ top: calculatedTop, left: calculatedLeft, width: modalWidth });
    setSelectedMember(member);
  };

  const MemberCard = ({ member }) => (
    <div
      onClick={(e) => handleCardClick(e, member)}
      className="group relative rounded-[1.6rem] overflow-hidden cursor-pointer bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:shadow-[0_24px_50px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_24px_50px_rgba(0,0,0,0.45)] hover:-translate-y-1.5 transition-all duration-300"
      style={{ width: '100%' }}
    >
      {/* Image — tall, fills most of the card */}
      <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient scrim at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

        {/* Role pill — top left */}
        <div className="absolute top-3 left-3">
          <span className="text-[8px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80">
            {member.role.split('&')[0].trim()}
          </span>
        </div>

        {/* Voice bars — bottom of image, subtle */}
        <div className="absolute bottom-[72px] left-4 right-4 flex justify-start items-end gap-[3px] h-4 opacity-40 select-none">
          {[2, 4, 3, 5, 2, 4, 3].map((h, i) => (
            <span
              key={i}
              className="w-[3px] bg-white rounded-full animate-pulse"
              style={{ height: `${h * 3}px`, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        {/* Name + tagline overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8">
          <h4 className="text-sm font-bold text-white tracking-tight leading-tight mb-0.5">
            {member.name}
          </h4>
          <p className="text-[10px] text-white/60 font-light leading-snug line-clamp-1 italic">
            &quot;{member.tagline}&quot;
          </p>
        </div>
      </div>

      {/* Footer strip — college tag */}
      <div className="px-4 py-2.5 flex items-center justify-between bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800/60">
        <span className="text-[9px] text-zinc-400 dark:text-zinc-500 font-medium tracking-wide truncate">
          {member.college}
        </span>
        <span className="text-[8px] uppercase font-bold tracking-widest text-zinc-300 dark:text-zinc-700 ml-2 shrink-0">
          View ↗
        </span>
      </div>
    </div>
  );

  return (
    <section id="about-team" className="bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-all duration-300 overflow-hidden relative">

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

        {/* Founder Spotlights split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 max-w-5xl mx-auto">

          <div className="lg:col-span-5 animate-fade-in-up">
            <div className="relative group max-w-md mx-auto aspect-square sm:aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-[0_30px_60px_rgba(0,0,0,0.02)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 z-20 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2">
                  Founder & Lead Facilitator
                </span>
                <h3 className="text-2xl font-bold tracking-tight mb-1">
                  Shashwat Sharma
                </h3>
                <p className="text-xs text-zinc-350 font-light">
                  SOIT, RGPV University
                </p>
              </div>
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center select-none">
                <div className="text-center">
                  <div className="w-full h-full rounded overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto shadow-inner mb-4">
                    <img src="../found.jpeg" alt="Founder" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-zinc-500 text-xs tracking-wider block">UNMUTEX PORTRAIT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 dark:text-zinc-500 block mb-3">
                {"Founder's Story"}
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-zinc-955 dark:text-white tracking-tight mb-4 leading-snug">
                {"\"We aren't here to teach you to be perfect. We are here to help you be real.\""}
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
                  Shashwat Sharma
                </h4>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
                  Founder, Lead Coach & Facilitator
                </p>
              </div>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/unmutex/?viewAsMember=true" className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-955 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition duration-300">
                  <FaLinkedin size={12} />
                </a>
                <a href="https://www.instagram.com/25shashwatt/" className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-955 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition duration-300">
                  <FaInstagram size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Core Team: 3 | Center Text | 3 ── */}
        <div className="mt-20 pt-16 border-t border-zinc-100 dark:border-zinc-900/60">

          {/* Section header */}
          <div className="text-center mb-14">
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2">
              About the Core Team
            </h3>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs font-light">
              Click any card to read their full profile
            </p>
          </div>

          {/* 3-column layout: cards | divider | cards */}
          <div className=" lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-start max-w-2xl mx-auto">

            {/* LEFT: 3 cards stacked */}
            <div className="flex flex-col md:flex-row gap-5">
              {leftMembers.map((member, idx) => (
                <MemberCard key={member.name} member={member} idx={idx} />
              ))}
            </div>

            {/* CENTER: Decorative vertical divider with text */}
            <div className="hidden lg:flex items-center gap-5 px-6 w-full justify-center py-5">
              {/* Left line */}
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

              {/* Center badge */}
              <div className="flex items-center gap-5 text-center">
                {/* Icon ring */}
                <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center shadow-sm">
                  <FaMicrophone size={14} className="text-zinc-400 dark:text-zinc-500" />
                </div>

                {/* Horizontal label */}
                <div className="flex flex-col items-center leading-none">
                  <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-zinc-300 dark:text-zinc-600">
                    Core
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-zinc-400 dark:text-zinc-500">
                    Members
                  </span>
                </div>

                {/* Dot cluster */}
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
              </div>

              {/* Right line */}
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
            </div>

            {/* Mobile: simple horizontal rule with label */}
            <div className="flex lg:hidden items-center gap-4 py-2">
              <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
              <span className="text-[9px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-600 whitespace-nowrap">
                Core Members
              </span>
              <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
            </div>

            {/* RIGHT: 3 cards stacked */}
            <div className="flex flex-col md:flex-row  gap-5">
              {rightMembers.map((member, idx) => (
                <MemberCard key={member.name} member={member} idx={idx} />
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Team Member Detail Pop-up Modal */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          className="absolute inset-0 z-[100] bg-zinc-950/60 dark:bg-black/85 backdrop-blur-md transition-all duration-300"
        >
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
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 flex items-center justify-center transition cursor-pointer z-20"
              aria-label="Close modal"
            >
              <FaTimes size={12} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-stretch mt-4">
              <div className="md:col-span-4 flex flex-col justify-between items-center text-center p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-850">
                <img src={selectedMember.image} alt="" className="h-full w-full object-cover rounded-2xl" />
              </div>

              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest block mb-1">
                    Team Spotlight
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    {selectedMember.name}
                  </h3>

                  <div className="bg-zinc-50/50 dark:bg-zinc-950/20 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 my-5 relative">
                    <FaQuoteLeft className="text-zinc-200/50 dark:text-zinc-800/40 absolute top-3 left-3" size={16} />
                    <blockquote className="relative z-10 pl-5 text-zinc-750 dark:text-zinc-200 text-[13px] font-normal italic leading-relaxed">
                      &quot;{selectedMember.tagline}&quot;
                    </blockquote>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
                      Role & Direct Impact
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>

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