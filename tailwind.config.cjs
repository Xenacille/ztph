/** @type {import('tailwindcss').Config}*/
import flowbitePlugin from 'flowbite/plugin'
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#b3b4cf',
          100: '#9a9bbf',
          200: '#8182af',
          300: '#68689e',
          400: '#4f4f8e',
          500: '#35367e',
          600: '#1c1d6e',
          700: '#03045e',
          800: '#030455',
          900: '#02034b',
        },
      },
    },
  },

  plugins: [flowbitePlugin],
}

module.exports = config
