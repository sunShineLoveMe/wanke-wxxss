// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  // 删除地址
  delAddress: function() {
      wx.showModal({
          cancelColor: "#bbb",
          confirmColor: "#ee7c74",
          content: '确定删除地址?',
          success: function (res) {
              if (res.confirm) {
                  console.log('用户点击确定')
              } else if (res.cancel) {
                  console.log('用户点击取消')
              }
          }
      })
  },

  // 编辑地址
  editAddress: function() {
      wx.redirectTo({
          url: 'address/add',
      })
  },
  // 新增地址
  addAddress: function () {
      wx.redirectTo({
          url: 'address/add',
      })
  }
})