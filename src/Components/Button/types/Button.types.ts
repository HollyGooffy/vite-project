import { ReactNode, MouseEventHandler, CSSProperties } from 'react';

export type ButtonVariant = 'default' | 'primary' | 'danger';
export type ButtonType = 'button' | 'submit' | 'reset';
export type IconPosition = 'left' | 'right';

export interface ButtonProps {
    text?: string;
    variant?: ButtonVariant;
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType;
    disabled?: boolean;
    icon?: ReactNode;
    iconPosition?: IconPosition;
}