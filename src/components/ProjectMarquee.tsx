"use client";

import React from "react";
import { motion } from "framer-motion";

const projectNames = [
    "Daily Block",
    "Networking App",
    "StickerVerse",
    "BiziAdmin",
    "Property Management",
    "NEMT Platform",
    "MDS Boat SaaS",
    "BizAI",
    "Noru",
    "Risk Management System",
    "Sponsor Platform",
];

export const ProjectMarquee = () => {
    // Triple the list to ensure seamless looping
    const duplicatedNames = [...projectNames, ...projectNames, ...projectNames];

    return (
        <div className="relative w-full overflow-hidden bg-white/5 border-y border-white/5 py-4 md:py-8 mb-16 select-none group">
            <motion.div
                className="flex whitespace-nowrap gap-12 md:gap-24"
                animate={{
                    x: ["0%", "-33.333%"],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                whileHover={{ animationPlayState: "paused" }}
                style={{ animationPlayState: "running" }}
            >
                {duplicatedNames.map((name, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, color: "var(--accent-cyan)" }}
                        whileTap={{ scale: 0.9, color: "var(--accent-cyan)" }}
                        className="text-xl md:text-5xl font-black uppercase tracking-tighter text-white/10 transition-colors cursor-pointer"
                    >
                        {name}
                    </motion.div>
                ))}
            </motion.div>

            {/* Decorative gradient overlays for soft fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />
        </div>
    );
};
