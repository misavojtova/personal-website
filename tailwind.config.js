module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'btn-anim': {
          '0%, 100%': {
            transform: 'rotate(-1deg)',
          },
          '50%': {
            transform: 'rotate(1deg)',
          },
        },
      },
      animation: {
        'btn-anim': 'btn-anim 0.15s none infinite ',
      },
      transitionDuration: {
        0: '0ms',
        1500: '1500ms',
      },
      colors: {
        main: '#0A0A0AEB',
        'main-color': '#b73a55',
      },
      fontFamily: {
        hachi: ['hachi maru pop'],
      },
      backgroundImage: theme => ({
        'main-img': "url('assets/images/background.jpg')",
      }),
    },
  },
  plugins: [],
};
