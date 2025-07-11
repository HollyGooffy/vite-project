import Input from "../Input/Input";
import Button from "../Button/Button";
import telegram from '/src/assets/telegram.svg';
import VK from '/src/assets/VK.svg';

const Footer = () => {
    return (
        <footer className="w-full px-7 py-8">
            <div className="mx-auto max-w-screen-xl">

                <div className="grid sm:grid-cols-2 md:grid-cols-5 max-sm:grid-cols-1 gap-8">
                    <nav className="md:col-span-1">
                        <h2 className="text-base font-semibold mb-4">Категории</h2>
                        <ul className="space-y-2">
                            {['Мясо', 'Наборы', 'Мясо', 'Мясо'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-xs text-text-gray-2 hover:text-gray-900 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className="md:col-span-1">
                        <h2 className="text-base font-semibold mb-4">О компании</h2>
                        <ul className="space-y-2">
                            {['Контакты', 'Вакансии'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-xs text-text-gray-2 hover:text-gray-900 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className="md:col-span-1">
                        <h2 className="text-base font-semibold mb-4">Помощь</h2>
                        <ul className="space-y-2">
                            {['Доставка', 'Оплата', 'Возврат'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-xs text-text-gray-2 hover:text-gray-900 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <section className="md:col-span-2">
                        <h2 className="text-base font-semibold mb-4">Подпишитесь на новости</h2>

                        <div className="space-y-4">
                            <Input placeholder="Ваш E-mail"/>
                            <Button text="Подписаться" className="py-1.5 !px-7"/>
                            <div className="flex gap-3">
                                <a href="#" aria-label="Telegram">
                                    <img src={telegram} alt="Telegram" className="h-6 w-6"/>
                                </a>
                                <a href="#" aria-label="ВКонтакте">
                                    <img src={VK} alt="VK" className="h-6 w-6"/>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-8 pt-6 flex flex-col justify-between items-start gap-2">
                    <a href="#" className="mb-2 md:mb-0">
                        Политика конфиденциальности
                    </a>
                    <p>
                        Copyright
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;