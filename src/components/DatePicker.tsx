'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DatePicker.css';

interface DatePickerProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  min?: string;
  required?: boolean;
  disabled?: boolean;
  'aria-required'?: string;
  'aria-invalid'?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  id,
  name,
  value,
  onChange,
  min,
  required,
  disabled,
  'aria-required': ariaRequired,
  'aria-invalid': ariaInvalid,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const minDate = min ? new Date(min) : new Date();
  minDate.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (value) {
      setSelectedDate(new Date(value));
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDisplayDate = (date: Date | null): string => {
    if (!date) return '';
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month} / ${day} / ${year}`;
  };

  const handleDateSelect = (date: Date) => {
    if (date < minDate) return;
    setSelectedDate(date);
    onChange(formatDate(date));
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (today >= minDate) {
      handleDateSelect(today);
    }
  };

  const handleClear = () => {
    setSelectedDate(null);
    onChange('');
    setIsOpen(false);
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const isDateDisabled = (date: Date): boolean => {
    return date < minDate;
  };

  const isDateSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div ref={containerRef} className="custom-date-picker">
      <input
        type="hidden"
        id={id}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        aria-required={ariaRequired}
        aria-invalid={ariaInvalid}
      />
      <div
        className={`date-picker-input ${isOpen ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className={selectedDate ? 'date-value' : 'date-placeholder'}>
          {selectedDate ? formatDisplayDate(selectedDate) : 'mm / dd / yyyy'}
        </span>
        <svg
          className="calendar-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="date-picker-calendar"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="calendar-header">
              <button
                type="button"
                className="calendar-nav-button"
                onClick={handlePrevMonth}
                aria-label="Previous month"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="calendar-month-year">
                <span className="calendar-month">{monthNames[currentMonth.getMonth()]}</span>
                <span className="calendar-year">{currentMonth.getFullYear()}</span>
              </div>
              <button
                type="button"
                className="calendar-nav-button"
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div className="calendar-weekdays">
              {dayNames.map((day) => (
                <div key={day} className="calendar-weekday">
                  {day}
                </div>
              ))}
            </div>

            <div className="calendar-days">
              {days.map((date, index) => {
                if (!date) {
                  return <div key={`empty-${index}`} className="calendar-day empty" />;
                }

                const disabled = isDateDisabled(date);
                const selected = isDateSelected(date);
                const today = isToday(date);

                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    className={`calendar-day ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''} ${today ? 'today' : ''}`}
                    onClick={() => !disabled && handleDateSelect(date)}
                    disabled={disabled}
                    aria-label={`Select ${formatDisplayDate(date)}`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="calendar-footer">
              <button type="button" className="calendar-action-button" onClick={handleClear}>
                Clear
              </button>
              <button
                type="button"
                className="calendar-action-button"
                onClick={handleToday}
                disabled={new Date() < minDate}
              >
                Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatePicker;

