/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Monserrat', 'sans-serif'],
			},
			colors: {
				purple: '#5300c7',
				mainText: '#424242',
				secondary: '#E2E2E2',
				pale: '#6d6d6e',
				error: '#FF5733',
				success: '#61DE19',
			},
			backgroundImage: {
				'hero-background':
					"url('https://images.unsplash.com/photo-1572061485545-9399b66acedd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
			},
		},
	},
	plugins: [],
};
