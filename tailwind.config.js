/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nav_t_Color: "#1470AF",
        body_t_Color: "#000000",
        global_bg: "#EAEAEE"
      },
      transformOrigin: {
        "center":"center",
      },
      fontFamily: {
        instruItalic: ['var(--font-instru-regular)', 'serif'],
        instruRegular: ['var(--font-instru-italic)', 'serif'],
      },
    },
  },
  plugins: [],
};
