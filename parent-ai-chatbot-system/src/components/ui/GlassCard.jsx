import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const GlassCard = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("glass-card p-6", className)} 
      {...props}
    >
      {children}
    </div>
  );
};
