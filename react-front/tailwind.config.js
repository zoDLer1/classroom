/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            boxShadow: {
                custom: '0 10px 30px rgba(10, 59, 82, 0.20)',
                '70_20': '0 10px 70px 0 rgb(0 0 0 / 20%)'
            },
            minHeight:{
                50: '12.5rem',
                55: '15rem',
                57: '17.75rem',
                58: '18.75rem'
            },
            width: {
                200: '53rem',
                192: '50rem',
                134: '37.5rem',
                120: '30.5rem',
                75: '19.375rem'
            },
            height:{
                46: '11.6rem',
            },
            borderRadius: {
                xl: '3.5rem',
                xs: '0.625rem',
                '2xs': '1.25rem'
            },
            spacing: {
                2.5: '0.625rem',
                18: '4.375rem'
            },
            fontSize: {
                '1.5lg': '1.1875rem',
                '2.5xl': '1.75rem',
                '1.5xl': '1.375rem'
            },
            colors: {

                status: {
                    error: {
                        400: '#974a25',
                        DEFAULT: '#D61414'
                    },
                    warn: {
                        100: '#9d9922'
                    },
                    correct: {
                        DEFAULT: '#1AD92C',
                        100: '#18b126',
                        200: '#6e9d22'
                    }
                },

                primary: {
                    DEFAULT: '#0388D4',
                    faded: '#75B8DF',
                    50: '#d5f0ff',
                    100: '#bbe6ff',
                    300: 'rgb(36, 105, 207)',
                    400: 'rgb(24, 90, 188)',
                    800: 'rgba(3, 136, 212, 0.2)'
                },
                gray: {
                    450: '#B6B2B1',
                    320: '#606061',
                    750: '#3c4043',
                    470: '#79797a'
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

