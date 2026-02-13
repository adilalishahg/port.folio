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
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                    isScrolled ? "bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="gradient-text">ADIL.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/70 hover:text-accent-cyan transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center space-x-4 ml-4 border-l border-white/10 pl-8">
                            <a href="https://github.com/adilalishahg" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/syed-adilalishahg" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground hover:text-accent-cyan z-[60] p-2"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#020202] z-[55] md:hidden flex flex-col items-center justify-center p-6"
                    >
                        <div className="flex flex-col space-y-10 text-center">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-black uppercase tracking-tighter text-foreground/90 hover:text-accent-cyan transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center justify-center space-x-10 pt-10 border-t border-white/10"
                            >
                                <a href="https://github.com/adilalishahg" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                                    <Github size={32} />
                                </a>
                                <a href="https://www.linkedin.com/in/syed-adilalishahg" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
                                    <Linkedin size={32} />
                                </a>
                                <a href="mailto:adilalishahg@gmail.com" className="hover:text-accent-cyan transition-colors">
                                    <Mail size={32} />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
