'use client';

import React from 'react';

export function AmbientGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-[-20%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[hsla(var(--accent)/.25)] blur-[90px]" />
      <div className="absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[hsla(var(--accent2)/.18)] blur-[90px]" />
      <div className="absolute left-[25%] bottom-[-20%] h-[520px] w-[520px] rounded-full bg-[hsla(var(--accent)/.12)] blur-[110px]" />
    </div>
  );
}


