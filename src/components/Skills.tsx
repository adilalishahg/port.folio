"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand / Redux"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "RBAC Authentication", "JWT & 2FA"],
    },
    {
        title: "Integrations",
        skills: ["AWS S3", "ChatGPT", "Gemini AI", "TON", "Stripe", "Twilio", "QuickBooks", "Cloudinary"],
    },
    {
        title: "Other",
        skills: ["Socket.io", "Real-time systems", "SSR & Caching", "Map integrations", "Charts & Analytics"],
    },
];

import { TiltCard } from "./TiltCard";

export const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            } as const,
        },
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05)_0%,transparent_50%)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-cyan font-mono text-xs md:text-sm tracking-[0.3em] uppercase opacity-80"
                    >
                        Expertise
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black"
                    >
                        Toolkit <span className="gradient-text">& Powers</span>
                    </motion.h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <TiltCard key={idx} className="h-full">
                            <div className="glass-card p-8 rounded-[2rem] h-full flex flex-col space-y-8 group border border-white/5 hover:border-accent-cyan/20 transition-colors">
                                <div className="space-y-3">
                                    <div className="w-12 h-px bg-accent-cyan/30 group-hover:w-20 transition-all duration-500" />
                                    <h4 className="text-2xl font-black text-white/90 group-hover:text-accent-cyan transition-colors">
                                        {category.title}
                                    </h4>
                                </div>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            variants={itemVariants}
                                            whileHover={{ y: -2, scale: 1.05, backgroundColor: "rgba(0, 245, 255, 0.1)", color: "var(--accent-cyan)", borderColor: "rgba(0, 245, 255, 0.2)" }}
                                            whileTap={{ scale: 0.95, backgroundColor: "rgba(0, 245, 255, 0.2)" }}
                                            className="px-4 py-2 bg-white/5 border border-white/5 text-[11px] md:text-[13px] font-medium rounded-xl cursor-default transition-all duration-300 text-white/50"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
