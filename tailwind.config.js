// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths to your template files
    './public/index.html',
  ],
  theme: {
    extend: {
      // Extend Tailwind's default theme here
      colors: {
        'primary-blue': '#3490dc',
        'secondary-green': '#1abc9c',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here
  ],
};