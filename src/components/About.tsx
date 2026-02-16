"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { TiltCard } from "./TiltCard";

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-[radial-gradient(circle_at_20%_80%,rgba(0,245,255,0.05)_0%,transparent_50%)]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-7 space-y-10"
                    >
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-accent-cyan font-mono text-xs md:text-sm tracking-[0.3em] uppercase opacity-80"
                            >
                                Behind the Code
                            </motion.h2>
                            <h3 className="text-4xl md:text-7xl font-black leading-[1.1]">
                                Crafting High-Performance <span className="gradient-text">Digital Systems</span>
                            </h3>
                        </div>

                        <div className="space-y-6 text-lg md:text-xl text-foreground/60 leading-relaxed font-light">
                            <p>
                                I am a software engineer specializing in <span className="text-white font-medium">Next.js, React, and scalable backend architectures</span>.
                                My focus is on bridge the gap between complex logic and elegant user experiences.
                            </p>
                            <p>
                                From building <span className="text-white font-medium">high-performance SaaS platforms</span> to architecting <span className="text-white font-medium">AI-integrated real-time systems</span>,
                                I emphasize clean code, modular design, and measurable performance.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 pt-6">
                            <div className="space-y-1">
                                <div className="text-3xl font-black text-white">40+</div>
                                <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Projects Built</div>
                            </div>
                            <div className="w-px h-12 bg-white/5 hidden sm:block" />
                            <div className="space-y-1">
                                <div className="text-3xl font-black text-white">100%</div>
                                <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Quality Obsessed</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-5 relative group"
                    >
                        <TiltCard>
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-accent-cyan/30 transition-colors duration-500">
                                <Image
                                    src="/adil.webp"
                                    alt="Adil Ali Profile"
                                    fill
                                    className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                                {/* Floating Label */}
                                <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-3xl border border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="text-sm font-bold uppercase tracking-widest text-accent-cyan mb-1">Based in Pakistan</div>
                                    <div className="text-white/60 text-xs">Available for Worldwide Remote Opportunities</div>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-purple/10 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-cyan/10 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
