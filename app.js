App({
  globalData: {
    token: null
  },
  onLaunch: function() {
    this.login()
  },
  login: function() {
    wx.login({
      success: res => {
        console.log('login code:', res.code)
        wx.request({
          url: 'http://localhost:8080/demo/wx/index',
          method: 'post',
          data: {code: res.code},
          success: res => {
            console.log('token:', res.data, res.data.msg)
            this.globalData.token = res.data.token
            wx.setStorage({
              key: 'token',
              data: res.data.token,
            })
          }
        })
      }
    })
  }
})
