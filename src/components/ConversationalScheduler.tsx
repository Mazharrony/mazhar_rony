'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import DatePicker from './DatePicker';
import TimezonePicker from './TimezonePicker';
import './ConversationalScheduler.css';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
  options?: string[];
  inputType?: 'text' | 'email' | 'date' | 'time' | 'select' | 'textarea';
}

interface MeetingData {
  name?: string;
  email?: string;
  projectType?: string;
  projectDetails?: string;
  urgency?: string;
  budget?: string;
  date?: string;
  time?: string;
  timezone?: string;
  duration?: string;
  additionalNotes?: string;
}

const ConversationalScheduler: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [meetingData, setMeetingData] = useState<MeetingData>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-detect timezone
  const autoTimezone = React.useMemo(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const offset = -new Date().getTimezoneOffset() / 60;
      const offsetStr = offset >= 0 ? `+${offset}` : `${offset}`;
      return `GMT${offsetStr}`;
    } catch {
      return '';
    }
  }, []);

  useEffect(() => {
    // Initialize with first AI message
    if (messages.length === 0) {
      setTimeout(() => {
        addAIMessage(t('contact.scheduler.greeting'));
      }, 500);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (inputRef.current && currentStep > 0) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addAIMessage = (content: string, options?: string[], inputType?: Message['inputType']) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: `ai-${Date.now()}`,
        type: 'ai',
        content,
        timestamp: new Date(),
        options,
        inputType
      }]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (content: string) => {
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      type: 'user',
      content,
      timestamp: new Date()
    }]);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    addUserMessage(option);
    
    // Process based on current step
    setTimeout(() => {
      processStep(option);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For date/time/timezone, userInput might be set via picker onChange
    // For text inputs, check if there's text
    const lastMessage = messages[messages.length - 1];
    const needsTextInput = lastMessage?.inputType === 'text' || 
                          lastMessage?.inputType === 'email' || 
                          lastMessage?.inputType === 'textarea';
    
    if (needsTextInput && !userInput.trim()) return;
    if (!needsTextInput && !userInput) return;

    const input = userInput.trim() || userInput;
    addUserMessage(input);
    setUserInput('');
    setSelectedOption(null);

    setTimeout(() => {
      processStep(input);
    }, 500);
  };

  const processStep = (input: string) => {
    switch (currentStep) {
      case 0: // Greeting - ask for name
        setMeetingData(prev => ({ ...prev, name: input }));
        setCurrentStep(1);
        setTimeout(() => {
          const emailMessage = t('contact.scheduler.askEmail').replace('{{name}}', input);
          addAIMessage(emailMessage);
        }, 800);
        break;

      case 1: // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(input)) {
          setMeetingData(prev => ({ ...prev, email: input }));
          setCurrentStep(2);
          setTimeout(() => {
            addAIMessage(t('contact.scheduler.askProject'), [
              t('contact.scheduler.projectOptions.website'),
              t('contact.scheduler.projectOptions.marketing'),
              t('contact.scheduler.projectOptions.branding'),
              t('contact.scheduler.projectOptions.other')
            ]);
          }, 800);
        } else {
          setTimeout(() => {
            addAIMessage(t('contact.scheduler.invalidEmail'));
          }, 800);
        }
        break;

      case 2: // Project type
        setMeetingData(prev => ({ ...prev, projectType: input }));
        setCurrentStep(3);
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.askProjectDetails'), undefined, 'textarea');
        }, 800);
        break;

      case 3: // Project details
        setMeetingData(prev => ({ ...prev, projectDetails: input }));
        setCurrentStep(4);
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.askUrgency'), [
            t('contact.scheduler.urgencyOptions.low'),
            t('contact.scheduler.urgencyOptions.normal'),
            t('contact.scheduler.urgencyOptions.high')
          ]);
        }, 800);
        break;

      case 4: // Urgency
        setMeetingData(prev => ({ ...prev, urgency: input }));
        setCurrentStep(5);
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.askBudget'), [
            t('contact.scheduler.budgetOptions.small'),
            t('contact.scheduler.budgetOptions.medium'),
            t('contact.scheduler.budgetOptions.large'),
            t('contact.scheduler.budgetOptions.discuss')
          ]);
        }, 800);
        break;

      case 5: // Budget
        setMeetingData(prev => ({ ...prev, budget: input }));
        setCurrentStep(6);
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.askDate'), undefined, 'date');
        }, 800);
        break;

      case 6: // Date
        setMeetingData(prev => ({ ...prev, date: input }));
        setCurrentStep(7);
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.askTime'), undefined, 'time');
        }, 800);
        break;

      case 7: // Time
        setMeetingData(prev => ({ ...prev, time: input }));
        setCurrentStep(8);
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.askDuration'), [
            t('contact.scheduler.durationOptions.30min'),
            t('contact.scheduler.durationOptions.60min'),
            t('contact.scheduler.durationOptions.90min')
          ]);
        }, 800);
        break;

      case 8: // Duration
        setMeetingData(prev => ({ ...prev, duration: input }));
        setCurrentStep(9);
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.askTimezone'), undefined, 'select');
        }, 800);
        break;

      case 9: // Timezone
        setMeetingData(prev => ({ ...prev, timezone: input || autoTimezone }));
        setCurrentStep(10);
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.askAdditionalNotes'), undefined, 'textarea');
        }, 800);
        break;

      case 10: // Additional notes
        setMeetingData(prev => ({ ...prev, additionalNotes: input }));
        setCurrentStep(11);
        setTimeout(() => {
          submitMeeting();
        }, 800);
        break;
    }
  };

  const submitMeeting = async () => {
    setIsSubmitting(true);
    addAIMessage(t('contact.scheduler.submitting'));

    const emailBody = `
New Meeting Request - Conversational AI

Name: ${meetingData.name}
Email: ${meetingData.email}
Project Type: ${meetingData.projectType}
Project Details: ${meetingData.projectDetails}
Urgency: ${meetingData.urgency}
Budget: ${meetingData.budget}
Preferred Date: ${meetingData.date}
Preferred Time: ${meetingData.time}
Timezone: ${meetingData.timezone || autoTimezone}
Duration: ${meetingData.duration}
Additional Notes: ${meetingData.additionalNotes || 'None'}

---
This meeting request was submitted through the conversational AI scheduler.
    `.trim();

    try {
      const response = await fetch('/api/meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: meetingData.name?.trim(),
          email: meetingData.email?.trim(),
          date: meetingData.date,
          time: meetingData.time,
          timezone: meetingData.timezone || autoTimezone,
          duration: meetingData.duration,
          context: `Project: ${meetingData.projectType}\nDetails: ${meetingData.projectDetails}\nUrgency: ${meetingData.urgency}\nBudget: ${meetingData.budget}\nNotes: ${meetingData.additionalNotes || 'None'}`
        })
      });

      if (response.ok) {
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.success'));
        }, 1000);
      } else {
        // Fallback to mailto
        const mailtoLink = `mailto:hello@meetmazhar.site?subject=Meeting Request - ${encodeURIComponent(meetingData.name || '')}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
        setTimeout(() => {
          addAIMessage(t('contact.scheduler.success'));
        }, 1000);
      }
    } catch (err) {
      // Fallback to mailto
      const mailtoLink = `mailto:hello@meetmazhar.site?subject=Meeting Request - ${encodeURIComponent(meetingData.name || '')}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      setTimeout(() => {
        addAIMessage(t('contact.scheduler.success'));
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentInputComponent = () => {
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.type !== 'ai') return null;

    switch (lastMessage.inputType) {
      case 'email':
        return (
          <input
            ref={inputRef}
            type="email"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t('contact.scheduler.inputPlaceholder.email')}
            className="scheduler-input"
            disabled={isSubmitting}
          />
        );

      case 'date':
        return (
          <div className="scheduler-date-picker-wrapper">
            <DatePicker
              id="scheduler-date"
              name="scheduler-date"
              value={userInput}
              onChange={(value) => {
                setUserInput(value);
                // Auto-submit when date is selected
                if (value) {
                  setTimeout(() => {
                    addUserMessage(value);
                    setTimeout(() => {
                      processStep(value);
                    }, 500);
                  }, 300);
                }
              }}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        );

      case 'time':
        return (
          <input
            ref={inputRef}
            type="time"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="scheduler-input"
            disabled={isSubmitting}
          />
        );

      case 'select':
        return (
          <div className="scheduler-timezone-picker-wrapper">
            <TimezonePicker
              id="scheduler-timezone"
              name="scheduler-timezone"
              value={userInput || autoTimezone}
              onChange={(value) => {
                setUserInput(value);
                // Auto-submit when timezone is selected
                if (value) {
                  setTimeout(() => {
                    addUserMessage(value);
                    setTimeout(() => {
                      processStep(value);
                    }, 500);
                  }, 300);
                }
              }}
              placeholder={t('contact.scheduler.inputPlaceholder.timezone')}
            />
          </div>
        );

      case 'textarea':
        return (
          <textarea
            ref={inputRef as any}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t('contact.scheduler.inputPlaceholder.textarea')}
            className="scheduler-textarea"
            rows={4}
            disabled={isSubmitting}
          />
        );

      default:
        return (
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t('contact.scheduler.inputPlaceholder.text')}
            className="scheduler-input"
            disabled={isSubmitting}
          />
        );
    }
  };

  return (
    <div className="conversational-scheduler">
      <div className="scheduler-header">
        <div className="scheduler-header-content">
          <div className="scheduler-avatar">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <div className="scheduler-header-text">
            <h3>{t('contact.scheduler.title')}</h3>
            <p>{t('contact.scheduler.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="scheduler-messages">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`message message-${message.type}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {message.type === 'ai' && (
                <div className="message-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
              )}
              <div className="message-content">
                <p>{message.content}</p>
                {message.options && message.options.length > 0 && (
                  <div className="message-options">
                    {message.options.map((option, idx) => (
                      <motion.button
                        key={idx}
                        className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(option)}
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            className="message message-ai typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="message-avatar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="scheduler-input-form">
        <div className="scheduler-input-wrapper">
          {getCurrentInputComponent()}
          {(() => {
            const lastMessage = messages[messages.length - 1];
            const needsTextInput = lastMessage?.inputType === 'text' || 
                                  lastMessage?.inputType === 'email' || 
                                  lastMessage?.inputType === 'textarea' ||
                                  lastMessage?.inputType === 'time';
            const showButton = needsTextInput && !lastMessage?.options;
            
            if (!showButton) return null;
            
            return (
              <motion.button
                type="submit"
                className="scheduler-send-button"
                disabled={!userInput.trim() || isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </motion.button>
            );
          })()}
        </div>
      </form>
    </div>
  );
};

export default ConversationalScheduler;

