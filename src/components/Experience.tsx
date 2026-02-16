"use client";

import React from "react";
import { motion } from "framer-motion";

const experience = [
    {
        company: "VizWebb",
        period: "Dec 2024 – Present",
        role: "Full Stack Developer",
        descriptions: [
            "Built complex dashboards and admin panels",
            "Implemented Stripe, Twilio,ChatGpt,Gemini and QuickBooks integrations",
            "Improved performance with SSR and caching",
            "Built scalable reusable UI architecture",
        ],
    },
    {
        company: "Azlaan Technologies",
        period: "Jan 2022 – Dec 2024",
        role: "Full Stack Developer",
        descriptions: [
            "Developed full-stack platforms",
            "Implemented RBAC and secure authentication systems",
            "Built real-time tracking systems with Socket.io",
            "Integrated payment and cloud services",
            "Automated documentation workflows",
        ],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-cyan font-mono text-xs md:text-sm tracking-[0.3em] uppercase opacity-80"
                    >
                        Career Path
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black"
                    >
                        Professional <span className="gradient-text">Journey</span>
                    </motion.h3>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent transform md:-translate-x-1/2" />

                    <div className="space-y-16 md:space-y-24">
                        {experience.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-background border-2 border-accent-cyan shadow-[0_0_20px_rgba(0,245,255,0.3)] flex items-center justify-center z-20"
                                    >
                                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent-cyan animate-pulse" />
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                    <div className={`glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-accent-cyan/20 transition-all duration-500 group relative ${idx % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                                        {/* Decorative Corner */}
                                        <div className={`absolute top-0 ${idx % 2 === 0 ? "right-0" : "left-0"} w-20 h-20 bg-accent-cyan/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />

                                        <div className="space-y-4 md:space-y-6 relative z-10">
                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <span className="text-[10px] font-mono font-bold text-accent-cyan bg-accent-cyan/10 px-4 py-1.5 rounded-full uppercase tracking-widest">
                                                    {item.period}
                                                </span>
                                                <div className="text-lg md:text-xl font-black text-white/90">{item.company}</div>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="text-2xl md:text-3xl font-bold gradient-text leading-tight">{item.role}</h4>
                                                <div className="w-12 h-1 bg-accent-cyan/20 rounded-full" />
                                            </div>

                                            <div className="grid grid-cols-1 gap-3">
                                                {item.descriptions.map((desc, i) => (
                                                    <div key={i} className="flex items-start gap-4 group/item">
                                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-cyan/40 group-hover/item:bg-accent-cyan transition-colors shrink-0" />
                                                        <p className="text-foreground/60 text-[14px] md:text-[15px] leading-relaxed group-hover/item:text-foreground/80 transition-colors">
                                                            {desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder for opposite side */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
