// pages/feedback/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "体验问题",
        isActive: true
      },
      {
        id: 1,
        value: "商品、商家投诉",
        isActive: false
      }
    ],
    chooseImgs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleTabsItemChange(e) {
    // 1 获取被点击的标题索引
    const { index } = e.detail;
    // 2 修改源数组
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    // 3 赋值到data中
    this.setData({
      tabs
    })
  },
  handleChooseImg() {
    // 2 调用小程序内置的选择图片api
    wx.chooseImage({
      // 同时选中的图片的数量
      count: 9,
      // 图片的格式  原图  压缩
      sizeType: ['original', 'compressed'],
      // 图片的来源  相册  照相机
      sourceType: ['album', 'camera'],
      success: (result) => {
        this.setData({
          // 图片数组 进行拼接 
          chooseImgs: [...this.data.chooseImgs, ...result.tempFilePaths]
        })
      }
    });
  },
  handleRemoveImg(e){
    const { index } = e.currentTarget.dataset;
    let {chooseImgs}=this.data;
    chooseImgs.splice(index, 1);
    this.setData({
      chooseImgs
    })
  },
  // 文本域的输入的事件
  handleTextInput(e) {
    this.setData({
      textVal: e.detail.value
    })
  },
   // 提交按钮的点击
   handleFormSubmit() {
      // 1 获取文本域的内容 图片数组
      const { textVal, chooseImgs } = this.data;
      // 2 合法性的验证
      if (!textVal.trim()) {
        // 不合法
        wx.showToast({
          title: '输入不合法',
          icon: 'none',
          mask: true
        });
        return;
      }
      wx.showLoading({
        title: "正在上传中",
        mask: true
      });
      // 判断有没有需要上传的图片数组
      if (chooseImgs.length != 0) {
        chooseImgs.forEach((v, i) => {
          wx.uploadFile({
            url: `http://images.ac.cn/api/upload??token=7c89a5e940f66a7d27d5de78cca1&apiType=Ali`,
            filePath: v,
            name: 'image',
            formData:{
              'image':'image' ,
          
             },
            success: (result) => {
              console.log(result);
              //let url = JSON.parse(result.data).url;
             // this.UpLoadImgs.push(url);
              // 所有的图片都上传完毕了才触发  
              if (i === chooseImgs.length - 1) {
                wx.hideLoading();
                console.log("把文本的内容和外网的图片数组 提交到后台中");
                //  提交都成功了
                // 重置页面
                this.setData({
                  textVal: "",
                  chooseImgs: []
                })
                // 返回上一个页面
                wx.navigateBack({
                  delta: 1
                });

              }
            }
          });
        })
      }else{
        wx.hideLoading();
        console.log("只是提交了文本");
        wx.navigateBack({
          delta: 1
        });
          
      }
  }

})