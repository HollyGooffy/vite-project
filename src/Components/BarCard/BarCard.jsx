import React from 'react';

const BarCard = ({ icon, name }) => {
    return (
        <div className="bg-gray rounded-xl p-3 flex flex-col items-center justify-center h-full cursor-pointer hover:bg-dark-200 active:bg-dark-300">
            <div className="flex flex-col items-center justify-center">
                {icon && (
                    <img
                        src={icon}
                        alt={name}
                        className="w-[60px] h-[40px] object-contain mb-2"
                    />
                )}
                <span className="text-sm text-center font-semibold">{name}</span>
            </div>
        </div>
    );
};

export default BarCard;