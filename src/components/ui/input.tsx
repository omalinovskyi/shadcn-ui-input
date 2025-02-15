import * as React from 'react';

import { cn } from '@lib/tailwind';

const InputWrapper = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn('relative w-full rounded-md', className)}
      ref={ref}
      {...props}
    />
  );
});
InputWrapper.displayName = 'InputWrapper';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'border-input file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-ring/50 relative flex h-9 w-full rounded-[inherit] border border-solid bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

const InputPrefix = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentProps<'span'>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'absolute top-1/2 left-2 flex h-full -translate-y-1/2 items-center justify-center',
        className,
      )}
      {...props}
    />
  );
});
InputPrefix.displayName = 'InputPrefix';

const InputSuffix = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentProps<'span'>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'absolute top-1/2 right-2 flex h-full -translate-y-1/2 items-center justify-center',
        className,
      )}
      {...props}
    />
  );
});
InputSuffix.displayName = 'InputSuffix';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ children, className, ...props }: any, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex w-full items-center rounded-md [&>*]:rounded-none [&>*]:first:rounded-l-[inherit] [&>*]:last:rounded-r-[inherit]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

InputGroup.displayName = 'InputGroup';

const InputAddon = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-muted border-input flex min-h-9 shrink-0 items-center justify-center border border-solid px-2',
        className,
      )}
      {...props}
    />
  );
});
InputAddon.displayName = 'InputAddon';

export {
  Input,
  InputAddon,
  InputGroup,
  InputPrefix,
  InputSuffix,
  InputWrapper,
};
