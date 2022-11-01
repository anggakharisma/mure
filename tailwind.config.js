/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#977FD7',
				secondary: '#F5A9CB',
				accent: '#FFFFC2'
			},
		},
	},
	plugins: [],
};
