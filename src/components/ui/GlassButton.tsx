'use client';

import React from 'react';

export function GlassButton({
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
}) {
  const base =
    'rounded-full px-5 py-2.5 text-sm font-medium transition will-change-transform active:scale-[0.98]';

  const v =
    variant === 'primary'
      ? 'bg-white/10 border border-white/15 hover:bg-white/14 shadow-glow'
      : 'bg-transparent border border-white/10 hover:bg-white/8';

  return <button {...props} className={[base, v, className].join(' ')} />;
}


