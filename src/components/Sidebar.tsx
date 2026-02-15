"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    FolderKanban,
    User,
    Mail,
} from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "About", href: "#about", icon: User },
    { label: "Contact", href: "#contact", icon: Mail },
];

export default function Sidebar() {
    const [active, setActive] = useState("Home");

    const handleNav = (label: string, href: string) => {
        setActive(label);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", damping: 20, stiffness: 200 }}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50"
            >
                {navLinks.map((link) => {
                    const isActive = active === link.label;
                    return (
                        <button
                            key={link.href}
                            onClick={() => handleNav(link.label, link.href)}
                            className="relative p-3 sm:p-3.5 rounded-xl transition-all duration-300 group"
                        >
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-white rounded-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    />
                                )}
                            </AnimatePresence>
                            <link.icon
                                size={20}
                                className={`relative z-10 transition-colors duration-200 ${isActive
                                        ? "text-black"
                                        : "text-neutral-400 group-hover:text-white"
                                    }`}
                            />
                        </button>
                    );
                })}
            </motion.div>
        </nav>
    );
}
