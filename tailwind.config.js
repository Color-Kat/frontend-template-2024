/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    important: true,
    theme:
        {
            extend: {
                // Add custom colors palette
                colors: {
                    'app': '#353370',
                    'app-dark': '#d2c7df',

                    'app-gray': '#777777',
                    'app-light': '#f1f1f1',

                    'app-accent': '#aaa',
                    'app-primary': '#fff',
                    'app-secondary': '#fff',
                },

                // Add new animations
                animation: {
                    'slide-up': 'slide-up .7s ease-in-out',
                    'slide-up-slow': 'slide-up 1.35s ease-in-out',
                    'slide-down': 'slide-down .5s ease-in-out',
                    'slide-left': 'slide-left 1s ease-in-out',
                    'slide-right': 'slide-right 1s ease-in-out',
                    'wave': 'wave 1.2s linear infinite',
                    'slow-fade': 'slow-fade 2.2s ease-in-out',
                    'scale-pulse': 'scale-pulse infinite 1.2s ease-in-out',
                },
                keyframes: {
                    'slow-fade': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    'slide-up': {
                        from: { opacity: 0, transform: 'translateY(15%)' },
                        to: { opacity: 1, transform: 'none' },
                    },
                    'slide-down': {
                        from: { opacity: 0, transform: 'translateY(-15%)' },
                        to: { opacity: 1, transform: 'none' },
                    },
                    'slide-left': {
                        from: { opacity: 0, transform: 'translateX(-20px)' },
                        to: { opacity: 1, transform: 'translateX(0)' },
                    },
                    'slide-right': {
                        from: { opacity: 0, transform: 'translateX(20px)' },
                        to: { opacity: 1, transform: 'translateX(0)' },
                    },
                    'wave': {
                        '0%': { transform: 'scale(0)' },
                        '50%': { transform: 'scale(1)' },
                        '100%': { transform: 'scale(0)' },
                    },
                    'scale-pulse': {
                        '0%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.13)' },
                        '100%': { transform: 'scale(1)' },
                    },
                },

                // Add new breakpoints
                screens: {
                    'xs': '560px'
                },

                // Add new shadows variants
                boxShadow: {
                    'mobile-bottom-menu-1': "4.1px -5px 0 0 rgb(17,24,39)",
                    'mobile-bottom-menu-2': "-4.1px -5px 0 0 rgb(17,24,39)",
                },
            },
        },
    future: {
        // Disable hover effect on mobile
        hoverOnlyWhenSupported: true,
    },
    plugins: [],
}