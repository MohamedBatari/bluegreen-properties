/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 🟦 Brand Colors (BlueGreen Properties)
        brand: {
          50: '#E8F3F6',   // very light blue-tint background
          100: '#C7E0E8',
          200: '#9CC5D3',
          300: '#6FA9BD',
          400: '#3D819C',   // mid-blue accent
          500: '#033C4A',   // main teal-blue from logo
          600: '#022E3A',
          700: '#02222B',
          800: '#011A21',
          900: '#01121B',   // deep navy background (main site)
        },

        // 🟨 Gold Accent (Luxury touch)
        gold: '#EAB308',
        'gold-dark': '#B45309',

        // 🖤 Neutral / Text Colors
        dark: '#0B0F19',
        light: '#F9FAFB',
        white: '#FFFFFF',
      },

      fontFamily: {
        // Optional: looks premium and clean
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },

      boxShadow: {
        // subtle golden glow
        gold: '0 0 20px rgba(234,179,8,0.35)',
      },
    },
  },
  plugins: [],
};
