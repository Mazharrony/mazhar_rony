'use client';

import React from 'react';

export function GlassPanel({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-3xl',
        'border border-[hsla(0_0%_100%/.10)]',
        'bg-[hsla(var(--card)/.55)] backdrop-blur-glass shadow-glass',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
      {children}
    </div>
  );
}


