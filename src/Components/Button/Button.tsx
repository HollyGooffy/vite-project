import {ButtonProps, buttonVariants} from "../Button/types";

export const Button: React.FC<ButtonProps> = ({
                                           text = "Кнопка",
                                           variant = "default",
                                           className = "",
                                           style = {},
                                           onClick,
                                           type = "button",
                                           disabled = false,
                                           icon = null,
                                           iconPosition = "right",
                                           ...restProps
                                       }) => {

    const buttonClass = buttonVariants({
        variant,
        disabled,
        className
    });

    const renderContent = () => (
        <>
            {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
            {text}
            {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
        </>
    );

    return (
        <button
            type={type}
            className={buttonClass}
            style={style}
            onClick={onClick}
            disabled={disabled}
            {...restProps}
        >
            {renderContent()}
        </button>
    );
};

export default Button;