"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";
import { Activity, Users, Calendar, TrendingUp, Clock, CheckCircle } from "lucide-react";

import { GradientText } from "@/components/ui/gradient-text";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { Button } from "@/components/ui/button";

const appointmentData = [
  { name: "Mon", appointments: 12, revenue: 2400 },
  { name: "Tue", appointments: 8, revenue: 1800 },
  { name: "Wed", appointments: 15, revenue: 3200 },
  { name: "Thu", appointments: 10, revenue: 2200 },
  { name: "Fri", appointments: 18, revenue: 3800 },
  { name: "Sat", appointments: 6, revenue: 1400 },
];

const patientData = [
  { month: "Jan", newPatients: 45, returning: 120 },
  { month: "Feb", newPatients: 52, returning: 135 },
  { month: "Mar", newPatients: 48, returning: 142 },
  { month: "Apr", newPatients: 61, returning: 158 },
  { month: "May", newPatients: 55, returning: 165 },
  { month: "Jun", newPatients: 67, returning: 172 },
];

const metrics = [
  {
    icon: Users,
    label: "Total Patients",
    value: "1,247",
    change: "+12%",
    positive: true,
  },
  {
    icon: Calendar,
    label: "This Week",
    value: "89",
    change: "+8%",
    positive: true,
  },
  {
    icon: TrendingUp,
    label: "Revenue",
    value: "$24.5K",
    change: "+15%",
    positive: true,
  },
  {
    icon: Clock,
    label: "Avg Wait Time",
    value: "8 min",
    change: "-23%",
    positive: true,
  },
];

const recentAppointments = [
  {
    patient: "Sarah Johnson",
    time: "9:00 AM",
    type: "Cleaning",
    status: "completed",
  },
  {
    patient: "Mike Chen",
    time: "10:30 AM",
    type: "Filling",
    status: "in-progress",
  },
  {
    patient: "Emma Davis",
    time: "2:00 PM",
    type: "Consultation",
    status: "upcoming",
  },
];

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"analytics" | "appointments">("analytics");

  return (
    <section id="dashboard">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-surface/50 backdrop-blur-sm border border-line rounded-full px-4 py-2 mb-6">
            <Activity className="w-4 h-4 text-gradient-start" />
            <span className="text-ink-2 font-body text-sm font-medium">Live Dashboard Preview</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <GradientText>Smart Analytics</GradientText> Dashboard
          </h2>
          <p className="text-xl text-ink-2 font-body max-w-2xl mx-auto">
            Real-time insights and AI-powered recommendations to optimize your practice performance.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="dashboard-card">
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-8 p-1 bg-surface-2 rounded-lg">
            <Button
              variant={activeTab === "analytics" ? "default" : "ghost"}
              onClick={() => setActiveTab("analytics")}
              className={`flex-1 ${activeTab === "analytics" ? "btn-gradient-primary" : ""}`}
            >
              <BarChart className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button
              variant={activeTab === "appointments" ? "default" : "ghost"}
              onClick={() => setActiveTab("appointments")}
              className={`flex-1 ${activeTab === "appointments" ? "btn-gradient-primary" : ""}`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Appointments
            </Button>
          </div>

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-surface-2 rounded-xl p-4 border border-line"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <GradientIcon size={20}>
                        <metric.icon />
                      </GradientIcon>
                      <span
                        className={`text-xs font-medium ${
                          metric.positive ? "text-success" : "text-error"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>
                    <div className="text-2xl font-heading font-bold text-ink-1 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-ink-3 font-body">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Appointments Chart */}
                <div className="bg-surface-2 rounded-xl p-6 border border-line">
                  <h4 className="font-heading font-semibold text-ink-1 mb-4">
                    Weekly Appointments
                  </h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={appointmentData}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Bar
                          dataKey="appointments"
                          fill="url(#gradPrimary)"
                          radius={[4, 4, 0, 0]}
                        />
                        <defs>
                          <linearGradient id="gradPrimary" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--gradient-start))" />
                            <stop offset="100%" stopColor="hsl(var(--gradient-end))" />
                          </linearGradient>
                        </defs>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Patient Growth Chart */}
                <div className="bg-surface-2 rounded-xl p-6 border border-line">
                  <h4 className="font-heading font-semibold text-ink-1 mb-4">Patient Growth</h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={patientData}>
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Line
                          type="monotone"
                          dataKey="newPatients"
                          stroke="hsl(var(--gradient-start))"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line
                          type="monotone"
                          dataKey="returning"
                          stroke="hsl(var(--gradient-end))"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Appointments Tab */}
          {activeTab === "appointments" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h4 className="font-heading font-semibold text-ink-1 mb-4">Today's Schedule</h4>

              {recentAppointments.map((appointment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-surface-2 rounded-xl border border-line"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        appointment.status === "completed"
                          ? "bg-success"
                          : appointment.status === "in-progress"
                            ? "bg-warning"
                            : "bg-gradient-to-r from-gradient-start to-gradient-end"
                      }`}
                    />
                    <div>
                      <div className="font-body font-medium text-ink-1">{appointment.patient}</div>
                      <div className="text-sm text-ink-3">{appointment.type}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-body font-medium text-ink-2">{appointment.time}</div>
                    <div className="flex items-center text-xs text-ink-3">
                      {appointment.status === "completed" && (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1 text-success" />
                          Completed
                        </>
                      )}
                      {appointment.status === "in-progress" && (
                        <>
                          <Clock className="w-3 h-3 mr-1 text-warning" />
                          In Progress
                        </>
                      )}
                      {appointment.status === "upcoming" && (
                        <>
                          <Calendar className="w-3 h-3 mr-1 text-gradient-start" />
                          Upcoming
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
