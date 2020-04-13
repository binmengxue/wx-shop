// components/Cateory/CatepryLeft.js
Component({
  /**
   * 组件的属性列表
   * cateorysList定义父亲传过来参数
   */
  properties: {
    cateorysList:{
      type: Array,
      value: []
    },
    currentId:{
      type:Number,
      value:0
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentId:3
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(event){
      console.log(this.properties)
      const {id} = event.currentTarget.dataset;
      console.log(id)
      this.setData({
        currentId: id
        // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
      })
       //把数据传给父
       this.triggerEvent('getId',{mId:id});
    }
  }
})
