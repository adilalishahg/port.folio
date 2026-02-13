"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Experience", value: "4+ Years" },
    { label: "Specialty", value: "SaaS & AI Systems" },
    { label: "Systems", value: "Real-Time Apps" },
    { label: "Architecture", value: "Enterprise Dashboards" },
];

export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="blob -top-20 -left-20 animate-pulse-slow" />
            <div className="blob top-1/2 -right-20 animate-float" style={{ animationDelay: "2s" }} />

            <div className="max-w-7xl mx-auto px-6 w-full text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants} className="space-y-2">
                        <h2 className="text-accent-cyan font-mono text-sm tracking-widest uppercase">
                            Hello, I am
                        </h2>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight">
                            Adil Ali
                        </h1>
                        <h3 className="text-2xl md:text-4xl font-light text-foreground/60 italic">
                            MERN & Next.js Developer
                        </h3>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 leading-relaxed font-light"
                    >
                        Building <span className="text-white font-medium">scalable SaaS</span>,
                        <span className="text-white font-medium"> AI-powered platforms</span>, and
                        <span className="text-white font-medium"> real-time applications</span>.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="#projects" className="px-8 py-4 bg-accent-cyan text-black font-bold rounded-full hover:glow-cyan transition-all flex items-center gap-2 group">
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-4 glass text-white font-medium rounded-full cursor-pointer hover:border-accent-purple/50 hover:bg-white/5 hover:glow-purple transition-all flex items-center gap-2"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                        <Link href="#contact" className="px-8 py-4 text-white/60 hover:text-white transition-colors flex items-center gap-2">
                            <Mail size={18} />
                            Contact Me
                        </Link>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        variants={itemVariants}
                        className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-1">
                                <div className="text-3xl font-bold gradient-text">{stat.value.split(' ')[0]}</div>
                                <div className="text-xs uppercase tracking-widest text-foreground/40 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
