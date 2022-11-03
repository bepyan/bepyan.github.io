import { $ } from '~/utils/core';

export interface ButtonProps extends React.ComponentProps<'button'> {
  size?: ButtonSize;
  kind?: ButtonKind;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  size = 'large',
  kind = 'primary',
  loading,
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      onClick={() => onClick?.()}
      className={$(
        'box-border w-full whitespace-nowrap rounded-md border border-transparent px-4 font-medium shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
        buttonKinds[kind],
        buttonSizes[size],
        (props.disabled || loading) && 'disabled cursor-not-allowed opacity-60',
        props.className,
      )}
    >
      {loading ? '...' : children}
    </button>
  );
}

const buttonKinds = {
  primary: 'text-white bg-purple-500 hover:bg-purple-600',
  secondary: 'text-purple-800 bg-purple-100 hover:bg-purple-200',
  outline: 'text-purple-500 ring-1 ring-purple-300 hover:ring-purple-400',
};

export type ButtonKind = keyof typeof buttonKinds;

const buttonSizes = {
  large: 'py-3 text-base',
  normal: 'py-2.5 text-sm',
};

export type ButtonSize = keyof typeof buttonSizes;
