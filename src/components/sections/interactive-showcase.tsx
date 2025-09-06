"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { InteractiveCalendar } from "@/components/ui/interactive-calendar";
import { DashboardPreview } from "@/components/ui/dashboard-preview";

export function InteractiveShowcase() {
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [bookedDate, setBookedDate] = useState<string>("");
  return (
    <section id="calendar" className="py-24">
      <div className="container mx-auto px-4">
        {/* Calendar Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Try Our Interactive <span className="text-gradient-primary">Calendar</span>
            </h2>
            <p className="text-xl text-ink-2 font-body max-w-2xl mx-auto">
              Experience the smooth, responsive interface that your patients and staff will love.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <InteractiveCalendar
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
              bookedDate={bookedDate}
              setBookedDate={setBookedDate}
            />
          </div>
        </div>

        {/* Dashboard Section */}
        <DashboardPreview />
      </div>
    </section>
  );
}
