/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8fafc",
          "200": "#f7fafc",
          "300": "#f3f3f3",
          "400": "#f1f1f1",
          "500": "#eceef0",
        },
        white: "#fff",
        gray: {
          "100": "#93939a",
          "200": "#898989",
          "300": "#252539",
          "400": "#242424",
          "500": "rgba(137, 137, 137, 0.2)",
          "600": "rgba(255, 255, 255, 0.1)",
        },
        pink: "#ffc3bf",
        dimgray: "#585858",
        thistle: "#ddd4fb",
        darkseagreen: "#bef0c7",
        navajowhite: "#ffdaa7",
        mediumslateblue: "#0067ff",
        gainsboro: {
          "100": "#e3e3e3",
          "200": "#d9d9d9",
        },
        crimson: "#e13030",
        honeydew: "#e9ffe5",
        mediumseagreen: "#0a9d4c",
        mistyrose: "#ffdfe4",
        lavender: "#ececff",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "81xl": "100px",
        "41xl": "60px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      "13xl": "32px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
