"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { ProjectMarquee } from "./ProjectMarquee";

const projects = [
    {
        id: 1,
        title: "Daily Block",
        description: "Full-scale ICO project platform with automated crawling and real-time listing API.",
        tech: ["Next.js", "TanStack Query", "Zustand", "Axios", "Tailwind CSS", "Node.js"],
        details: "Built a comprehensive platform to list ICO projects using a custom crawler. Integrated real-time data fetching with TanStack Query and managed complex global state with Zustand. Developed a robust backend for scheduled crawling and data aggregation.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 2,
        title: "Networking App",
        description: "Professional networking platform with secure authentication and real-time social features.",
        tech: ["Next.js", "Node.js", "SQL", "TanStack Query", "Zustand", "Axios", "Tailwind CSS"],
        details: "Developed a secure professional networking application. Implemented complex SQL relationships for user interactions. Built a performant frontend with Next.js and centralized state management.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 3,
        title: "StickerVerse",
        description: "Web3 stickers platform integrated with TON wallet and automated mining features.",
        tech: ["Next.js", "Ant Design", "TON Wallet", "Mining API", "Axios", "Tailwind CSS", "Zustand"],
        details: "Built a unique Web3 platform for digital stickers. integrated TON wallet for secure transactions. Developed automated mining logic and a sleek UI using Ant Design.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 4,
        title: "BiziAdmin",
        description: "Comprehensive administration dashboard featuring real-time monitoring and scalable state management.",
        tech: ["React", "Socket.io", "Redux", "Axios", "Tailwind CSS", "TypeScript"],
        details: "Built a high-performance admin portal for enterprise operations. Implemented real-time data streaming with Socket.io. Leveraged Redux for complex state orchestration across distributed modules.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 5,
        title: "Property Management",
        description: "Modern real estate platform with seamless property listing and client management workflows.",
        tech: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "Shadcn UI", "Tailwind CSS", "Framer Motion"],
        details: "Developed a premium property management SaaS. Integrated advanced search and filtering with TanStack Query. Created a fluid, accessible UI using Shadcn and Framer Motion animations.",
        githubLink: "https://github.com/adilalishahg",
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
        githubLink: "https://github.com/adilalishahg",
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

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-accent-cyan font-mono text-sm tracking-widest uppercase">My Work</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Featured Projects</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full mx-auto" />
                </div>

                <ProjectMarquee />

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="glass-card group p-8 rounded-3xl cursor-pointer hover:border-accent-cyan/30 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-2xl font-bold group-hover:text-accent-cyan transition-colors">{project.title}</h4>
                                    <ExternalLink size={20} className="text-foreground/40 group-hover:text-accent-cyan transition-all" />
                                </div>
                                <p className="text-foreground/70 leading-relaxed italic">{project.description}</p>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-mono text-foreground/40 border border-white/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative glass-card w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="p-8 space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-3xl font-bold gradient-text">{selectedProject.title}</h3>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-lg text-foreground/90 leading-relaxed font-light">
                                        {selectedProject.details}
                                    </p>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-4 bg-accent-cyan text-black font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-4 glass text-white font-medium rounded-xl hover:border-white/20 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Github size={18} />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
