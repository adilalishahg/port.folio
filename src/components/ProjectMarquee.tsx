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
        <div className="relative w-full overflow-hidden bg-white/5 border-y border-white/10 py-6 mb-16 select-none">
            <motion.div
                className="flex whitespace-nowrap gap-12"
                animate={{
                    x: [0, -1035], // Approximate width of one full set of names
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {duplicatedNames.map((name, index) => (
                    <div
                        key={index}
                        className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-foreground/20 hover:text-accent-cyan transition-colors cursor-default"
                    >
                        {name}
                    </div>
                ))}
            </motion.div>

            {/* Decorative gradient overlays for soft fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10" />
        </div>
    );
};
