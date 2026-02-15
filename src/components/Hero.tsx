"use client";

import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="absolute inset-0 z-0">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>

            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60" />

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" as const }}
                    className="text-cyan-400 text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-6"
                >
                    Portfolio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" as const }}
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tighter"
                >
                    <span className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                        Yusuf Kaan
                    </span>
                    <br />
                    <span className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                        Köksal
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
                    className="w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-6 mb-4"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-neutral-500 text-sm md:text-base font-light tracking-widest uppercase"
                >
                    Building the Future of Robotics
                </motion.p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] to-transparent z-10" />
        </section>
    );
}
