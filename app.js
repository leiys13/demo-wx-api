App({

  onLaunch: function() {
    this.login()
  },

  login: function() {
    wx.login({
      success: res => {
        console.log('login code:', res.code)
        wx.request({
          url: 'http://localhost:8091/demo/wx/index?code='+res.code,
          method: 'POST',
          data: {},
          success: res => {
            console.log(res.data.code, res.data.data)
          }
        })
      }
    })
  }

})
