"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
    {
        label: "GitHub",
        href: "https://github.com/Yusufiibe",
        icon: Github,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yusuf-kaan-k%C3%B6ksal-3a239538b/",
        icon: Linkedin,
    },
    {
        label: "Email",
        href: "mailto:yusufkaankoksal581@gmail.com",
        icon: Mail,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 lg:py-32 px-6 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
            >
                <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">
                    Contact
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6">
                    Let's Build Something
                </h2>
                <p className="text-neutral-400 text-base md:text-lg mb-10">
                    Have an idea, a project, or just want to chat about robotics? Reach
                    out — I'm always open to collaboration.
                </p>

                <div className="inline-flex flex-col sm:flex-row gap-4">
                    {links.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-neutral-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors duration-200"
                        >
                            <link.icon size={18} />
                            <span className="text-sm font-medium">{link.label}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Footer */}
            <div className="mt-24 text-center">
                <p className="text-neutral-600 text-xs">
                    &copy; {new Date().getFullYear()} Yusuf Kaan Köksal. Built with
                    Next.js & Tailwind CSS.
                </p>
            </div>
        </section>
    );
}
