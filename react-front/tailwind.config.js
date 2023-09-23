/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            boxShadow:{
                custom: '0 10px 30px rgba(10, 59, 82, 0.20)',
                '70_20': '0 10px 70px 0 rgb(0 0 0 / 20%)'
            },

            colors:{
                primary: {
                    DEFAULT: '#0388D4',
                    faded: '#75B8DF',
                    100: '#bbe6ff',
                    300: 'rgb(36, 105, 207)',
                    50: '#d5f0ff'
                },
                gray: {
                    450: '#B6B2B1',
                    320: '#606061',
                    750: '#3c4043'
                }            
            },
            transitionProperty: {
                height: 'height',
                box_shadow: 'box-shadow',
                background_color: 'background-color'                
            }
        },
    },
    plugins: [],
}

