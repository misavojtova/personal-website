module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			transitionDuration: {
				0: '0ms',
				1500: '1500ms',
			},
			colors: {
				main: '#0A0A0AEB',
				'cm-blue': '#77BEFF',
			},
			fontFamily: {
				rubik: ['Rubik'],
				rubikMonoOne: ['Rubik Mono One'],
			},
			backgroundImage: (theme) => ({
				'main-img': "url('/bcg.jpg')",
			}),
		},
	},
	plugins: [],
};
