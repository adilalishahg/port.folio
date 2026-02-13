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
            "Implemented Stripe, Twilio, and QuickBooks integrations",
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
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-accent-cyan font-mono text-sm tracking-widest uppercase">My Journey</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Experience</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full mx-auto" />
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experience.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,245,255,1)] transform -translate-x-1.5 md:-translate-x-2 border-4 border-background z-10" />

                                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                                    <div className="glass-card p-8 rounded-2xl space-y-4">
                                        <div className={`flex flex-col gap-2 ${idx % 2 === 0 ? "" : "md:items-end font-right"}`}>
                                            <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full w-fit">
                                                {item.period}
                                            </span>
                                            <h4 className="text-2xl font-bold text-white leading-tight">{item.role}</h4>
                                            <div className="text-lg font-medium text-foreground/90 italic">{item.company}</div>
                                        </div>
                                        <ul className={`space-y-2 text-foreground/70 text-sm ${idx % 2 === 0 ? "" : "md:text-right"}`}>
                                            {item.descriptions.map((desc, i) => (
                                                <li key={i} className={`flex gap-2 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                                                    <span className="text-accent-cyan">•</span>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
