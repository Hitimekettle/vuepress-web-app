const helper = require('./../helper/')

module.exports = {
  repo: 'nicejade/vuepress-web-app',
  editLinks: false,
  docsDir: './dist',
  algolia: {
    apiKey: '6290673b2059b2332d64c13d248877ad',
    indexName: 'lovejade',
    inputSelector: '',
    debug: false
  },
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '博客',
          link: '/zh/blog/',
        },
        {
          text: '文章',
          link: '/zh/article/'
        },
        {
          text: '应用',
          link: '/zh/application/'
        }
      ],
      sidebar: {
        '/zh/blog/': helper.utils.genSidebarConfig('轩帅の博客', './docs/zh/blog/', false),
        '/zh/article/': helper.utils.genSidebarConfig('最新文章', './docs/zh/article/', false)
      }
    },
    '/en/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'Application',
          link: '/en/application/'
        }
      ]
    }
  }
}