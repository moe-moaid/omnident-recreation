"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { InteractiveCalendar } from "@/components/ui/interactive-calendar";

type Step = 1 | 2 | 3 | 4 | 5;

const steps = [
  { id: 1, title: "Select Clinic", icon: MapPin },
  { id: 2, title: "Choose Service", icon: Calendar },
  { id: 3, title: "Pick Date", icon: Calendar },
  { id: 4, title: "Select Time", icon: Clock },
  { id: 5, title: "Confirmation", icon: CheckCircle },
];

const clinics = [
  {
    id: 1,
    name: "Downtown Dental Center",
    address: "123 Main St, San Francisco, CA",
    rating: 4.9,
    distance: "0.5 mi",
  },
  {
    id: 2,
    name: "Smile Studio Plus",
    address: "456 Oak Ave, San Francisco, CA",
    rating: 4.8,
    distance: "1.2 mi",
  },
  {
    id: 3,
    name: "Modern Dental Care",
    address: "789 Pine St, San Francisco, CA",
    rating: 4.9,
    distance: "2.1 mi",
  },
];

const services = [
  { id: 1, name: "General Cleaning", duration: "45 min", price: "$120" },
  { id: 2, name: "Dental Filling", duration: "60 min", price: "$250" },
  { id: 3, name: "Root Canal", duration: "90 min", price: "$800" },
  { id: 4, name: "Teeth Whitening", duration: "30 min", price: "$300" },
  { id: 5, name: "Consultation", duration: "30 min", price: "$80" },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedClinic, setSelectedClinic] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedDate, setBookedDate] = useState<string>("");

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedClinic !== null;
      case 2:
        return selectedService !== null;
      case 3:
        return selectedDate !== null;
      case 4:
        return selectedTime !== null;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (canProceed() && currentStep < 5) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Book Your <GradientText>Appointment</GradientText>
          </h1>
          <p className="text-xl text-ink-2 max-w-2xl mx-auto">
            Experience our streamlined booking process with AI-powered scheduling optimization.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-line z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-gradient-start to-gradient-end"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            {/* Step Indicators */}
            {steps.map(step => (
              <div key={step.id} className="flex flex-col items-center relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-all duration-300 ${
                    currentStep >= step.id
                      ? "bg-gradient-to-r from-gradient-start to-gradient-end border-transparent text-white"
                      : "bg-surface border-line text-ink-3"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* <GradientIcon size={20} className={currentStep >= step.id ? 'text-white' : 'text-ink-3'}> */}
                  <step.icon />
                  {/* </GradientIcon> */}
                </motion.div>
                <span
                  className={`text-sm font-medium text-center ${
                    currentStep >= step.id ? "text-ink-1" : "text-ink-3"
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Select Clinic */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-heading font-semibold text-center mb-8">
                  Choose Your Preferred Clinic
                </h2>

                <div className="grid gap-4">
                  {clinics.map(clinic => (
                    <motion.button
                      key={clinic.id}
                      onClick={() => setSelectedClinic(clinic.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedClinic === clinic.id
                          ? "border-gradient-start bg-surface-2 shadow-lg"
                          : "border-line hover:border-gradient-start/50"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-heading font-semibold text-ink-1 mb-2">
                            {clinic.name}
                          </h3>
                          <p className="text-ink-2 text-sm mb-2">{clinic.address}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center text-warning">
                              ⭐ {clinic.rating}
                            </span>
                            <span className="text-ink-3">{clinic.distance}</span>
                          </div>
                        </div>
                        {selectedClinic === clinic.id && (
                          <CheckCircle className="w-6 h-6 text-gradient-start" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Choose Service */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-heading font-semibold text-center mb-8">
                  Select Your Service
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {services.map(service => (
                    <motion.button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedService === service.id
                          ? "border-gradient-start bg-surface-2 shadow-lg"
                          : "border-line hover:border-gradient-start/50"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-heading font-semibold text-ink-1 mb-2">
                            {service.name}
                          </h3>
                          <p className="text-ink-2 text-sm">{service.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-gradient-primary font-semibold">{service.price}</div>
                          {selectedService === service.id && (
                            <CheckCircle className="w-5 h-5 text-gradient-start mt-1" />
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Pick Date */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-heading font-semibold text-center mb-8">
                  Choose Your Appointment Date
                </h2>

                <div className="flex justify-center">
                  <InteractiveCalendar
                    setSelectedDate={setSelectedDate}
                    selectedDate={selectedDate}
                    setBookedDate={setBookedDate}
                    bookedDate={bookedDate}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Select Time */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-heading font-semibold text-center mb-8">
                  Select Available Time
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {timeSlots.map(time => (
                    <motion.button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-lg border-2 font-medium transition-all duration-300 ${
                        selectedTime === time
                          ? "border-gradient-start bg-gradient-to-r from-gradient-start to-gradient-end text-white"
                          : "border-line hover:border-gradient-start/50 text-ink-1"
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-8"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-gradient-start to-gradient-end flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-heading font-bold">
                  <GradientText>Appointment Confirmed!</GradientText>
                </h2>

                <div className="max-w-md mx-auto bg-surface-2 rounded-xl p-6 border border-line">
                  <h3 className="font-heading font-semibold text-ink-1 mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-ink-2">Clinic:</span>
                      <span className="text-ink-1 font-medium">
                        {clinics.find(c => c.id === selectedClinic)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-2">Service:</span>
                      <span className="text-ink-1 font-medium">
                        {services.find(s => s.id === selectedService)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-2">Date:</span>
                      <span className="text-ink-1 font-medium">{bookedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-2">Time:</span>
                      <span className="text-ink-1 font-medium">{selectedTime}</span>
                    </div>
                  </div>
                </div>

                <p className="text-ink-2">
                  A confirmation email has been sent to your inbox with all the details.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-between mt-12"
          >
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="border-2 border-gradient-start bg-transparent text-ink-1 hover:bg-gradient-start hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep < 5 ? (
              <Button onClick={nextStep} disabled={!canProceed()} className="btn-gradient-primary">
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button className="btn-gradient-primary">Book Another Appointment</Button>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
