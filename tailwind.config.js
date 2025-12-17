/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Merriweather', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
            colors: {
                'christmas-red': '#b91c1c',
                'christmas-green': '#14532d',
                'christmas-gold': '#eab308',
            }
        },
    },
    darkMode: 'class', // Enable class-based dark mode
    plugins: [],
}
