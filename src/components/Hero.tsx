"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

const stats = [
    { label: "Experience", value: "4+ Years" },
    { label: "Specialty", value: "SaaS & AI Systems" },
    { label: "Systems", value: "Real-Time Apps" },
    { label: "Architecture", value: "Enterprise Dashboards" },
];

export const Hero = () => {
    const [roleText, setRoleText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [typingSpeed, setTypingSpeed] = React.useState(150);

    const fullRole = "MERN & Next.js Developer";

    React.useEffect(() => {
        const handleType = () => {
            setRoleText(prev => isDeleting
                ? fullRole.substring(0, prev.length - 1)
                : fullRole.substring(0, prev.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && roleText === fullRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && roleText === "") {
                setIsDeleting(false);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [roleText, isDeleting, typingSpeed]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any, // Custom easeOutExpo
            },
        },
    };

    const titleLetterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.5 + i * 0.05,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        }),
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.05)_0%,transparent_50%)]">
            {/* Background Blobs */}
            <div className="blob -top-20 -left-20 animate-pulse-slow opacity-10" />
            <div className="blob top-1/2 -right-20 animate-float opacity-10" style={{ animationDelay: "2s" }} />

            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h2 className="text-accent-cyan font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase opacity-80 px-4">
                            Engineering Digital Experiences
                        </h2>
                        <h1 className="text-5xl xs:text-6xl md:text-9xl font-black tracking-tighter flex flex-wrap justify-center overflow-hidden py-2 px-4">
                            {"Adil Ali".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    custom={index}
                                    variants={titleLetterVariants}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="h-8 md:h-16 flex items-center justify-center px-4">
                            <span className="text-xl md:text-4xl font-light text-foreground/60 italic">
                                {roleText}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="inline-block w-[2px] md:w-[3px] h-[0.8em] bg-accent-cyan ml-1 align-middle"
                                />
                            </span>
                        </div>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mx-auto text-base md:text-xl text-foreground/70 leading-relaxed font-light px-6"
                    >
                        Building <span className="text-white font-medium">scalable SaaS</span>,
                        <span className="text-white font-medium"> AI-powered platforms</span>, and
                        <span className="text-white font-medium"> real-time applications</span>.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6">
                        <Magnetic>
                            <Link href="#projects" className="w-full sm:w-auto px-10 py-5 bg-accent-cyan text-black font-bold rounded-full hover:glow-cyan transition-all flex items-center justify-center gap-3 group relative overflow-hidden active:scale-95">
                                <span className="relative z-10">View Projects</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                        </Magnetic>

                        <Magnetic>
                            <a
                                href="/resume.pdf"
                                download
                                className="w-full sm:w-auto px-10 py-5 glass text-white font-medium rounded-full cursor-pointer hover:border-accent-purple/50 hover:bg-white/5 hover:glow-purple transition-all flex items-center justify-center gap-3 group active:scale-95"
                            >
                                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                                Download CV
                            </a>
                        </Magnetic>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        variants={itemVariants}
                        className="pt-12 flex flex-wrap justify-center items-start gap-x-12 md:gap-x-20 gap-y-10 max-w-7xl mx-auto px-6"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2 group cursor-default min-w-max">
                                <motion.div
                                    whileHover={{ scale: 1.05, color: "var(--accent-cyan)" }}
                                    className="text-2xl sm:text-3xl md:text-5xl font-black gradient-text leading-none whitespace-nowrap"
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-foreground/40 font-bold group-hover:text-foreground/60 transition-all duration-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={20} className="text-accent-cyan/50" />
                </motion.div>
            </motion.div>
        </section>
    );
};
