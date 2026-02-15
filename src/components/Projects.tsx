"use client";

import { motion } from "framer-motion";
import { Cpu, Bot, Code, Wrench, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
    {
        id: 1,
        title: "MEB Robot",
        date: "2024",
        content:
            "Development of an autonomous vehicle prototype for the MEB competition. Focus on sensor integration and navigation algorithms.",
        category: "Robotics",
        icon: Cpu,
        relatedIds: [2, 3],
        status: "in-progress" as const,
        energy: 85,
    },
    {
        id: 2,
        title: "Mini Sumo",
        date: "2024",
        content:
            "A competitive Mini Sumo robot designed for high-speed reaction and opponent detection. Built with embedded systems and strategic combat logic.",
        category: "Competition",
        icon: Bot,
        relatedIds: [1, 4],
        status: "completed" as const,
        energy: 100,
    },
    {
        id: 3,
        title: "Sensor Fusion",
        date: "2024",
        content:
            "Research and implementation of multi-sensor fusion algorithms for improved autonomous navigation accuracy.",
        category: "Research",
        icon: Code,
        relatedIds: [1, 5],
        status: "in-progress" as const,
        energy: 60,
    },
    {
        id: 4,
        title: "Embedded SW",
        date: "2023",
        content:
            "Low-level embedded software development for motor control and real-time sensor processing on ARM-based microcontrollers.",
        category: "Engineering",
        icon: Wrench,
        relatedIds: [2],
        status: "completed" as const,
        energy: 95,
    },
    {
        id: 5,
        title: "Path Planning",
        date: "2024",
        content:
            "Autonomous path planning and obstacle avoidance using LIDAR and computer vision techniques.",
        category: "Autonomous",
        icon: Rocket,
        relatedIds: [1, 3],
        status: "pending" as const,
        energy: 35,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 lg:py-24 px-6 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
                <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
                    Portfolio
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
                    Projects
                </h2>
                <p className="text-neutral-500 max-w-md mx-auto text-sm">
                    Click on any node to explore project details and connections.
                </p>
            </motion.div>

            <RadialOrbitalTimeline timelineData={timelineData} />
        </section>
    );
}
