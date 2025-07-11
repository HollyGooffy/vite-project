import React from 'react';
import logo from '/src/assets/logo.svg';
import { ShoppingBasket, Menu } from 'lucide-react';
import Button from "../Button/Button";

const Header = () => {
    const navItems = ["Мясо", "Акции", "Наборы", "Блог", "Контакты"];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header className="bg-gray rounded-b-xl py-2 w-full">
            <nav className="flex items-center justify-between mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 xl:px-12">

                <div className="flex items-center gap-4">
                    <button
                        className="sm:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu size={20} />
                    </button>
                    <img src={logo} alt="Логотип" width={38} height={32} />
                </div>

                <div className="hidden sm:flex gap-4 lg:gap-14 md:gap-10 sm:gap-6 justify-center flex-1">
                    {navItems.map(item => (
                        <a
                            key={item}
                            href="#"
                            className="text-xs hover:text-orange transition duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex gap-2 items-center">
                    <Button
                        text="700 ₽"
                        className="!px-3 !font-medium bg-transparent border border-gray-300 rounded-full py-1.5 text-xs"
                        icon={<ShoppingBasket size={12} />}
                    />
                    <Button variant='primary' text="Войти" className="px-3 py-1.5 text-xs" />
                </div>

                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-gray py-3 px-4 shadow-md sm:hidden z-10">
                        <div className="flex flex-col gap-3">
                            {navItems.map(item => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-sm hover:text-orange transition duration-200 py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;