/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d40025", // Primary red color
        secondary: "#F2C94C", // Secondary yellow color
        accent: "#bf0021", // Accent color (orange)
        success: "#28A745", // Success color (green)
        danger: "#DC3545", // Danger color (red)
        warning: "#FFC107", // Warning color (yellow)
        info: "#17A2B8", // Info color (cyan)
        light: "#F8F9FA", // Light background color
        dark: "#343A40", // Dark text color
      },
    },
  },
  plugins: [],
}
