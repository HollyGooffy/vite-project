import React from 'react';

const Button = ({
                    text = "Кнопка",
                    variant = "default",
                    className = "",
                    style = {},
                    onClick,
                    type = "button",
                    disabled = false,
                    icon = null,
                    iconPosition = "right"
                }) => {

    const baseClasses = "px-10 py-0.5 rounded-4xl text-xs font-semibold text-white transition-all duration-200 flex items-center justify-center";

    const variantClasses = {
        default: "bg-secondary hover:bg-secondary-hover active:bg-secondary-active",
        primary: "bg-gradient-to-r from-primary-700 to-primary-400 hover:from-primary-800 hover:to-primary-500 active:from-primary-900 active:to-primary-600",
        danger: "bg-danger hover:bg-danger-hover active:bg-danger-active"
    };

    const disabledClasses = disabled
        ? "cursor-not-allowed text-text-gray"
        : "cursor-pointer";

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

    const renderContent = () => {
        if (iconPosition === "left") {
            return (
                <>
                    {icon && <span className="mr-2">{icon}</span>}
                    {text}
                </>
            );
        }
        return (
            <>
                {text}
                {icon && <span className="ml-2">{icon}</span>}
            </>
        );
    };

    return (
        <button
            type={type}
            className={combinedClasses}
            style={style}
            onClick={onClick}
            disabled={disabled}
        >
            {renderContent()}
        </button>
    );
};

export default Button;