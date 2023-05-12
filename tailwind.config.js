/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,tsx}'],
    theme: {
        colors: { pureblack: '#000000', primary: '#FFFFFF', secondary: '#a7a7a7', mainbackground: '#181818' },
        fontFamily: {
            helveticaneue: ['helveticaneue']
        },
        screens: { md: '1200px' },
        extend: {}
    },
    plugins: []
};
