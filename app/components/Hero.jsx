import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-rose-50/40 via-white to-zinc-50/80 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 min-h-screen flex items-center justify-center px-6 text-center pt-28 overflow-hidden transition-all duration-300">
      
      {/* Premium Visual Overhaul Background - Vocal Wave & Mesh Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-100">
        {/* Modern High-End Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.08)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>

        {/* Spotlight ambient neon gradient bubbles (Vibrant light mode pastel + high contrast dark mode) */}
        <div className="absolute top-[-20%] left-[-10%] w-[65%] h-[65%] bg-gradient-to-br from-indigo-300/32 via-purple-300/18 to-transparent dark:from-indigo-500/20 dark:via-purple-500/12 dark:to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[65%] h-[65%] bg-gradient-to-tr from-rose-300/30 via-pink-200/20 to-transparent dark:from-rose-500/18 dark:via-amber-500/10 dark:to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDuration: '12s' }}></div>
        {/* Extra center-bottom glow to fill the lower area that was cutting off */}
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-gradient-to-t from-purple-200/16 via-indigo-100/10 to-transparent dark:from-purple-700/10 dark:via-indigo-700/6 dark:to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>

        {/* Interactive speaking/vocal SVG soundwave vector lines stretching across with neon gradients */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-[280px]" viewBox="0 0 1440 280" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.01)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.32)" />
              <stop offset="100%" stopColor="rgba(244, 63, 94, 0.01)" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(244, 63, 94, 0.01)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.26)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.01)" />
            </linearGradient>
            <linearGradient id="wave-gradient-3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.01)" />
              <stop offset="50%" stopColor="rgba(244, 63, 94, 0.20)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.01)" />
            </linearGradient>
          </defs>
          <path d="M0,120 C120,150 240,200 360,200 C480,200 600,120 720,135 C840,150 960,220 1080,220 C1200,220 1320,160 1440,120" stroke="url(#wave-gradient-1)" strokeWidth="3.5" className="animate-float" style={{ animationDuration: '8s' }} />
          <path d="M0,160 C120,120 240,80 360,120 C480,160 600,200 720,175 C840,150 960,100 1080,140 C1200,180 1320,240 1440,200" stroke="url(#wave-gradient-2)" strokeWidth="2.5" className="animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }} />
          <path d="M0,200 C120,240 240,280 360,240 C480,200 600,120 720,140 C840,160 960,240 1080,220 C1200,200 1320,160 1440,160" stroke="url(#wave-gradient-3)" strokeWidth="2" className="animate-float" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <path d="M0,90 C200,60 400,140 600,100 C800,60 1000,140 1200,90 C1320,70 1400,100 1440,90" stroke="url(#wave-gradient-1)" strokeWidth="1.5" opacity="0.4" className="animate-float" style={{ animationDuration: '15s', animationDelay: '0.5s' }} />
        </svg>
        
        {/* Floating high-end graphic accents (glassmorphic microphone, speech waves, and glowing dots) */}
        {/* Chat bubble - top left */}
        <div className="hidden sm:block absolute top-[22%] left-[8%] opacity-40 dark:opacity-45 animate-float" style={{ animationDuration: '7s' }}>
          <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-indigo-100/60 dark:border-zinc-800/40 shadow-[0_8px_32px_rgba(99,102,241,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
            <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </div>

        {/* Microphone - top right */}
        <div className="hidden sm:block absolute top-[18%] right-[10%] opacity-42 dark:opacity-48 animate-float" style={{ animationDuration: '9s', animationDelay: '1.5s' }}>
          <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-rose-100/60 dark:border-zinc-800/40 shadow-[0_8px_32px_rgba(244,63,94,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
            <svg className="w-6 h-6 text-rose-500 dark:text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v4M8 23h8" />
            </svg>
          </div>
        </div>

        {/* Soundwave bars — bottom left, product-relevant */}
        <div className="hidden sm:block absolute bottom-[28%] left-[6%] opacity-35 dark:opacity-30 animate-float" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
          <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-purple-100/60 dark:border-zinc-800/40 shadow-[0_8px_32px_rgba(168,85,247,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
            <svg className="w-6 h-6 text-purple-500 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h.01M7 8v8M11 5v14M15 8v8M19 10v4M21 12h.01" />
            </svg>
          </div>
        </div>

        {/* Voice ripple / speaking wave — mid right, product-relevant */}
        <div className="hidden sm:block absolute top-[55%] right-[7%] opacity-32 dark:opacity-28 animate-float" style={{ animationDuration: '11s', animationDelay: '3s' }}>
          <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-amber-100/60 dark:border-zinc-800/40 shadow-[0_8px_32px_rgba(245,158,11,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
            <svg className="w-6 h-6 text-amber-500 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          </div>
        </div>

        {/* Ambient floating glowing micro-particles */}
        <div className="absolute top-[45%] left-[15%] w-2 h-2 rounded-full bg-indigo-500/20 blur-xs animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[35%] right-[20%] w-3 h-3 rounded-full bg-rose-400/16 blur-xs animate-float" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-[30%] left-[25%] w-2.5 h-2.5 rounded-full bg-purple-400/16 blur-xs animate-float" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-[15%] right-[30%] w-1.5 h-1.5 rounded-full bg-indigo-400/18 blur-xs animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] left-[40%] w-2.5 h-2.5 rounded-full bg-rose-300/14 blur-xs animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 mb-8 shadow-xs animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 dark:bg-zinc-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-950 dark:bg-white"></span>
          </span>
          <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-300 uppercase tracking-widest">
            A Safe Speaking Space
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-955 dark:text-white leading-[1.08] mb-6 animate-fade-in-up [animation-delay:150ms]">
          Unmute Your Voice.<br />
          <span className="text-zinc-900 dark:text-zinc-300 font-light">
            Speak Without Fear.
          </span>
        </h1>

        <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:300ms]">
          You have brilliant ideas—but fear of judgment keeps you quiet. <strong>UnmuteX</strong> is a live, safe practice community where professionals, students & founders build real speaking courage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:450ms]">
          <a
            href="#feedback"
            className="w-full sm:w-auto bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:shadow-xl hover:shadow-zinc-950/10 transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            Join the UnmuteX Community
          </a>
          <a
            href="#problem"
            className="w-full sm:w-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-850/50 transition-all active:scale-95 flex items-center justify-center cursor-pointer"
          >
            Learn More
          </a>
        </div>

        <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-8 font-medium tracking-wide animate-fade-in-up [animation-delay:600ms]">
          Take the first step towards fearless speaking today
        </p>

      </div>

    </section>
  )
}

export default Hero
