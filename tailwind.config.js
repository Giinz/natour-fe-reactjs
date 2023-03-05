/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#444',
                grey: '#f7f7f7',
                lightGreen: '#7dd56f',
                heavyGreen: '#28b487'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'scale(0)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease-in',
            },
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px',
        },
    },
    plugins: [],
};
