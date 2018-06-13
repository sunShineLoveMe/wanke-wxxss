# wanke-wxxss
万科微信小程序

# 关于订单 选择地址列表，返回订单页携带地址信息，两种方式，一种是数据缓存，另一种是全局变量globalData
不过建议用异步缓存

// 存入信息
wx.setStorage({
  key:"key",
  data:"string/object"
});

// 读出信息
wx.getStorage({
  key: 'key',
  success: function(res) {
      console.log(res.data)
  } 
});

// 清楚缓存,
wx.removeStorage({
  key: 'key',
  success: function(res) {
    console.log(res.data)
  } 
})

#关于图像裁剪 这边用的是一个插件
具体详情   https://we-plugin.github.io/we-cropper/#/
使用方法 直接参考就行！


