// pages/user/index.js
Page({
  data: {
    userinfo:{},
    collect:[]
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    const collect=wx.getStorageSync('collect');
    this.setData({
      userinfo,
      collect
    })
    console.log(collect)
  }
})