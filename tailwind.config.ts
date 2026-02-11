import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          0: "hsl(200, 60%, 99%)",
          100: "hsl(0, 0%, 93%)",
          200: "hsl(217, 61%, 90%)",
          300: "hsl(0, 0%, 78%)",
          600: "hsl(226, 11%, 37%)",
          700: "hsl(225, 23%, 24%)",
          800: "hsl(226, 25%, 17%)",
          900: "hsl(227, 75%, 14%)",
        },
        secondary: {
          400: "hsl(3, 86%, 64%)",
          500: "hsl(3, 71%, 56%)",
          700: "hsl(3, 77%, 44%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
