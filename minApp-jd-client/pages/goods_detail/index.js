import { request } from '../../request/index.js';
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    goodsObj: {},
    isCollect: false,
  },
  onLoad: function (options) {
    const { produId } = options;
    this.getGoodsDetail(produId);
  },
  // 获取商品详情数据
  async getGoodsDetail(produId) {
    const res = await request({
      url: '/detail',
      data: { produId: produId },
    });
    let richTextHTML = res.data[0].product_introduce
      .replace(/\<img/g, '<img style="width:100%;height:auto;display:block"')
      .replace(/em;/g, 'rpx;')
      .replace(/\.webp/g, '.jpg');
    console.log(richTextHTML);
    this.setData({
      goodsObj: {
        product_id: res.data[0].product_id,
        name: res.data[0].name,
        product_price: res.data[0].product_price,
        product_introduce: richTextHTML,
        imgsrc: res.data[0].imgsrc.replace(/\.webp/g, '.jpg'),
      },
    });
  },
  // 点击 加入购物车
  handleCartAdd() {
    this.GoodsInfo=this.data.goodsObj;
    // 1 获取缓存中的购物车 数组
    let cart = wx.getStorageSync('cart') || [];
    // 2 判断 商品对象是否存在于购物车数组中
    let index=-1
    if(cart==null){
      index=-1
    }else{
      index = cart.findIndex((v) => v.product_id === this.GoodsInfo.product_id);
    }
    if (index === -1) {
      //3  不存在 第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    } else {
      // 4 已经存在购物车数据 执行 num++
      cart[index].num++;
    };
    console.log(cart);
    // 5 把购物车重新添加回缓存中
    wx.setStorageSync('cart', cart);
    // 6 弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      // true 防止用户 手抖 疯狂点击按钮
      mask: true,
    });
  },
  handleCollect() {
    let isCollect = false;
    // 1 获取缓存中的商品收藏数组
    let collect = wx.getStorageSync('collect') || [];
    // 2 判断该商品是否被收藏过
    let index = -1;
    if (collect.length == 1) {
      index = -1;
    } else {
      index = collect.findIndex((v) => {
        return v.product_id === this.data.goodsObj.product_id;
      });
    }
    // 3 当index！=-1表示 已经收藏过
    if (index !== -1) {
      // 能找到 已经收藏过了  在数组中删除该商品
      collect.splice(index, 1);
      isCollect = false;
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        mask: true,
      });
    } else {
      // 没有收藏过
      collect.push(this.data.goodsObj);
      isCollect = true;
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        mask: true,
      });
    }
    // 4 把数组存入到缓存中
    wx.setStorageSync('collect', collect);
    // 5 修改data中的属性  isCollect
    this.setData({
      isCollect,
    });
  },
});
