module.exports = {
    content: ['./src/routes/**/*.{svelte,js,ts}'],
    plugins: [require("@tailwindcss/typography"), require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#00923c",

                    "secondary": "#D926AA",

                    "accent": "#1FB2A5",

                    "neutral": "#191D24",

                    "base-100": "#2A303C",


                },
            },
        ],
    },

};
