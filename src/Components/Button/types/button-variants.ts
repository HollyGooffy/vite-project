import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
    "px-10 py-0.5 rounded-4xl text-xs font-semibold transition-all duration-200 flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active",
                primary: "bg-gradient-to-r from-primary-700 to-primary-400 text-white hover:from-primary-800 hover:to-primary-500 active:from-primary-900 active:to-primary-600",
                danger: "bg-danger text-white hover:bg-danger-hover active:bg-danger-active"
            },
            disabled: {
                true: "cursor-not-allowed text-text-gray",
                false: "cursor-pointer"
            } as const
        },
        compoundVariants: [
            {
                variant: "primary",
                disabled: true,
                class: "bg-none bg-gray-300"
            }
        ],
        defaultVariants: {
            variant: "default",
            disabled: false
        }
    }
);

export type ButtonVariants = Omit<VariantProps<typeof buttonVariants>, 'disabled'> & {
    disabled?: boolean;
};