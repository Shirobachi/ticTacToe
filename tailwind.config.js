module.exports = {
	mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
			variants: {
				opacity: ({ after }) => after(['disabled'])
			}
		},
  },
  plugins: [],
}
