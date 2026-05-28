import React from 'react'

const WhoFor = () => {
  return (
    <section id="whofor" className="bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 py-16 px-6 border-b border-zinc-100/60 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-4 font-bold">
            Who is UnmuteX for?
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-zinc-950 dark:text-white tracking-tight mb-6">
            If you want to be heard,<br />
            <span className="text-zinc-900 dark:text-zinc-300 font-light">
              you belong here.
            </span>
          </h2>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Card 1 */}
          <div className="rounded-[2.5rem] p-10 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.015)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-8 shadow-xs">
              <svg className="w-5 h-5 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.214.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m10.5 8a2.18 2.18 0 01-.75 1.661m0-1.661a2.18 2.18 0 01.75 1.661m-1.5-1.661a2.18 2.18 0 00-.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.11 48.11 0 00-3.413-.387m0 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.881m7.5 0a48.112 48.112 0 00-7.5 0M2.25 9.75a2.18 2.18 0 00.75 1.661v4.25c0 1.094.787 2.036 1.872 2.18 2.087.277 4.214.42 6.378.42s4.214-.143 6.378-.42c1.085-.144 1.872-1.086 1.872-2.18v-4.25a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.11 48.11 0 00-3.413-.387m0 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.881m7.5 0a48.113 48.113 0 00-7.5 0" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-zinc-955 dark:text-white tracking-tight mb-4">
              Working Professionals
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-sm">
              Managers, software engineers, and marketers who want to lead team standups, command executive presence, and ace presentation meetings.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2.5rem] p-10 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.015)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-8 shadow-xs">
              <svg className="w-5 h-5 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A5.905 5.905 0 018 3.447M12 3v17.904m0-17.904a5.905 5.905 0 018 3.447c.563 1.666.86 3.433.872 5.27m-16.872 0a5.905 5.905 0 018 3.447M12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-zinc-955 dark:text-white tracking-tight mb-4">
              College Students
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-sm">
              Ambitious students preparing for crucial placement interviews, campus presentations, club enrollments, and early-stage network events.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2.5rem] p-10 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.015)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-300 liquid-glass">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-8 shadow-xs">
              <svg className="w-5 h-5 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-zinc-955 dark:text-white tracking-tight mb-4">
              Creators & Founders
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-sm">
              Visionary product founders pitching ideas to VCs, podcast creators hosting discussions, and writers stepping onto digital camera setups.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhoFor
