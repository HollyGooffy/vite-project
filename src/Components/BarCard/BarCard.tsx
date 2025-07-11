import { BarCardProps } from './types';

const BarCard: React.FC<BarCardProps> = ({
                                             icon,
                                             name,
                                             className = ""
                                         }) => {
    const renderIcon = () => {
        if (!icon) return null;

        if (typeof icon === 'string') {
            return (
                <img
                    src={icon}
                    alt={name}
                    className="w-[60px] h-[40px] object-contain mb-2"
                />
            );
        }

        return (
            <div className="w-[60px] h-[40px] flex items-center justify-center mb-2">
                {icon}
            </div>
        );
    };

    return (
        <div
            className={`bg-gray rounded-xl p-3 flex flex-col items-center justify-center h-full cursor-pointer hover:bg-dark-200 active:bg-dark-300 ${className}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter'}
        >
            <div className="flex flex-col items-center justify-center">
                {renderIcon()}
                <span className="text-sm text-center font-semibold">{name}</span>
            </div>
        </div>
    );
};

export default BarCard;