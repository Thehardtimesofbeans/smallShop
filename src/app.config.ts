export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/goodsDetail/index',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '้ฆ้กต'
    },
    {
      pagePath: 'pages/my/index',

      text: 'ๆ็'
    }
    ]
  }
})
