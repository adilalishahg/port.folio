"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MessageSquare } from "lucide-react";

import { Magnetic } from "./Magnetic";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("idle");
            }
        } catch (error) {
            console.error(error);
            setStatus("idle");
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-accent-cyan font-mono text-xs md:text-sm tracking-[0.3em] uppercase opacity-80"
                            >
                                Get in Touch
                            </motion.h2>
                            <h3 className="text-5xl md:text-7xl font-black leading-tight">
                                Let&apos;s Build <span className="gradient-text">Digital Futures</span>
                            </h3>
                            <p className="text-xl text-foreground/50 leading-relaxed font-light max-w-md">
                                Have a vision? Let&apos;s transform it into high-performance reality.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <motion.a
                                href="mailto:adilalishahg@gmail.com"
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-16 h-16 rounded-[2rem] glass-card flex items-center justify-center group-hover:border-accent-cyan/50 transition-all duration-300">
                                    <Mail className="text-accent-cyan" size={28} />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-mono font-bold text-foreground/30 uppercase tracking-[0.2em]">Primary Contact</div>
                                    <div className="text-2xl font-black group-hover:text-accent-cyan transition-colors italic">ADILALISHAHG <span className="text-white/20">@GMAIL.COM</span></div>
                                </div>
                            </motion.a>

                            <div className="flex items-center gap-12 pt-4">
                                <a href="https://github.com/adilalishahg" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-white transition-all hover:scale-125"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/syed-adilalishahg" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-white transition-all hover:scale-125"><Linkedin size={24} /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="glass-card p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="space-y-3">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-foreground/30 px-2">Project Visionary</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 focus:border-accent-cyan/20 focus:bg-white/10 transition-all text-white placeholder:text-white/10"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-foreground/30 px-2">Digital Address</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 focus:border-accent-cyan/20 focus:bg-white/10 transition-all text-white placeholder:text-white/10"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-foreground/30 px-2">Mission Details</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 focus:border-accent-cyan/20 focus:bg-white/10 transition-all text-white placeholder:text-white/10 resize-none"
                                    placeholder="Briefly describe your project..."
                                />
                            </div>

                            <Magnetic>
                                <button
                                    type="submit"
                                    disabled={status !== "idle"}
                                    className="w-full py-6 bg-accent-cyan text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:glow-cyan transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                                >
                                    {status === "idle" && (
                                        <>
                                            Initiate Transmission
                                            <Send size={16} />
                                        </>
                                    )}
                                    {status === "sending" && "Processing..."}
                                    {status === "success" && "Transmission Received"}
                                </button>
                            </Magnetic>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
