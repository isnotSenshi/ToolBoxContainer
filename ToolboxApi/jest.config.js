module.exports = async () => {
	return {
		verbose: true,
		setupFiles: ['./setup-env.js'],
		collectCoverageFrom: [
			'**/*.js',
			'!jest.config.js',
			'!setup-env.js',
			'!.eslintrc.js',
			'!coverage/**'
		]
	}
}
