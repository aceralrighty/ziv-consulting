/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nav_t_Color: "#1470AF",
        'nav_t_color-dark': "#FFFFFF",
        'body_t_color-dark': "#FFFFFF",
        body_t_Color: "#26261F",
        global_bg: "#C6C5B9",
        'global_bg_dark': "#393D3F",
        item_bg: "#E0DFD9",
        "item_bg_dark": '#2A2D2F',
      },
      transformOrigin: {
        "center":"center",
      },
      boxShadow: {
        '2xl': "10px 10px 20px rgba(0, 0, 0, 0.25)"
      },
      fontFamily: {
        'instru': ['var(--font-instru-regular)', 'serif'],
        'instru-italic': ['var(--font-instru-italic)', 'serif'],
      },
    },
  },
  plugins: [],
};
