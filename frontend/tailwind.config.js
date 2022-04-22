module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      animation: {
        pop: "pop 100ms",
        shake: "shake 0.5s ease-in",
      },
      keyframes: {
        pop: {
          "from": {
            transform: "scale(0.8)",
            opacity: "0"
          },
          "40%": {
            transform: "scale(1.1)",
            opacity: "1"
          },
        },
        shake: {
          "25%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
          "75%": { transform: "rotate(-30deg)" },
          "100%": { transform: "rotate(30deg)" },
        },
      },

    },
  },
  plugins: [],
};
