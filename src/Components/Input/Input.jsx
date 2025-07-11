import React, { useState, useRef } from 'react';
import { Search, X } from 'lucide-react';

const Input = ({
                       icon = null,
                       placeholder = "Искать в магазине",
                       onSearch = () => {},
                       clearable = true
                   }) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClear = () => {
        setInputValue('');
        inputRef.current?.focus();
        onSearch('');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(inputValue);
    };

    const showClearButton = clearable && inputValue.length > 0;

    const isActive = isFocused || inputValue.length > 0;

    return (
        <form
            onSubmit={handleSearch}
            className={`flex items-center mx-auto rounded-full relative transition-all duration-300 bg-gray`}
        >
            {icon && (
                <div className={`pl-3 transition-colors ${
                    isActive ? 'text-blue-500' : 'text-gray-400'
                }`}>
                    {icon}
                </div>
            )}

            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                className={`w-full py-2.5 px-6 focus:outline-none bg-transparent ${
                    icon ? 'rounded-r-full' : 'rounded-full pl-4'
                } ${showClearButton ? 'pr-10' : ''} ${
                    isActive ? 'text-white' : 'text-text-gray-2'
                }`}
            />

            {showClearButton && (
                <button
                    type="button"
                    onClick={handleClear}
                    className={`absolute right-3 p-1 rounded-full transition-colors cursor-pointer ${
                        isActive
                            ? 'text-white bg-dark-400'
                            : 'text-gray-500'
                    }`}
                >
                    <X size={10} />
                </button>
            )}

            <button type="submit" className="hidden">Искать</button>
        </form>
    );
};

export default Input;