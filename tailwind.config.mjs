/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        // Brand (PPT/워드와 동일)
        red: {
          DEFAULT: "#E53935",
          dark: "#C62828",
          light: "#FFEBEE",
        },
        conversion: "#E53935",
        asset: "#1E88E5",
        awareness: "#8E24AA",
        typeA: "#E53935",
        typeB: "#1E88E5",
        typeC: "#757575",
        typeD: "#8E24AA",
        ink: {
          black: "#1A1A1A",
          dark: "#222222",
          body: "#333333",
          mute: "#6B6B6B",
          light: "#999999",
        },
        bg: {
          light: "#F7F7F7",
          card: "#FAFAFA",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', '"Noto Sans"', "system-ui", "sans-serif"],
        en: ['"Noto Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
