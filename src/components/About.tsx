"use client";

import { motion, type Variants } from "framer-motion";

const skills = [
    "Rust",
    "Python",
    "C",
    "C++",
    "OpenCV",
    "Embedded Systems",
    "ROS",
    "Arduino",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
};

const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" as const },
    },
};

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 px-6 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
            >
                <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
                    About
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6">
                    Who I Am
                </h2>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    I'm <span className="text-neutral-200 font-medium">Yusuf Kaan Köksal</span>, a 16-year-old robotics enthusiast and software developer. I'm passionate about autonomous systems, competitive robotics, and building real-world solutions through embedded software and intelligent algorithms.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10">
                    Currently focused on autonomous vehicle prep for MEB and competitive Mini Sumo robots. I love pushing the boundaries of what's possible with sensors, microcontrollers, and code.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">
                    Technologies & Skills
                </h3>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                >
                    {skills.map((skill) => (
                        <motion.span
                            key={skill}
                            variants={chipVariants}
                            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-200"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
