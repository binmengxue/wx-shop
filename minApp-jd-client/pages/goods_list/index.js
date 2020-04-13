import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    tabs: [
      {
        id: 1,
        value: "销量",
        isActive: true
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    category_id:0,//商品ID
    goodsList:[],//所有的商品
    keyType:2,//2销量1价格
    pageNum:1,//页码
    total:1,//总数
    noData:false
  },
  onLoad: function (options) {
    this.setData({
      category_id:options.mId
    });
    this.getGoodsList();
  },
  // 获取商品列表数据
  async getGoodsList (){
    const res=await request({
      url:"/goods",
      data:{
        mId:this.data.category_id,
        pageNum:this.data.pageNum,
        pageSize:5,
        keyType:this.data.keyType
      }
    });
    if(res.statusCode===200){
      const total=res.data.total;
      this.totalPages=Math.ceil(total/4);
      this.setData({
        // 拼接了数组
        goodsList:[...this.data.goodsList,...res.data.goods],
        total:total,
        noData:false
      });
      wx.stopPullDownRefresh();  
    }else{
      this.setData({
        noData:true
      });
    }
  },
  // 标题点击事件 从子组件传递过来
  handleTabsItemChange(e){
    // 1 获取被点击的标题索引
    const {index}=e.detail;
    let keyType=2;
    if(index===0){
      keyType=2;
    }else{
      keyType=1;
    }
    // 2 修改源数组
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    // 3 赋值到data中
    this.setData({
      tabs,
      keyType,
      pageNum:1,
      goodsList:[]
    })
    this.getGoodsList();
  },
  // 页面上滑 滚动条触底事件
  onReachBottom(){
    //  1 判断还有没有下一页数据
      if(this.data.pageNum>=this.totalPages){
        // 没有下一页数据
        wx.showToast({ title: '没有下一页数据' });
      }else{
        let pageNum=this.data.pageNum;
           pageNum++
        this.setData({
          pageNum
        })
        this.getGoodsList();
      }
  },
  // 下拉刷新事件 
  onPullDownRefresh(){
    // 1 重置数组
    this.setData({
      goodsList:[],
      pageNum:1
    })
    // 3 发送请求
    this.getGoodsList();
  }
})