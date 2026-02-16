"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
                    isScrolled ? "py-4" : "py-8"
                )}
            >
                <div
                    className={cn(
                        "max-w-5xl mx-auto flex items-center justify-between transition-all duration-500 px-8 py-4 rounded-full border",
                        isScrolled
                            ? "bg-[#020202]/70 backdrop-blur-md border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                            : "bg-transparent border-transparent"
                    )}
                >
                    <Link href="/" className="text-2xl font-black tracking-tighter group" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="gradient-text group-hover:opacity-80 transition-opacity">ADIL.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-foreground/50 hover:text-accent-cyan transition-all rounded-full hover:bg-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="w-px h-4 bg-white/10 mx-4" />
                        <div className="flex items-center space-x-3">
                            <a href="https://github.com/adilalishahg" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/40 hover:text-accent-cyan transition-all hover:scale-110">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/syed-adilalishahg" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/40 hover:text-accent-cyan transition-all hover:scale-110">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground hover:text-accent-cyan transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 bg-[#020202] z-[100] md:hidden flex flex-col justify-between p-12 overflow-y-auto"
                    >
                        {/* Header inside overlay for visual continuity */}
                        <div className="flex justify-between items-center w-full">
                            <span className="text-xl font-bold tracking-tighter gradient-text">ADIL.</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white hover:text-accent-cyan transition-colors"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-8 items-start py-20">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-4xl xs:text-5xl font-black uppercase tracking-tighter text-foreground/90 hover:text-accent-cyan transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-10 flex flex-col gap-6">
                            <div className="text-sm font-mono text-white/40 uppercase tracking-widest">Connect</div>
                            <div className="flex items-center space-x-8">
                                <a href="https://github.com/adilalishahg" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                                    <Github size={28} />
                                </a>
                                <a href="https://www.linkedin.com/in/syed-adilalishahg" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                                    <Linkedin size={28} />
                                </a>
                                <a href="mailto:adilalishahg@gmail.com" className="hover:text-accent-cyan transition-colors">
                                    <Mail size={28} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
