"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowRight } from "lucide-react";
import { ProjectMarquee } from "./ProjectMarquee";

const projects = [
    {
        id: 1,
        title: "Daily Block",
        description: "Full-scale ICO project platform with automated crawling and real-time listing API.",
        tech: ["Next.js", "TanStack Query", "Zustand", "Axios", "Tailwind CSS", "Node.js"],
        details: "Built a comprehensive platform to list ICO projects using a custom crawler. Integrated real-time data fetching with TanStack Query and managed complex global state with Zustand. Developed a robust backend for scheduled crawling and data aggregation.",
        githubLink: "https://github.com/VIZZ-WEB-SOLUTIONS/dailyblock",
        liveLink: "#"
    },
    {
        id: 2,
        title: "Networking App",
        description: "Professional networking platform with secure authentication and real-time social features.",
        tech: ["Next.js", "Node.js", "SQL", "TanStack Query", "Zustand", "Axios", "Tailwind CSS"],
        details: "Developed a secure professional networking application. Implemented complex SQL relationships for user interactions. Built a performant frontend with Next.js and centralized state management.",
        githubLink: "https://github.com/VIZZ-WEB-SOLUTIONS/networking_app",
        liveLink: "#"
    },
    {
        id: 3,
        title: "StickerVerse",
        description: "Web3 stickers platform integrated with TON wallet and automated mining features.",
        tech: ["Next.js", "Ant Design", "TON Wallet", "Mining API", "Axios", "Tailwind CSS", "Zustand"],
        details: "Built a unique Web3 platform for digital stickers. integrated TON wallet for secure transactions. Developed automated mining logic and a sleek UI using Ant Design.",
        githubLink: "https://github.com/vizzDev4/telegram-sticker",
        liveLink: "#"
    },
    {
        id: 4,
        title: "BiziAdmin",
        description: "Comprehensive administration dashboard featuring real-time monitoring and scalable state management.",
        tech: ["React", "Socket.io", "Redux", "Axios", "Tailwind CSS", "TypeScript"],
        details: "Built a high-performance admin portal for enterprise operations. Implemented real-time data streaming with Socket.io. Leveraged Redux for complex state orchestration across distributed modules.",
        githubLink: "https://github.com/vizzDev4/bizz-ai-admin",
        liveLink: "#"
    },
    {
        id: 5,
        title: "Property Management",
        description: "Modern real estate platform with seamless property listing and client management workflows.",
        tech: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "Shadcn UI", "Tailwind CSS", "Framer Motion"],
        details: "Developed a premium property management SaaS. Integrated advanced search and filtering with TanStack Query. Created a fluid, accessible UI using Shadcn and Framer Motion animations.",
        githubLink: "https://github.com/vizzdev/prospace_property_app_frontend.git",
        liveLink: "#"
    },
    {
        id: 6,
        title: "NEMT Platform",
        description: "Non-Emergency Medical Transportation system with real-time dispatch and trip tracking.",
        tech: ["Next.js", "Node.js", "Socket.io", "Zustand", "TanStack Query", "MUI", "Axios"],
        details: "Built an end-to-end transportation management system. Implemented live vehicle tracking and automated dispatch algorithms. Leveraged MUI for a professional, responsive enterprise interface.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 7,
        title: "MDS Boat SaaS",
        description: "Enterprise-grade SaaS app for boat inventory management and sales analytics.",
        tech: ["React", "Node.js", "MySQL", "Zustand", "TanStack Query", "Ant Design", "Axios", "Tailwind CSS"],
        details: "Developed a robust boat dealership management suite. Integrated a performant MySQL backend for large-scale inventory tracking. Built complex reporting dashboards using Ant Design and custom charts.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 8,
        title: "BizAI",
        description: "AI-powered content and media automation platform featuring AI content generation and SaaS dashboard.",
        tech: ["Next.js", "Node.js", "MongoDB", "AI APIs"],
        details: "Built a comprehensive AI content generation engine. Integrated complex media automation workflows. Developed a high-performance SaaS dashboard with real-time analytics.",
        githubLink: "https://github.com/vizzDev4/bizz-ai",
        liveLink: "#"
    },
    {
        id: 9,
        title: "Noru",
        description: "An Uber-like platform with real-time tracking and comprehensive role management.",
        tech: ["MERN", "Socket.io", "Google Maps"],
        details: "Implemented real-time vehicle tracking using Socket.io. Built a secure RBAC system for drivers, riders, and admins. integrated live status updates and payment flows.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 10,
        title: "Risk Management System",
        description: "Enterprise-grade dashboard for risk assessment with live data updates and reporting.",
        tech: ["React", "Node", "Charts.js"],
        details: "Developed interactive risk analysis charts. Implemented live data synchronization for enterprise scale. Built automated reporting and analytics export features.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 11,
        title: "Sponsor Platform",
        description: "A platform connecting sponsors and creators with integrated payment processing.",
        tech: ["MERN", "Stripe", "Express"],
        details: "Integrated Stripe Connect for seamless payments. Built user-friendly dashboards for both sponsors and creators. Implemented secure messaging and contract management.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    }
];

