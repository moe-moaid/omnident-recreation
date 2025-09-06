"use client";

import { motion } from "framer-motion";
import { Brain, Calendar, Shield, BarChart3, MessageSquare, Zap, Clock } from "lucide-react";

import { GradientText } from "@/components/ui/gradient-text";
import { GradientIcon } from "@/components/ui/gradient-icon";

const features = [
  {
    icon: Brain,
    title: "AI Clinical Assistant",
    description:
      "Advanced AI analyzes patient data and provides intelligent treatment recommendations with 99.7% accuracy.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Automated appointment optimization reduces no-shows by 45% and maximizes practice efficiency.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant Security",
    description:
      "Bank-level encryption with on-device processing ensures complete patient data privacy and security.",
  },
  {
    icon: BarChart3,
    title: "Practice Analytics",
    description:
      "Real-time insights and predictive analytics help grow your practice revenue by an average of 28%.",
  },
  {
    icon: MessageSquare,
    title: "Patient Communication",
    description:
      "Automated reminders and follow-ups improve patient engagement and treatment completion rates.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description:
      "On-device AI provides real-time analysis without internet dependency or cloud delays.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-surface-2/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-surface/50 backdrop-blur-sm border border-line rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-gradient-start" />
            <span className="text-ink-2 font-body text-sm font-medium">
              Next-Generation Features
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Powerful <GradientText>AI Tools</GradientText> for
            <br />
            Modern Dental Practices
          </h2>

          <p className="text-xl text-ink-2 font-body max-w-3xl mx-auto">
            Experience the future of dental practice management with our comprehensive AI-powered
            platform designed specifically for healthcare professionals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map(feature => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group card-snake p-8"
            >
              <div className="mb-6">
                <GradientIcon size={48} className="mb-4">
                  <feature.icon />
                </GradientIcon>
                <h3 className="text-xl font-heading font-semibold text-ink-1 mb-3">
                  {feature.title}
                </h3>
                <p className="text-ink-2 font-body leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-heading font-bold text-gradient-primary">500+</div>
            <div className="text-ink-2 font-body">Dental Practices</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-heading font-bold text-gradient-primary">99.7%</div>
            <div className="text-ink-2 font-body">AI Accuracy Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-heading font-bold text-gradient-primary">28%</div>
            <div className="text-ink-2 font-body">Revenue Increase</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
