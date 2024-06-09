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
            }
        },
    },
    plugins: [],
}

