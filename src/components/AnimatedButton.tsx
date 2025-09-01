'use client';

import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const AnimatedButton = ({ children, onClick, className = '', disabled = false, type = 'button' }: AnimatedButtonProps) => {
  return (
    <div className={`${className}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="animated-button"
      >
        {children}
      </button>
    </div>
  );
};

export default AnimatedButton; 