import { TiltCard } from "./TiltCard";

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-cyan font-mono text-xs md:text-sm tracking-[0.3em] uppercase"
                    >
                        Portfolio
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black"
                    >
                        Selected <span className="gradient-text">Works</span>
                    </motion.h3>
                </div>

                <ProjectMarquee />

                <div className="grid md:grid-cols-2 gap-10 mt-16">
                    {projects.map((project, idx) => (
                        <TiltCard key={project.id} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileTap={{ scale: 0.98 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                onClick={() => setSelectedProject(project)}
                                className="glass-card group p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] cursor-pointer hover:border-accent-cyan/40 flex flex-col justify-between h-full relative overflow-hidden"
                            >
                                {/* Hover background effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="space-y-4 md:space-y-6 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-mono text-accent-cyan/60 tracking-widest uppercase">Project {idx + 1}</span>
                                            <h4 className="text-2xl md:text-3xl font-bold group-hover:text-accent-cyan transition-colors leading-tight">{project.title}</h4>
                                        </div>
                                        <div className="p-2.5 md:p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/10 transition-all duration-300">
                                            <ExternalLink size={20} className="text-foreground/40 group-hover:text-accent-cyan group-hover:scale-110 transition-all" />
                                        </div>
                                    </div>

                                    <p className="text-foreground/60 leading-relaxed text-base md:text-lg line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="text-[10px] md:text-[11px] font-mono font-medium text-foreground/50 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full group-hover:border-white/10 group-hover:text-foreground/70 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-[10px] md:text-[11px] font-mono font-medium text-foreground/30 px-2 py-1.5">
                                                +{project.tech.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/20 group-hover:text-accent-cyan/40 transition-colors">View Details</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <ArrowRight size={18} className="text-accent-cyan" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative glass-card w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            <div className="p-6 md:p-10 space-y-6 overflow-y-auto hide-scrollbar">
                                <div className="flex justify-between items-center sticky top-0 bg-transparent py-2 z-10">
                                    <h3 className="text-2xl md:text-4xl font-black gradient-text">{selectedProject.title}</h3>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="text-[10px] md:text-xs font-mono font-bold text-accent-cyan bg-accent-cyan/10 px-4 py-2 rounded-full uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.2em]">Project Narrative</div>
                                        <p className="text-base md:text-xl text-foreground/70 leading-relaxed font-light">
                                            {selectedProject.details}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/5">
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-4 md:py-5 bg-accent-cyan text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:glow-cyan transition-all flex items-center justify-center gap-3 active:scale-95"
                                    >
                                        <Github size={18} />
                                        Source Code
                                    </a>
                                    {/* Added a secondary action for visual balance */}
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="flex-1 py-4 md:py-5 glass text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-3 active:scale-95"
                                    >
                                        Close View
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
