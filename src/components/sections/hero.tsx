"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChartBar } from "lucide-react";

import { GradientText } from "@/components/ui/gradient-text";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { AnimatedOrbits } from "@/components/ui/animated-orbits";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="hero-glow" />

      {/* Animated Orbits */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedOrbits />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-surface-2/50 backdrop-blur-sm border border-line rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end animate-pulse" />
            <span className="text-ink-2 font-body text-sm font-medium">
              AI-Powered Dental Practice Management
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            The Future of <GradientText>Dental AI</GradientText>
            <br />
            is Here
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-ink-2 font-body mb-8 max-w-3xl mx-auto"
          >
            Revolutionize your dental practice with unlimited on-device AI inference, automated
            patient management, and intelligent clinical insights.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link to="/booking">
              <Button className="btn-gradient-primary group text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-ink-2"
          >
            <div className="flex items-center space-x-2">
              <GradientIcon size={16}>
                <Calendar />
              </GradientIcon>
              <span className="font-body text-sm">AI Scheduling</span>
            </div>
            <div className="flex items-center space-x-2">
              <GradientIcon size={16}>
                <ChartBar />
              </GradientIcon>
              <span className="font-body text-sm">Smart Analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
              <span className="font-body text-sm">HIPAA Compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-line rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-gradient-start to-gradient-end rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
