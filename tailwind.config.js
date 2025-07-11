/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem', // Отступы по умолчанию (для мобильных)
                sm: '2rem',     // Для экранов sm и больше
                md: '3rem',     // Для экранов md и больше
                lg: '4rem',     // Для экранов lg и больше
                xl: '5rem',     // Для экранов xl и больше
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            colors: {
                gray: '#202020',
            },
            fontFamily: {
                'inter': "var(--font-inter)",
            }
        },
    },
}