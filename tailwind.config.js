const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [fontFamily.sans, "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Maternidade custom colors
        maternity: {
          blue: {
            50: '#F0F9FF',
            500: '#3B82F6',
            600: '#2563EB',
          },
          pink: {
            50: '#FDF2F8',
            400: '#FBB6CE',
            500: '#EC4899',
          },
          green: {
            500: '#10B981',
          },
          gradient: 'hsl(320 100% 95%)',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'maternity-gradient': 'linear-gradient(135deg, hsl(220 100% 95%) 0%, hsl(320 100% 95%) 100%)',
        'card-gradient': 'linear-gradient(145deg, hsl(220 70% 98%) 0%, hsl(320 70% 98%) 100%)',
      },
      boxShadow: {
        'maternity': '0 10px 30px -15px hsl(220 70% 50% / 0.3)',
        'maternity-lg': '0 20px 40px -20px hsl(220 70% 50% / 0.4)',
      },
    },
  },
  plugins: [],
}