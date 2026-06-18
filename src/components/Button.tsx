import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';

  const variants = {
    primary: 'bg-button-primary-background hover:bg-button-primary-hover-background text-button-primary-text focus:ring-button-primary-focus-ring',
    outline: 'bg-button-outline-background border border-button-outline-border text-button-outline-text hover:bg-button-outline-hover-background',
    ghost: 'text-button-ghost-text hover:text-button-ghost-hover-text hover:bg-button-ghost-hover-background'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3.5 text-lg'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
