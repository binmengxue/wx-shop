// pages/category/category.js
import { request } from "../../request/index.js";
Page({
  data: {
    cateorysList:[],
    goodsList:[],
    noData:false,
    id:3//二级分类的ID
  },
  onLoad: function (options) {
    this.setData({
      id:options.category_id ||3
    })
    this.getGoodsList(1);
  },
  //获取分类列表
  getGoodsList(id){
    request({ url: "/category",data:{categoryId:id }})
    .then(result => {
      if(result.statusCode==200){
        if(id==1){
          this.setData({
            cateorysList: result.data,
            noData:false
          })
          this.getGoodsList(this.data.id)
        }else{
          this.setData({
            goodsList: result.data,
            noData:false
          })
        }
      }else{
        this.setData({
          noData:true
        })
      }
    })
  },
  getIdEvent(e){
    const proutId=e.detail.mId;
    this.getGoodsList(proutId)
  },
  onReady: function () {
   
  }
})
