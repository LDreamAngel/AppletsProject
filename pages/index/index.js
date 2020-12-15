//Page Object
// 0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList:[{
      image_src:'https://s11.mogucdn.com/mlcdn/c45406/201124_2jl21aihfj951jd3lh2751ah8igdh_1060x367.jpg_999x999.v1c0.81.webp'
    },{
      image_src:'https://s18.mogucdn.com/mlcdn/c45406/201123_09j78h973lfh72kekgj4c8h62h61c_1060x367.png_999x999.v1c0.81.webp'
    },{
      image_src:'https://s17.mogucdn.com/mlcdn/c45406/201124_0e19ejki099766i7jgc6bjbb6j7eh_1060x367.png_999x999.v1c0.81.webp'
    }],
    // 导航 数组
    catesList:[{
      name:'分类',
      image_src:'https://gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp'
    },{
      name:'秒杀',
      image_src:'https://img.pddpic.com/goods/2020-04-29/798a43c5ae721a5d3dbbcbd5f95488db.png?imageView2/2/w/117/q/80'
    },{
      name:'超市购',
      image_src:'https://gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp'
    },{
      name:'苏宁易购',
      image_src:'https://gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp'
    }],
    floorList:[{
      floor_title:'品牌女装',
      product_list:[{
        image_src:'../../static/images/1_0.jpg'
      },{
        image_src:'../../static/images/1_1.jpg'
      },{
        image_src:'../../static/images/1_2.jpg'
      }]
    }]
  },
  // 页面开始加载 就会触发
  //options(Object)
  onLoad: function(options) {
    // this.getSwiperList()
  },
  // 1 发送异步请求获取轮播图数据
  getSwiperList(){
    // wx.request({
    //   url: '/home/swiperdata', //仅为示例，并非真实的接口地址
    //   success:(result)=>{
    //     this.setData({
    //       swiperList:result
    //     })
    //   }
    // })
    request({url: '/home/swiperdata'})
    .then(result =>{
          this.setData({
            swiperList:result
          })
    })
  }
});
  