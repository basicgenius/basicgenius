module.exports = {
	siteMetadata: {
	title: `Gatsby Default Starter`,
	},
  	plugins: [`gatsby-plugin-react-helmet`],
  	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-106150903-1',
		},
	  },
	]
}
