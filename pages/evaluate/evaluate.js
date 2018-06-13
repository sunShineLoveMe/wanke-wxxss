// pages/evaluate/evaluate.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      src: '',
      addImageArray: app.globalData.addImageArray,
      condition: app.globalData.condition
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
      let { avatar } = option;
      if (avatar) {
          this.setData({
              src: avatar
          });
      }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
        addImageArray: app.globalData.addImageArray,
        condition: app.globalData.condition
    });
  },

  // 上传头像
  uploadAvator: function () {
      app.globalData.filePath = "../evaluate/evaluate";
      wx.chooseImage({
          count: 2, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success(res) {
              const src = res.tempFilePaths[0]
              wx.redirectTo({
                  url: `../upload/upload?src=${src}`
              })
          }
      });
      app.globalData.condition = false;
      app.globalData.addImageArray = [false, true];
    //   this.setData({
    //       addImageArray: [1, 1]
    //   });
  },
  delImage: function() {
      console.log("删除");
  }
})