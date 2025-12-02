"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-teal-950 via-black to-teal-950" />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -120, 0], y: [0, 80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-700/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Efficient trade starts with
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-400">
              clear communication.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto font-light leading-relaxed">
            Reliable partners and transparent logistics — from Trabzon & Warsaw
            to the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="px-12 py-7 bg-teal-600 hover:bg-teal-500 text-white text-lg font-medium shadow-2xl">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-12 py-7 border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 text-lg font-medium">
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
