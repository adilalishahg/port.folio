"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "BizAI",
        description: "AI-powered content and media automation platform featuring AI content generation and SaaS dashboard.",
        tech: ["Next.js", "Node.js", "MongoDB", "AI APIs"],
        details: "Built a comprehensive AI content generation engine. Integrated complex media automation workflows. Developed a high-performance SaaS dashboard with real-time analytics.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 2,
        title: "Noru",
        description: "An Uber-like platform with real-time tracking and comprehensive role management.",
        tech: ["MERN", "Socket.io", "Google Maps"],
        details: "Implemented real-time vehicle tracking using Socket.io. Built a secure RBAC system for drivers, riders, and admins. integrated live status updates and payment flows.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 3,
        title: "Risk Management System",
        description: "Enterprise-grade dashboard for risk assessment with live data updates and reporting.",
        tech: ["React", "Node", "Charts.js"],
        details: "Developed interactive risk analysis charts. Implemented live data synchronization for enterprise scale. Built automated reporting and analytics export features.",
        githubLink: "https://github.com/adilalishahg",
        liveLink: "#"
    },
    {
        id: 4,
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
