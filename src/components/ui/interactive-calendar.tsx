"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { clsx } from "clsx";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type DayOgject = {
  day: number;
  isCurrentMonth: boolean;
  isPrevMonth: boolean;
};
export function InteractiveCalendar({
  selectedDate,
  setSelectedDate,
  setBookedDate,
  bookedDate,
}: {
  selectedDate: number;
  setSelectedDate: Dispatch<SetStateAction<number>>;
  setBookedDate: Dispatch<SetStateAction<string>>;
  bookedDate: string;
}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const days: DayOgject[] = [];

  // check if a date is in the past
  const isDateInPast = (day: number) => {
    const today = new Date();
    const selectedDateObj = new Date(year, month, day);
    today.setHours(0, 0, 0, 0);
    selectedDateObj.setHours(0, 0, 0, 0);
    return selectedDateObj < today;
  };

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isPrevMonth: true,
    });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      isCurrentMonth: true,
      isPrevMonth: false,
    });
  }

  // Next month days to fill the grid
  const remainingSlots = 42 - days.length;
  for (let day = 1; day <= remainingSlots; day++) {
    days.push({
      day,
      isCurrentMonth: false,
      isPrevMonth: false,
    });
  }

  useEffect(() => {
    if (year && month && selectedDate) {
      setBookedDate(`${months[month]} ${selectedDate}, ${year}`);
    }
  }, [selectedDate, month, year]);

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(month - 1);
    } else {
      newDate.setMonth(month + 1);
    }
    setCurrentDate(newDate);
    setSelectedDate(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="calendar-interactive max-w-sm mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-5 h-5 text-gradient-start" />
          <h3 className="font-heading font-semibold text-lg">
            <GradientText>Interactive</GradientText> Calendar
          </h3>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth("prev")}
          disabled={month === new Date().getMonth() && year === new Date().getFullYear()}
          className="h-8 w-8 hover:bg-surface-3"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <h4 className="font-heading font-medium text-ink-1">
          {months[month]} {year}
        </h4>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth("next")}
          className="h-8 w-8 hover:bg-surface-3"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-xs font-body font-medium text-ink-3 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((dayObj, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              dayObj.isCurrentMonth && !isDateInPast(dayObj.day) && setSelectedDate(dayObj.day)
            }
            className={clsx(
              "aspect-square flex items-center justify-center text-sm font-body font-medium rounded-lg transition-all duration-200",
              {
                // Past dates (disabled)
                "text-ink-3 cursor-not-allowed opacity-50":
                  dayObj.isCurrentMonth && isDateInPast(dayObj.day),
                // Selected date
                "bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-md":
                  dayObj.isCurrentMonth && selectedDate === dayObj.day,
                // Available dates
                "hover:bg-surface-3 text-ink-1":
                  dayObj.isCurrentMonth && !isDateInPast(dayObj.day) && selectedDate !== dayObj.day,
                // Other month dates
                "text-ink-3 cursor-default": !dayObj.isCurrentMonth,
              }
            )}
          >
            {dayObj.day}
          </motion.button>
        ))}
      </div>

      {/* Selected Date Info */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-surface-3 rounded-lg border border-line"
        >
          <p className="text-sm font-body text-ink-2 text-center">
            Selected: <span className="font-medium text-gradient-primary">{bookedDate}</span>
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
