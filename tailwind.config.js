/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '12xl': '12rem',
      },
      fontFamily: {
        title: ['DynaPuff', 'ui-sans-serif', 'system-ui'],
        body: ['ui-sans-serif', 'system-ui'],
        dyna: ['DynaPuff', 'sans-serif'],
      },
      animation: {
        floating: 'floating 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        floatingSecondary: 'floatingSecondary 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        tilting: 'tilting 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        tilting2: 'tilting 5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: `translateY(${Math.floor(Math.random() * 5)}vh)` },
        },
        tilting: {
          '0%, 100%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(-2deg)' },
        },
        tilting2: {
          '0%, 100%': { transform: `rotate(${Math.floor(Math.random() * 25)}deg)` },
          '50%': { transform: `rotate(-${Math.floor(Math.random() * 25)}deg)` },
        },
        floatingSecondary: {
          '0%, 100%': { transform: `translateY(0)` },
          '50%': { transform: `translateY(${Math.floor(Math.random() * 5)}vh)` },
        },
      },
    },
  },
  plugins: [],
}

