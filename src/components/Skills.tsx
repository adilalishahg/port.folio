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

export const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            } as const,
        },
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-accent-cyan font-mono text-sm tracking-widest uppercase">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Skills & Tools</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="space-y-6">
                            <h4 className="text-xl font-bold text-foreground/80 border-l-2 border-accent-cyan pl-4">
                                {category.title}
                            </h4>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3"
                            >
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={itemVariants}
                                        className="px-4 py-2 glass-card text-sm font-medium rounded-full cursor-default hover:border-accent-cyan/50 hover:text-accent-cyan"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
