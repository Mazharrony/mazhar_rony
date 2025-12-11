'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TimezonePicker.css';

interface TimezonePickerProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

// Common timezones with their display names and offsets
const timezones = [
  { value: 'UTC', label: 'UTC (Coordinated Universal Time)', offset: '+00:00' },
  { value: 'GMT', label: 'GMT (Greenwich Mean Time)', offset: '+00:00' },
  { value: 'EST', label: 'EST (Eastern Standard Time)', offset: '-05:00' },
  { value: 'EDT', label: 'EDT (Eastern Daylight Time)', offset: '-04:00' },
  { value: 'CST', label: 'CST (Central Standard Time)', offset: '-06:00' },
  { value: 'CDT', label: 'CDT (Central Daylight Time)', offset: '-05:00' },
  { value: 'MST', label: 'MST (Mountain Standard Time)', offset: '-07:00' },
  { value: 'MDT', label: 'MDT (Mountain Daylight Time)', offset: '-06:00' },
  { value: 'PST', label: 'PST (Pacific Standard Time)', offset: '-08:00' },
  { value: 'PDT', label: 'PDT (Pacific Daylight Time)', offset: '-07:00' },
  { value: 'GMT+1', label: 'GMT+1 (Central European Time)', offset: '+01:00' },
  { value: 'GMT+2', label: 'GMT+2 (Eastern European Time)', offset: '+02:00' },
  { value: 'GMT+3', label: 'GMT+3 (Moscow Time)', offset: '+03:00' },
  { value: 'GMT+4', label: 'GMT+4 (Gulf Standard Time)', offset: '+04:00' },
  { value: 'GMT+5', label: 'GMT+5 (Pakistan Standard Time)', offset: '+05:00' },
  { value: 'GMT+5:30', label: 'GMT+5:30 (India Standard Time)', offset: '+05:30' },
  { value: 'GMT+6', label: 'GMT+6 (Bangladesh Standard Time)', offset: '+06:00' },
  { value: 'GMT+7', label: 'GMT+7 (Indochina Time)', offset: '+07:00' },
  { value: 'GMT+8', label: 'GMT+8 (China Standard Time)', offset: '+08:00' },
  { value: 'GMT+9', label: 'GMT+9 (Japan Standard Time)', offset: '+09:00' },
  { value: 'GMT+10', label: 'GMT+10 (Australian Eastern Time)', offset: '+10:00' },
  { value: 'GMT+11', label: 'GMT+11 (Solomon Islands Time)', offset: '+11:00' },
  { value: 'GMT+12', label: 'GMT+12 (New Zealand Time)', offset: '+12:00' },
  { value: 'GMT-1', label: 'GMT-1 (Cape Verde Time)', offset: '-01:00' },
  { value: 'GMT-2', label: 'GMT-2 (Mid-Atlantic Time)', offset: '-02:00' },
  { value: 'GMT-3', label: 'GMT-3 (Argentina Time)', offset: '-03:00' },
  { value: 'GMT-4', label: 'GMT-4 (Venezuela Time)', offset: '-04:00' },
  { value: 'GMT-6', label: 'GMT-6 (Central Time)', offset: '-06:00' },
  { value: 'GMT-7', label: 'GMT-7 (Mountain Time)', offset: '-07:00' },
  { value: 'GMT-8', label: 'GMT-8 (Pacific Time)', offset: '-08:00' },
  { value: 'GMT-9', label: 'GMT-9 (Alaska Time)', offset: '-09:00' },
  { value: 'GMT-10', label: 'GMT-10 (Hawaii Time)', offset: '-10:00' },
  { value: 'GMT-11', label: 'GMT-11 (Samoa Time)', offset: '-11:00' },
  { value: 'GMT-12', label: 'GMT-12 (Baker Island Time)', offset: '-12:00' },
];

// Auto-detect user's timezone
const detectTimezone = (): string => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = -new Date().getTimezoneOffset() / 60;
    const offsetStr = offset >= 0 ? `+${offset}` : `${offset}`;
    
    // Try to match with common timezones
    const match = timezones.find(tz => {
      const tzOffset = parseFloat(tz.offset.replace(':', '.'));
      const userOffset = offset;
      return Math.abs(tzOffset - userOffset) < 0.5;
    });
    
    return match ? match.value : `GMT${offsetStr}`;
  } catch {
    return 'UTC';
  }
};

const TimezonePicker: React.FC<TimezonePickerProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder = 'e.g., GMT+4, EST, PST',
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [preferredTimezone, setPreferredTimezone] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-detect and set preferred timezone on mount if no value is set
  useEffect(() => {
    if (!value && !preferredTimezone) {
      const detected = detectTimezone();
      setPreferredTimezone(detected);
      // Optionally auto-set it (uncomment if you want auto-selection)
      // onChange(detected);
    }
  }, [value, preferredTimezone, onChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Sort timezones: preferred first, then selected, then alphabetically
  const sortedTimezones = [...timezones].sort((a, b) => {
    if (a.value === preferredTimezone && b.value !== preferredTimezone) return -1;
    if (b.value === preferredTimezone && a.value !== preferredTimezone) return 1;
    if (a.value === value && b.value !== value) return -1;
    if (b.value === value && a.value !== value) return 1;
    return a.label.localeCompare(b.label);
  });

  const filteredTimezones = sortedTimezones.filter(tz =>
    tz.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tz.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tz.offset.includes(searchQuery)
  );

  const selectedTimezone = timezones.find(tz => tz.value === value);

  const handleSelect = (tzValue: string) => {
    onChange(tzValue);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleDetect = () => {
    const detected = detectTimezone();
    onChange(detected);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div ref={containerRef} className="custom-timezone-picker">
      <input
        type="hidden"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
      />
      <div
        className={`timezone-picker-input ${isOpen ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
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
        <span className={value ? 'timezone-value' : 'timezone-placeholder'}>
          {selectedTimezone ? `${selectedTimezone.value} (${selectedTimezone.offset})` : placeholder}
        </span>
        <svg
          className="timezone-arrow"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="timezone-picker-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="timezone-search">
              <svg
                className="search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                className="timezone-search-input"
                placeholder="Search timezone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="timezone-actions">
              <button
                type="button"
                className="timezone-action-button primary"
                onClick={handleDetect}
              >
                {preferredTimezone ? `Use Preferred (${preferredTimezone})` : 'Detect My Timezone'}
              </button>
              {value && (
                <button
                  type="button"
                  className="timezone-action-button"
                  onClick={handleClear}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="timezone-list">
              {filteredTimezones.length > 0 ? (
                filteredTimezones.map((tz) => (
                  <button
                    key={tz.value}
                    type="button"
                    className={`timezone-item ${value === tz.value ? 'selected' : ''} ${preferredTimezone === tz.value ? 'preferred' : ''}`}
                    onClick={() => handleSelect(tz.value)}
                  >
                    <div className="timezone-item-content">
                      <div className="timezone-item-header">
                        <span className="timezone-item-label">{tz.label}</span>
                        {preferredTimezone === tz.value && (
                          <span className="timezone-badge">Preferred</span>
                        )}
                      </div>
                      <span className="timezone-item-offset">{tz.offset}</span>
                    </div>
                    {value === tz.value && (
                      <svg
                        className="timezone-check"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                ))
              ) : (
                <div className="timezone-no-results">
                  No timezones found matching "{searchQuery}"
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimezonePicker;

