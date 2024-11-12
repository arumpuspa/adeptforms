import type { Config } from "tailwindcss"
const primary = "hsla(208, 100%, 43%, 1)";
const secondary = "hsla(190, 81%, 42%, 1)";
const config  = {

  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,css,,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,css,md,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "15px",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1392px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        default: {
          50: "hsl(var(--default-50) / <alpha-value>)",
          100: "hsl(var(--default-100) / <alpha-value>)",
          200: "hsl(var(--default-200) / <alpha-value>)",
          300: "hsl(var(--default-300) / <alpha-value>)",
          400: "hsl(var(--default-400) / <alpha-value>)",
          500: "hsl(var(--default-500) / <alpha-value>)",
          600: "hsl(var(--default-600) / <alpha-value>)",
          700: "hsl(var(--default-700) / <alpha-value>)",
          800: "hsl(var(--default-800) / <alpha-value>)",
          900: "hsl(var(--default-900) / <alpha-value>)",
          950: "hsl(var(--default-950) / <alpha-value>)",
        },

        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          50: "hsl(var(--primary-50) / <alpha-value>)",
          100: "hsl(var(--primary-100) / <alpha-value>)",
          200: "hsl(var(--primary-200) / <alpha-value>)",
          300: "hsl(var(--primary-300) / <alpha-value>)",
          400: "hsl(var(--primary-400) / <alpha-value>)",
          500: "hsl(var(--primary-500) / <alpha-value>)",
          600: "hsl(var(--primary-600) / <alpha-value>)",
          700: "hsl(var(--primary-700) / <alpha-value>)",
          800: "hsl(var(--primary-800) / <alpha-value>)",
          900: "hsl(var(--primary-900) / <alpha-value>)",
          950: "hsl(var(--primary-950) / <alpha-value>)",
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          50: "hsla(190, 81%, 90%, 1)",
          100: "hsla(190, 81%, 82%, 1)",
          200: "hsla(190, 81%, 74%, 1)",
          300: "hsla(190, 81%, 66%, 1)",
          400: "hsla(190, 81%, 58%, 1)",
          500: "hsla(190, 81%, 50%, 1)",
          600: secondary,
          700: "hsla(190, 81%, 34%, 1)",
          800: "hsla(190, 81%, 28%, 1)",
          900: "hsla(190, 81%, 20%, 1)"
        },
        "gray-darker": "#504747",
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          700: "#be185d",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          700: "#15803d",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          700: "#0f766e",
          foreground: "hsl(var(--info-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          700: "#a16207",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(15, 22, 36, 0.06), 0px 1px 3px 0px rgba(15, 22, 36, 0.10)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        half: "50%",
        full: "100%"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      spacing: {
        7.5: "1.875rem", // 30px
        15: "3.75rem", // 60px
        22: "5.5rem", // 88px
        25: "6.25rem", // 100px
        26: "6.5rem", // 104px
        30: "8.5rem", // 136px
        32: "9rem", // 144px
        68: "17rem" // 272px
      },
      padding: {
        px: "1px"
      },
      margin: {
        px: "1px",
        "-px": "-1px",
        "-2px": "-2px",
        auto: "auto"
      },
      fontSize: {
        micro: ".5rem", // 8px
        xxs: ".625rem", // 10px
        md: "1.125rem" // 18px
      },
      fontWeight: {
        hairline: 100
      },
      fontFamily: {
        brand: ["Source Sans Pro", "sans-serif"],
        sans: ["Source Sans Pro", "sans-serif"],
        serif: ["Source Sans Pro", "sans-serif"],
        inconsolata: ["Inconsolata"],
        source: ["source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New", "monospace"]
      },
      minWidth: {
        site: "18.75rem",
        "input-mini": "17.5rem",
        "input-small": "31.25rem",
        "input-medium": "36.3125rem",
        "input-large": "61.45rem",
        "button-mini": "5.5rem",
        "button-small": "7rem",
        "button-medium": "9.875rem",
        "button-large": "10rem"
      },
      width: {
        arrow: ".8rem",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
        "12/25": "48%"
      },
      maxWidth: {
        sm: "30rem",
        md: "40rem",
        lg: "50rem",
        xl: "60rem",
        "2xl": "70rem",
        "3xl": "80rem",
        "4xl": "90rem",
        "5xl": "100rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/5": "60%",
        "4/5": "80%",
        "9/10": "90%",
        "site-mini": "17.5rem",
        "site-small": "31.25rem",
        "site-medium": "43.75rem",
        "site-large": "56.25rem",
        site: "73.75rem",
        screen: "100vw"
      },
      height: {
        arrow: ".4rem",
        px: "1px",
        4: "1rem",
        5: "1.25rem",
        8: "1.8rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        16: "4rem",
        24: "6rem",
        32: "8rem"
      },
      borderWidth: {
        1: "1px",
        5: "5px"
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6
      },
      fill: {
        transparent: "transparent"
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%"
      },
      outline: {
        none: ["2px solid transparent", "2px"],
        white: ["2px dotted white", "2px"],
        black: ["2px dotted black", "2px"]
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
export default config