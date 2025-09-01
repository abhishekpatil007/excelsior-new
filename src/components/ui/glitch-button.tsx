"use client";
import React from 'react';

interface GlitchButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const GlitchButton = ({ children, className = "", onClick, type = "button" }: GlitchButtonProps) => {
  return (
    <div className={`glitch-button-wrapper ${className}`}>
      <button 
        className="glitch-button" 
        data-text={children}
        onClick={onClick}
        type={type}
      >
        <span className="actual-text">&nbsp;{children}&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;{children}&nbsp;</span>
      </button>
    </div>
  );
}; 