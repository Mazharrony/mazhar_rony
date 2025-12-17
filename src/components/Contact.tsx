'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import DatePicker from './DatePicker';
import TimezonePicker from './TimezonePicker';
import './Contact.css';

interface Brief {
  projectType?: string;
  deliverables?: string[];
  goals?: string;
  urgency?: 'low' | 'normal' | 'high';
  notes?: string;
  constraints?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface MeetingFormErrors {
  name?: string;
  email?: string;
  date?: string;
  time?: string;
  context?: string;
}

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [brief, setBrief] = useState<Brief | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Meeting form states
  const [meetingSubmitted, setMeetingSubmitted] = useState(false);
  const [meetingAnimating, setMeetingAnimating] = useState(false);
  const [meetingErrors, setMeetingErrors] = useState<MeetingFormErrors>({});
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTimezone, setMeetingTimezone] = useState(() => {
    // Auto-detect preferred timezone on component mount
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const offset = -new Date().getTimezoneOffset() / 60;
      const offsetStr = offset >= 0 ? `+${offset}` : `${offset}`;
      return `GMT${offsetStr}`;
    } catch {
      return '';
    }
  });
  const [meetingDuration, setMeetingDuration] = useState('60min');

  const validateForm = (name: string, email: string, message: string): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate name
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate message
    if (!message || message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (message.trim().length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';
    const website = formData.get('website'); // Honeypot field

    // Check honeypot (spam protection)
    if (website) {
      // Bot detected, silently fail
      return;
    }

    // Validate form
    if (!validateForm(name, email, message)) {
      return;
    }

    setIsAnimating(true);
    setAiLoading(true);
    setAiError(false);
    setBrief(null);
    setErrors({});

    try {
      const res = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Request failed');
      }

      const data = await res.json();
      if (data.brief) {
        setBrief(data.brief);
      } else {
        setAiError(true);
      }
    } catch (err) {
      setAiError(true);
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', err);
      }
    } finally {
      setAiLoading(false);
      setSubmitted(true);
      setIsAnimating(false);
      setTimeout(() => {
        setSubmitted(false);
        (e.target as HTMLFormElement).reset();
        setBrief(null);
        setAiError(false);
        setErrors({});
      }, 6000);
    }
  };

  const validateMeetingForm = (name: string, email: string, date: string, time: string, context: string): boolean => {
    const newErrors: MeetingFormErrors = {};
    
    // Validate name
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate date
    if (!date) {
      newErrors.date = 'Please select a preferred date';
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }
    
    // Validate time
    if (!time) {
      newErrors.time = 'Please select a preferred time';
    }
    
    // Validate context
    if (!context || context.trim().length < 10) {
      newErrors.context = 'Please provide meeting context (at least 10 characters)';
    }
    
    setMeetingErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMeetingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = (formData.get('meeting-name') as string) || '';
    const email = (formData.get('meeting-email') as string) || '';
    const date = meetingDate || (formData.get('meeting-date') as string) || '';
    const time = (formData.get('meeting-time') as string) || '';
    const timezone = meetingTimezone || (formData.get('meeting-timezone') as string) || '';
    const context = (formData.get('meeting-context') as string) || '';
    const duration = meetingDuration || (formData.get('meeting-duration') as string) || '60min';
    const website = formData.get('website-meeting'); // Honeypot field

    // Check honeypot
    if (website) {
      return;
    }

    // Validate form
    if (!validateMeetingForm(name, email, date, time, context)) {
      return;
    }

    setMeetingAnimating(true);
    setMeetingErrors({});

    // Format email content
    const emailBody = `
New Meeting Request

Name: ${name}
Email: ${email}
Preferred Date: ${date}
Preferred Time: ${time}
Timezone: ${timezone || 'Not specified'}
Duration: ${duration}
Meeting Context:
${context}

---
This meeting request was submitted from the contact page.
    `.trim();

    try {
      // Try to send via API first
      const response = await fetch('/api/meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          date,
          time,
          timezone: timezone.trim(),
          duration,
          context: context.trim()
        })
      });

      if (response.ok) {
        // API request successful
        setMeetingSubmitted(true);
      } else {
        // API failed, use mailto as fallback
        const mailtoLink = `mailto:hello@meetmazhar.site?subject=Meeting Request - ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
        setMeetingSubmitted(true);
      }
    } catch (err) {
      // API error, use mailto as fallback
      const mailtoLink = `mailto:hello@meetmazhar.site?subject=Meeting Request - ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      setMeetingSubmitted(true);
      if (process.env.NODE_ENV === 'development') {
        console.error('Meeting form submission error:', err);
      }
    } finally {
      setMeetingAnimating(false);
      setTimeout(() => {
        setMeetingSubmitted(false);
        (e.target as HTMLFormElement).reset();
        setMeetingErrors({});
        setMeetingDate('');
        setMeetingTimezone('');
        setMeetingDuration('60min');
      }, 6000);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: t('contact.methods.email.label'),
      value: 'hello@meetmazhar.site',
      href: 'mailto:hello@meetmazhar.site'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: t('contact.methods.phone.label'),
      value: '+971 50 721 7156',
      href: 'tel:+971507217156'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2c-3.86 0-7 3.14-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
        </svg>
      ),
      label: 'Our location',
      value: t('contact.info.location'),
      href: 'https://www.google.com/maps/search/?api=1&query=Dubai'
    }
  ];

  return (
    <section className="contact-section" ref={containerRef}>
      <div className="contact-container">
        <div className="contact-watermark" aria-hidden="true">CONTACT</div>

        {/* Hero Row */}
        <div className="contact-hero-grid">
          {/* Left: copy + quick contact */}
          <motion.aside
            className="contact-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-left-header">
              <motion.button
                className="contact-label-button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.05, duration: 0.5 }}
              >
                {t('contact.label')}
              </motion.button>

              <motion.h1
                className="contact-title"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {t('contact.title')}
              </motion.h1>

              <motion.p
                className="contact-subtitle"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                {t('contact.subtitle')}
              </motion.p>
            </div>

            <div className="contact-left-cards">
              {contactMethods.map((method, idx: number) => (
                <motion.a
                  key={idx}
                  href={method.href}
                  className="contact-method-item"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ delay: 0.35 + idx * 0.07, duration: 0.45 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="method-icon-wrapper">{method.icon}</div>
                  <div className="method-content">
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                  <span className="method-arrow" aria-hidden="true">↗</span>
                </motion.a>
              ))}
            </div>
          </motion.aside>

          {/* Right: form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="contact-form contact-form--minimal">
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-group">
                <label className="sr-only" htmlFor="name">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                  disabled={isAnimating || submitted}
                  aria-required={true}
                  aria-invalid={errors.name ? true : false}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="form-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="sr-only" htmlFor="email">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                  disabled={isAnimating || submitted}
                  aria-required={true}
                  aria-invalid={errors.email ? true : false}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="sr-only" htmlFor="message">{t('contact.form.message')}</label>
                <textarea 
                  id="message" 
                  name="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={6}
                  required
                  disabled={isAnimating || submitted}
                  aria-required={true}
                  aria-invalid={errors.message ? true : false}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="form-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <motion.button
                type="submit"
                className="contact-submit-button"
                disabled={isAnimating || submitted}
                whileHover={submitted ? {} : { scale: 1.02 }}
                whileTap={submitted ? {} : { scale: 0.98 }}
              >
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t('contact.form.success')}
                  </motion.span>
                ) : isAnimating ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ✈️
                  </motion.span>
                ) : (
                  <span>{t('contact.form.submit')}</span>
                )}
              </motion.button>
            </form>

            {/* AI Brief Result */}
            {(aiLoading || brief || aiError) && (
              <motion.div
                className="ai-brief-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {aiLoading && (
                  <div className="ai-loading">
                    <span>Thinking…</span>
                  </div>
                )}
                {brief && (
                  <div className="ai-brief-content">
                    <strong>Here's what I understood from your message:</strong>
                    <ul>
                      {brief.projectType && <li><b>Project type:</b> {brief.projectType}</li>}
                      {brief.deliverables && Array.isArray(brief.deliverables) && (
                        <li><b>Deliverables:</b>
                          <ul>
                            {brief.deliverables.map((d: string, i: number) => <li key={i}>{d}</li>)}
                          </ul>
                        </li>
                      )}
                      {brief.goals && <li><b>Goals:</b> {brief.goals}</li>}
                      {brief.urgency && <li><b>Urgency:</b> {brief.urgency}</li>}
                      {brief.notes && <li><b>Notes:</b> {brief.notes}</li>}
                    </ul>
                  </div>
                )}
                {aiError && (
                  <div className="ai-error">
                    <span>Couldn't generate a brief, but your message was sent!</span>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Meeting Scheduling Form Card (kept below hero) */}
        <motion.div
          className="contact-meeting-card"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="meeting-header">
              <h3>{t('contact.meeting.title')}</h3>
              <p>{t('contact.meeting.subtitle')}</p>
            </div>

            <form onSubmit={handleMeetingSubmit} className="meeting-form">
              {/* Honeypot field */}
              <input
                type="text"
                name="website-meeting"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-group">
                <label htmlFor="meeting-name">{t('contact.meeting.form.name')}</label>
                <input 
                  type="text" 
                  id="meeting-name" 
                  name="meeting-name"
                  placeholder={t('contact.meeting.form.namePlaceholder')}
                  required
                  disabled={meetingAnimating || meetingSubmitted}
                  aria-required={true}
                  aria-invalid={meetingErrors.name ? true : false}
                />
                {meetingErrors.name && (
                  <span className="form-error" role="alert">{meetingErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="meeting-email">{t('contact.meeting.form.email')}</label>
                <input 
                  type="email" 
                  id="meeting-email" 
                  name="meeting-email"
                  placeholder={t('contact.meeting.form.emailPlaceholder')}
                  required
                  disabled={meetingAnimating || meetingSubmitted}
                  aria-required={true}
                  aria-invalid={meetingErrors.email ? true : false}
                />
                {meetingErrors.email && (
                  <span className="form-error" role="alert">{meetingErrors.email}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="meeting-date">{t('contact.meeting.form.date')}</label>
                  <DatePicker
                    id="meeting-date"
                    name="meeting-date"
                    value={meetingDate}
                    onChange={setMeetingDate}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    disabled={meetingAnimating || meetingSubmitted}
                    aria-required={true}
                    aria-invalid={meetingErrors.date ? true : false}
                  />
                  {meetingErrors.date && (
                    <span className="form-error" role="alert">{meetingErrors.date}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="meeting-time">{t('contact.meeting.form.time')}</label>
                  <input 
                    type="time" 
                    id="meeting-time" 
                    name="meeting-time"
                    required
                    disabled={meetingAnimating || meetingSubmitted}
                    aria-required={true}
                    aria-invalid={meetingErrors.time ? true : false}
                  />
                  {meetingErrors.time && (
                    <span className="form-error" role="alert">{meetingErrors.time}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="meeting-timezone">{t('contact.meeting.form.timezone')}</label>
                  <TimezonePicker
                    id="meeting-timezone"
                    name="meeting-timezone"
                    value={meetingTimezone}
                    onChange={setMeetingTimezone}
                    placeholder={t('contact.meeting.form.timezonePlaceholder')}
                    disabled={meetingAnimating || meetingSubmitted}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="meeting-duration">{t('contact.meeting.form.duration')}</label>
                  <select 
                    id="meeting-duration" 
                    name="meeting-duration"
                    value={meetingDuration}
                    onChange={(e) => setMeetingDuration(e.target.value)}
                    disabled={meetingAnimating || meetingSubmitted}
                    className="form-select"
                  >
                    <option value="30min">{t('contact.meeting.form.durationOptions.30min')}</option>
                    <option value="60min">{t('contact.meeting.form.durationOptions.60min')}</option>
                    <option value="90min">{t('contact.meeting.form.durationOptions.90min')}</option>
                    <option value="custom">{t('contact.meeting.form.durationOptions.custom')}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="meeting-context">{t('contact.meeting.form.context')}</label>
                <textarea 
                  id="meeting-context" 
                  name="meeting-context"
                  placeholder={t('contact.meeting.form.contextPlaceholder')}
                  rows={4}
                  required
                  disabled={meetingAnimating || meetingSubmitted}
                  aria-required={true}
                  aria-invalid={meetingErrors.context ? true : false}
                />
                {meetingErrors.context && (
                  <span className="form-error" role="alert">{meetingErrors.context}</span>
                )}
              </div>

              <motion.button
                type="submit"
                className="contact-submit-button"
                disabled={meetingAnimating || meetingSubmitted}
                whileHover={meetingSubmitted ? {} : { scale: 1.02 }}
                whileTap={meetingSubmitted ? {} : { scale: 0.98 }}
              >
                {meetingSubmitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t('contact.meeting.form.success')}
                  </motion.span>
                ) : meetingAnimating ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ✈️
                  </motion.span>
                ) : (
                  <span>{t('contact.meeting.form.submit')}</span>
                )}
              </motion.button>
            </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
