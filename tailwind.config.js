/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class'],
  theme: { 
    extend: {
      colors:{
        black:"#000",
        paragraph:"#333333"
      },
      animation: {
        'spin-slow': 'spin 1.3s linear infinite',
      },
      backgroundImage:{
        "blog":"url('/assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg')"
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        "custom-break": '968px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    fontFamily:{
  Mania: "'Metal Mania', cursive"
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}