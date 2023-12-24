/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./index.html",
    "./js/**"
  ],
  theme: {
    extend: {
      colors: {
        lightModeColors: {
          neatBlue: "#0079FF",
          grayish: "#697C9A",
          darkBlue: "#4B6A9B",
          reallyDarkBlue: "#2B3442",
          whiteSmokish: "#F6F8FF",
          pureWhite : "#FEFEFE"
        },
        darkModeColors: {
          pureWhite: "#FFFFFF",
          darkish: "#141D2F",
          darkbluish : "#1E2A47",
        }
      },
    },
  },
  plugins: [],
}

