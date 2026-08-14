/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5",
        foreground: "#191A1D",
        muted: "#F0EBE1",
        "muted-foreground": "#6C707A",
        border: "#EAE3D8",
        input: "#EAE3D8",
        gold: {
          50: "#FAF6EF",
          100: "#F3EBDC",
          200: "#E6D6BC",
          300: "#D6BF99",
          400: "#C5A880",
          500: "#B59468",
          600: "#9C794E",
          700: "#7E5E3A",
          800: "#5D452B",
        },
        stone: {
          50: "#FBF9F7",
          100: "#F5F1EB",
          200: "#EAE3D8",
          300: "#D8CEBE",
          400: "#B7A895",
          800: "#2B2823",
          900: "#1A1916",
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseSlow: 'pulseSlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
