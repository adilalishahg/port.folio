"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <h2 className="text-accent-cyan font-mono text-sm tracking-widest uppercase">
                                Behind the Code
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold">About Me</h3>
                        </div>
                        <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />

                        <p className="text-lg text-foreground/70 leading-relaxed">
                            I am a full-stack developer specializing in <span className="text-white font-medium">Next.js, React, and scalable backend systems</span>.
                        </p>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            I build SaaS platforms, AI-integrated tools, real-time applications, and enterprise dashboards with strong focus on performance, clean architecture, and user experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative glass-card aspect-square rounded-2xl flex items-center justify-center overflow-hidden group">
                            <Image
                                src="/adil.webp"
                                alt="Adil Ali Profile"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-100 group-hover:scale-100 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 to-accent-purple/10" />
                            <div className="absolute bottom-8 left-8 right-8 z-10">
                                <div className="h-0.5 w-full bg-white/10" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
