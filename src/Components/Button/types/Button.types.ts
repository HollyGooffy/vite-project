import {ButtonVariants} from "@/Components/Button/types/button-variants";

export type ButtonVariant = 'default' | 'primary' | 'danger';
export type ButtonType = 'button' | 'submit' | 'reset';
export type IconPosition = 'left' | 'right';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonVariants {
    icon?: React.ReactNode;
    text?: React.ReactNode;
    iconPosition?: "left" | "right";
}