"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
      >
        Building Scalable Software
      </motion.h1>

      <p className="mt-6 max-w-xl text-white/70 text-lg">
        AI systems, Web3 infrastructure, SaaS platforms, and enterprise-grade
        development.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/apps"
          className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:opacity-90 transition"
        >
          View Apps
        </a>
        <a
          href="/contactus"
          className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
}