// pages/address/address/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      condition: true,
      region: ['广东省', '广州市', '海珠区'],
      customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  
  // 保存地址
  saveAddress: function() {
    wx.redirectTo({
        url: '../address',
    })
  },

  changeDefault: function() {
      let flag = false;
      if (this.data.condition) {
          flag = false;
      }else {
          flag = true;
      }  
      this.setData({
         condition: flag
      });
  },  

  bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          region: e.detail.value
      })
  }
})