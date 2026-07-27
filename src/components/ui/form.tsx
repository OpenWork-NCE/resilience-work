import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, type, ...props }, ref) => {
    // Email/tel fields are frequently mutated by browser extensions
    // (e.g. temp-mail injects data-temp-mail-org + background-image styles),
    // which causes harmless hydration attribute mismatches in dev.
    const suppressExtensionNoise = type === "email" || type === "tel";

    return (
      <input
        ref={ref}
        type={type}
        suppressHydrationWarning={suppressExtensionNoise}
        className={cn(
          'flex h-11 w-full rounded-[var(--radius-md)] border bg-[rgb(var(--surface))] px-4 py-2 text-base transition-colors duration-[var(--duration-normal)]',
          'placeholder:text-[rgb(var(--muted-foreground))]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-[rgb(var(--danger))] focus-visible:ring-[rgb(var(--danger))]',
          success && 'border-[rgb(var(--success))] focus-visible:ring-[rgb(var(--success))]',
          !error && !success && 'border-[rgb(var(--border))] hover:border-[rgb(var(--border-strong))]',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  success?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, success, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[120px] w-full rounded-[var(--radius-md)] border bg-[rgb(var(--surface))] px-4 py-3 text-base transition-colors duration-[var(--duration-normal)] resize-y',
          'placeholder:text-[rgb(var(--muted-foreground))]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-[rgb(var(--danger))] focus-visible:ring-[rgb(var(--danger))]',
          success && 'border-[rgb(var(--success))] focus-visible:ring-[rgb(var(--success))]',
          !error && !success && 'border-[rgb(var(--border))] hover:border-[rgb(var(--border-strong))]',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-[var(--radius-md)] border bg-[rgb(var(--surface))] px-4 py-2 text-base transition-colors duration-[var(--duration-normal)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-[rgb(var(--danger))] focus-visible:ring-[rgb(var(--danger))]',
          !error && 'border-[rgb(var(--border))] hover:border-[rgb(var(--border-strong))]',
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={cn(
            'mt-0.5 h-5 w-5 shrink-0 rounded-[var(--radius-xs)] border-2 border-[rgb(var(--border-strong))] bg-[rgb(var(--surface))]',
            'transition-colors duration-[var(--duration-normal)]',
            'checked:bg-[rgb(var(--primary))] checked:border-[rgb(var(--primary))]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="cursor-pointer select-none text-sm font-medium leading-relaxed text-[rgb(var(--foreground))]"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn('block text-sm font-medium text-[rgb(var(--foreground))] mb-2', className)}
        {...props}
      >
        {children}
        {required && <span className="text-[rgb(var(--danger))] ml-1">*</span>}
      </label>
    );
  }
);

FormLabel.displayName = 'FormLabel';

type FormHintProps = React.HTMLAttributes<HTMLParagraphElement>;

export const FormHint = forwardRef<HTMLParagraphElement, FormHintProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-[rgb(var(--muted-foreground))] mt-1.5', className)}
        {...props}
      />
    );
  }
);

FormHint.displayName = 'FormHint';

type FormErrorProps = React.HTMLAttributes<HTMLParagraphElement>;

export const FormError = forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-[rgb(var(--danger))] mt-1.5 flex items-center gap-1', className)}
        role="alert"
        {...props}
      />
    );
  }
);

FormError.displayName = 'FormError';

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export const FormField = ({ label, htmlFor, required, hint, error, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <FormLabel htmlFor={htmlFor} required={required}>{label}</FormLabel>
      {children}
      {hint && !error && <FormHint>{hint}</FormHint>}
      {error && <FormError>{error}</FormError>}
    </div>
  );
};
