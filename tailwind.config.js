/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0F172A',
                card: '#111827',
                'text-primary': '#E5E7EB',
                'text-secondary': '#94A3B8',
                'accent-blue': '#3B82F6',
                'accent-green': '#22C55E',
                'accent-orange': '#F59E0B',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
