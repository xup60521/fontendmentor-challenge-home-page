/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "league": ["League Spartan", "sans-serif"]
            },
            colors: {
                "dark_gray": "hsl(0, 0%, 63%)",
                "very_dark-gray": "hsl(0, 0%, 27%)"
            },
            keyframes: {
                "fade-in-right": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(5%, 0, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "fade-in-left": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(-5%, 0, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "fade-out-left": {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translate3d(-5%, 0, 0)",
                    },
                },
                "fade-out-right": {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translate3d(5%, 0, 0)",
                    },
                },
                "open-menu": {
                    "0%": {
                        top: "-7.5rem",
                    },
                    "100%": {
                        top: 0,
                    }
                },
                "close-menu": {
                    "0%": {
                        top: "0",
                    },
                    "100%": {
                        top: "-7.5rem",
                    }
                },
            },
            animation: {
                fadein_right: 'fade-in-right 0.25s ease-in-out 0s 1',
                fadein_left: 'fade-in-left 0.25s ease-in-out 0s 1',
                fadeout_left: 'fade-out-left 0.25s ease-in-out 0s forwards;',
                fadeout_right: 'fade-out-right 0.25s ease-in-out 0s forwards;',
                open_menu: "open-menu 0.25s ease-in-out 0s forwards",
                close_menu: "close-menu 0.25s ease-in-out 0s forwards",
            }
        },
    },
    plugins: [],
}

