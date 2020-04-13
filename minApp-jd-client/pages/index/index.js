import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
import { dataList} from "./data.js";
Page({
  data: {
    swiperList:[],
    catesList:[],
    floorList:dataList
  },
  onLoad: function (options) {
  this.getSwiperList();
  this.getnavs();

  console.log(dataList);
  },
  // 获取轮播图数据
  async getSwiperList(){
    const result=await request({ url: "/swiper" });
    this.setData({
      swiperList: result.data
    })
    // request({ url: "/swiper" })
    // .then(result => {
    //   this.setData({
    //     swiperList: result.data
    //   })
    // })
  },
  //获取导航
  getnavs(){
    request({ url: "/navs" })
    .then(result => {
      this.setData({
        catesList:result.data
      })
    })
  },
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})