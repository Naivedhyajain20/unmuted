import React, { useState, useEffect } from 'react'
import CountUp from '../packages/CountUp'

const Banner = () => {
    const [prevCount, setPrevCount] = useState(0);
    const [followerCount, setFollowerCount] = useState(6845);

    useEffect(() => {
        let isMounted = true;

        const updateCount = async () => {
            try {
                const res = await fetch(`/api/instagram?t=${Date.now()}`);
                if (!res.ok) {
                    console.log("Instagram API returned non-OK status:", res.status);
                    return;
                }
                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    console.log("Instagram API returned non-JSON content");
                    return;
                }
                const data = await res.json();
                if (isMounted && data && typeof data.followers === "number") {
                    setFollowerCount(prev => {
                        setPrevCount(prev);
                        return data.followers;
                    });
                }
            } catch (err) {
                // Silently handle to prevent Next.js dynamic development overlays
                console.log("Instagram sync status: Serving offline baseline count", err.message);
            }
        };

        // Initial fetch
        updateCount();

        // Real-time polling every 60 seconds to sync dynamically!
        const intervalId = setInterval(updateCount, 60000);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, []);

    return (
        <section className="relative bg-white dark:bg-zinc-950 py-16 px-6 overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.015)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 divide-y-2 md:divide-y-0 md:divide-x divide-zinc-200/50 dark:divide-zinc-850">
                    
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center justify-center px-4">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white flex items-center justify-center">
                            <CountUp
                                from={prevCount}
                                to={followerCount}
                                separator=","
                                direction="up"
                                duration={1.2}
                                className="count-up-text"
                                delay={0}
                            />
                            <span className="text-zinc-400 dark:text-zinc-500 ml-1 font-light">+</span>
                        </span>
                        <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
                            Active Members
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
                            8 PM
                        </span>
                        <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
                            Daily Live Sessions
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center justify-center px-4">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white flex items-center justify-center">
                            <CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1.2}
                                className="count-up-text"
                                delay={0}
                            />
                            <span className="text-zinc-400 dark:text-zinc-500 ml-0.5 font-light">%</span>
                        </span>
                        <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
                            Judgment Free
                        </p>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white flex items-center justify-center">
                            <CountUp
                                from={0}
                                to={21}
                                separator=","
                                direction="up"
                                duration={1.2}
                                className="count-up-text"
                                delay={0}
                            />
                            <span className="text-zinc-400 dark:text-zinc-500 ml-1 font-light">Days</span>
                        </span>
                        <p className="text-[11px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-3 uppercase tracking-widest">
                            To Real Change
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner
