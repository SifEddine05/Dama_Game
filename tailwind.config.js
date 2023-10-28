/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '4xl': [
            '-5px -5px 10px rgb(256, 256, 256,0.5)',
            
            '5px 5px 10px  rgb(256, 256, 256,0.5)'
        ]
      },
    },
  },
  plugins: [],
}