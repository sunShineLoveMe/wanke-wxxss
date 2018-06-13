// pages/member/memberInfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      date: '2016-09-01',
      switch1Checked: true,
      active: false,
      genderName: "男",
      src: '',
      region: ['广东省', '广州市', '海珠区'],
      customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     
  },
  
  onLoad(option) {
      let { avatar } = option
      if (avatar) {
          this.setData({
              src: avatar
          })
      }
  },
  // 上传头像
  uploadAvator: function() {
      app.globalData.filePath = "../member/memberInfo";
      wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success(res) {
              const src = res.tempFilePaths[0]
              wx.redirectTo({
                  url: `../upload/upload?src=${src}`
              })
          }
      })
  },

  changeGender: function() {
      console.log(this.data.active);
      if(this.data.active) {
          this.setData({
              active: false,
              genderName: "男"
          });
      } else {
          this.setData({
              active: true,
              genderName: "女"
          });
      }
      
  },

  bindDateChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          date: e.detail.value
      });
    }
})