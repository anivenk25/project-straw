/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#f3f7ff",
        slateblue: "#043caa",
        gray: {
          "100": "#93939a",
          "200": "#898989",
          "300": "#252539",
          "400": "#242424",
          "500": "rgba(137, 137, 137, 0.2)",
          "600": "rgba(255, 255, 255, 0.1)",
          "700": "#7a7a7a",
        },
        black: "#000",
        mediumseagreen: {
          "100": "#1bc768",
          "200": "#0a9d4c",
        },
        darkslategray: "#333",
        white: "#fff",
        lavender: {
          "100": "#ececff",
          "200": "#dee9ff",
        },
        whitesmoke: {
          "100": "#f8fafc",
          "200": "#f7fafc",
          "300": "#f3f3f3",
          "400": "#f1f1f1",
          "500": "#eceef0",
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
        mistyrose: "#ffdfe4",
      },
      spacing: {},
      fontFamily: {
        avenir: "Avenir",
        manrope: "Manrope",
      },
      borderRadius: {
        "31xl": "50px",
        "81xl": "100px",
        "41xl": "60px",
      },
    },
    fontSize: {
      lg: "18px",
      "17xl": "36px",
      "5xl": "24px",
      base: "16px",
      xs: "12px",
      sm: "14px",
      xl: "20px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
