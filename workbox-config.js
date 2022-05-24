module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,css,php,png,svg,html,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};