/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          // Huvudfärger inspirerade av bilden
          primary: {
            50: '#FDFCFB',    // Nästan vit, för bakgrunder
            100: '#F9F7F5',   // Lättaste beige/off-white
            200: '#F2EDE7',   // Lätt beige
            300: '#EBD9C7',   // Mellanbeige
            400: '#DCC6AD',   // Mörkare beige/sand
            500: '#CBAE92',   // Beige/taupe som basfärg
            600: '#B0967A',   // Dämpad brun/beige
            700: '#947D63',   // Mörkare brun/grå
            800: '#79654B',   // Djupare brun
            900: '#5E4C33',   // Mycket mörk brun för text/kontrast
          },
          // Accentfärger inspirerade av guld/rostiga toner
          accent: {
            gold: '#B8860B', // Mjuk guldton (standard i Tailwind)
            brown: '#8B4513', // En djupare, varmare brun
            velvet: '#8D6F5B', // En mjukare, dämpad brun/rosé som påminner om sammet
          },
          // Standard gråskala om du fortfarande behöver den, anpassad för att matcha de nya tonerna
          gray: {
            50: '#F8F8F8',
            100: '#ECECEC',
            200: '#DCDCDC',
            300: '#C2C2C2',
            400: '#A0A0A0',
            500: '#8A8A8A',
            600: '#6C6C6C',
            700: '#4F4F4F',
            800: '#333333',
            900: '#1A1A1A',
          },
        },
        fontFamily: {
          // Exempel på teckensnitt. Du måste länka in dem i head om du använder Google Fonts.
          // För mer lyxig känsla, tänk:
          // Rubriker: Playfair Display, EB Garamond, Lora (serif)
          // Brödtext: Open Sans, Lato, Montserrat (sans-serif)
          heading: ['Playfair Display', 'serif'], // Behöver importeras från Google Fonts
          body: ['Open Sans', 'sans-serif'], // Behöver importeras från Google Fonts
        },
      },
    },
    plugins: [],
  }