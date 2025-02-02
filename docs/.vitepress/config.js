export default {
  title: "Marketing & Data Analytics Documentation",
  description: "Comprehensive documentation for marketing strategies and data analytics",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Marketing', link: '/marketing/' },
      { text: 'Analytics', link: '/analytics/' },
    ],
    sidebar: {
      '/marketing/': [
        {
          text: 'Marketing',
          items: [
            { text: 'Overview', link: '/marketing/' },
            { text: 'Digital Marketing', link: '/marketing/digital-marketing' },
            { text: 'Content Strategy', link: '/marketing/content-strategy' },
            { text: 'Social Media', link: '/marketing/social-media' },
            { text: 'Email Marketing', link: '/marketing/email-marketing' },
          ]
        }
      ],
      '/analytics/': [
        {
          text: 'Data Analytics',
          items: [
            { text: 'Overview', link: '/analytics/' },
            { text: 'Data Collection', link: '/analytics/data-collection' },
            { text: 'Data Analysis', link: '/analytics/data-analysis' },
            { text: 'Visualization', link: '/analytics/visualization' },
            { text: 'Reporting', link: '/analytics/reporting' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' }
    ]
  }
}