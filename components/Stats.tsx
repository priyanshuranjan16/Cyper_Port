"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
    const stats = [
        { label: "INT", sub: "Problem Solving", value: 90, color: "bg-blue-500" },
        { label: "DEX", sub: "Coding Speed", value: 85, color: "bg-green-500" },
        { label: "WIS", sub: "System Design", value: 75, color: "bg-purple-500" },
        { label: "CHA", sub: "Communication", value: 80, color: "bg-yellow-500" },
    ];

    return (
        <section id="about" className="min-h-screen py-24 px-6 relative flex items-center">
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="inline-block px-3 py-1 border border-neon-green/30 rounded-full bg-neon-green/5 text-neon-green font-gaming text-xs tracking-widest mb-4">
                        ID: PLAYER_1
                    </div>
                    <h2 className="text-4xl md:text-6xl font-gaming text-white leading-tight">
                        CHARACTER <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">PROFILE</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 text-lg font-sans leading-relaxed border-l-2 border-gray-800 pl-6">
                        <p>
                            Final year B.Tech student equipping myself with the latest tech weaponry.
                            Specializing in building immersive web applications with modern frameworks.
                        </p>
                        <p>
                            My mission is to create digital experiences that feel like high-end games:
                            rich, interactive, and performant.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-gray-900/50 border border-gray-800 rounded">
                            <h4 className="text-xs font-gaming text-gray-500 mb-1">CURRENT RANK</h4>
                            <p className="text-electric-blue font-bold">Full Stack Dev</p>
                        </div>
                        <div className="p-4 bg-gray-900/50 border border-gray-800 rounded">
                            <h4 className="text-xs font-gaming text-gray-500 mb-1">SPECIAL ABILITY</h4>
                            <p className="text-hot-pink font-bold">Agentic AI</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Stats HUD */}
                <div className="relative">
                    {/* Decorative backing */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-neon-green/10 to-electric-blue/10 blur-2xl rounded-full opacity-20" />

                    <div className="relative bg-black/40 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl">
                        <h3 className="font-gaming text-xl text-white mb-8 flex justify-between items-center">
                            <span>STATS_MONITOR</span>
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        </h3>

                        <div className="space-y-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-end gap-2">
                                            <span className="font-gaming text-lg text-white">{stat.label}</span>
                                            <span className="text-xs text-gray-500 mb-1 font-sans">{stat.sub}</span>
                                        </div>
                                        <span className="font-mono text-neon-green">{stat.value}</span>
                                    </div>
                                    {/* Progress Bar Container */}
                                    <div className="h-2 w-full bg-gray-800 rounded-sm overflow-hidden relative">
                                        {/* Grid lines on background */}
                                        <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: "linear-gradient(90deg, transparent 98%, #000 100%)", backgroundSize: "10% 100%" }} />

                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.value}%` }}
                                            transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                                            className={`h-full ${stat.color} relative`}
                                        >
                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white box-shadow-[0_0_10px_white]" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
