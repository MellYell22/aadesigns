
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-center inline-block";
  const variants = {
    primary: "accent-gradient text-white hover:opacity-90 shadow-lg shadow-indigo-500/20",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
    outline: "border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
