/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "1180px",
      },
    },
    extend: {
      textColor: {
        "dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
      },
      backgroundColor: {
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
      },
      fontSize: {
        sm: "15px",
      },
    },
  },
  plugins: [],
};
