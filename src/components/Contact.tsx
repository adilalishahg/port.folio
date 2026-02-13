"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MessageSquare } from "lucide-react";

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
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            setStatus("idle");
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="blob -bottom-20 -right-20 opacity-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-accent-cyan font-mono text-sm tracking-widest uppercase">Get in Touch</h2>
                            <h3 className="text-4xl md:text-5xl font-bold">Let&apos;s Build Something Extraordinary</h3>
                            <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
                                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center group-hover:glow-cyan transition-all">
                                    <Mail className="text-accent-cyan" size={24} />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-sm font-mono text-foreground/40 uppercase tracking-widest">Email</div>
                                    <a href="mailto:adilalishahg@gmail.com" className="text-lg font-medium hover:text-accent-cyan transition-colors italic">
                                        adilalishahg@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center group-hover:glow-purple transition-all">
                                    <MessageSquare className="text-accent-purple" size={24} />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-sm font-mono text-foreground/40 uppercase tracking-widest">Socials</div>
                                    <div className="flex gap-4">
                                        <a href="https://github.com/adilalishahg" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors"><Github size={20} /></a>
                                        <a href="https://www.linkedin.com/in/syed-adilalishahg" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors"><Linkedin size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-foreground/40 px-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-foreground/40 px-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-foreground/40 px-1">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Your project vision..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-6 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:bg-white/10 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-accent-cyan hover:glow-cyan transition-all flex items-center justify-center gap-2 group"
                            >
                                {status === "idle" && (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                                {status === "sending" && "Processing..."}
                                {status === "success" && "Sent Successfully!"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
