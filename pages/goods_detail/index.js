// pages/goods_detail/index.js
/**
 * 点击轮播图 预览大图
 *  - 给轮播图绑定点击事件
 *  - 调用小程序的api previewImage
 * 点击 加入购物车
 *  - 先绑定点击事件
 *  - 获取缓存中的购物车数据 数组格式
 *  - 先判断 当前的商品是否已经存在于 购物车
 *  - 已经存在 修改商品数据 执行购物车数量++ 重新把购物车数组 填充回缓存中
 *  - 不存在于购物车的数组中 直接给购物车数组添加一个新元素 新元素 带上 购买数量属性 num 重新把购物车数组 填充回缓存中
 *  - 弹出提示
 * 商品收藏
 *  - 页面onShow的时候 加载缓存中的商品收藏的数据
 *  - 判断当前商品是不是被收藏
 *    ~ 是 改变页面的图标
 *    ~ 不是 。。。
 *  - 点击商品收藏按钮
 *   ~ 判断该商品是否存在于缓存数组中
 *   ~ 已经存在 把该商品删除
 *   ~ 没有存在 把商品添加到收藏数组中 存入到缓存中即可
 */
import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{
      goods_id:"863151925442716",
      goods_name: "【现货闪发】欧普插排多功能插座排插接线板插头拖线板带线插线板",
      goods_price:13.5,
      goods_small_logo:"https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100005968/2020/0518/121/2ab3bf50-b0fb-494c-9dc3-f48cecf7ec96_720x909_70.jpg!85.webp",
      pics: [{
        imageIndex: 1,
        imageUrl: "https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0127/131/1e7bce6e-822f-4bd0-abdd-9d308baaf5c2_720x909_70.jpg!85.webp"
      }, {
        imageIndex: 2,
        imageUrl: "https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2020/1021/104/35017e4e-4673-441d-99d1-19e501172747_720x909_70.jpg!85.webp"
      }, {
        imageIndex: 3,
        imageUrl: "https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2020/1021/53/9e6d0766-b5cc-4b17-b426-047e7e95d10b_720x909_70.jpg!85.webp"
      }],
      goods_interoduce:'<img style="width:100%;" data-src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/80/5e1a10aa-c0dd-4896-ab46-6fed56310830.jpg!85.webp" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/80/5e1a10aa-c0dd-4896-ab46-6fed56310830.jpg!85.webp" lazy="loaded"><img style="width:100%;" data-src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/93/6761276b-5143-4e24-88f5-d350bdd87a05.jpg!85.webp" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/93/6761276b-5143-4e24-88f5-d350bdd87a05.jpg!85.webp" lazy="loaded"><img style="width:100%;" data-src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/124/9f41fd04-d536-4292-bcd1-d3becfedeb1c.jpg!85.webp" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/124/9f41fd04-d536-4292-bcd1-d3becfedeb1c.jpg!85.webp" lazy="loaded"><img style="width:100%;" data-src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/31/e8192d53-aa48-4e94-95e6-6a7ef2a67085.jpg!85.webp" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/31/e8192d53-aa48-4e94-95e6-6a7ef2a67085.jpg!85.webp" lazy="loaded"><img style="width:100%;" data-src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/30/3a11d9b9-8839-415c-9a7f-90da2b5a4e9c.jpg!85.webp" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/30/3a11d9b9-8839-415c-9a7f-90da2b5a4e9c.jpg!85.webp" lazy="loaded"><img style="width:100%;" data-src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/128/cb06e364-21db-4502-a41d-3d9ab6f0a73f.jpg!85.webp" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/128/cb06e364-21db-4502-a41d-3d9ab6f0a73f.jpg!85.webp" lazy="loaded"><img style="width:100%;" data-src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/116/31600b39-17dd-4f5e-abbe-01c2cc434e38.jpg!85.webp" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/116/31600b39-17dd-4f5e-abbe-01c2cc434e38.jpg!85.webp" lazy="loaded"><img style="width:100%;" data-src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/141/38722ac1-cbec-4ddd-bc11-bef50ae47878.jpg!85.webp" src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000823/2019/0124/141/38722ac1-cbec-4ddd-bc11-bef50ae47878.jpg!85.webp" lazy="loaded">'
    },
    // 表示商品是否被收藏过
    isCollect:false
  },

  // 商品对象
  GoodsInfo:{},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let options = currentPage.options;
    const {goods_id} = options;
    // this.getGoodsDetail(goods_id)

  },

  // 获取商品详情数据
  async getGoodsDetail(goods_id){
    const goodsObj = await request({url:"/goods/detail",data:{goods_id}});

    // 获取缓存中的商品收藏的数组
    let collect = wx.getStorageSync("collect")||[];
    // 判断当前商品是否被收藏
    let isCollect = collect.some(v=>v.goods_id === this.GoodsInfo.goods_id);

    this.setData({
      goodsObj,
      // iphone部分手机 不识别 webp图片格式
      // 最好找到后台 让他进行修改
      /*
        临时自己改 确保后台存在 1.webp=>1.jpg 
         - replace(/\.webp/g,'.jpg')
      */ 
     isCollect
    })
  },

  // 点击轮播图 放大预览
  handlePrevewImage(e){
    // 先构造要预览的图片数组
    const urls = this.data.goodsObj.pics.map(v=>v.imageUrl);
    // 接收传递过来的图片url
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
    })
  },

  // 点击加入购物车
   handleCartAdd(){
     // 获取缓存中的购物车数组
     let cart = wx.getStorageSync("cart") || [];
     // 判断 商品对象是否存在于购物车数组中
     this.GoodsInfo = this.data.goodsObj;
     let index = cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
     if(index===-1){
        // 不存在 第一次添加
        this.GoodsInfo.num=1;
        this.GoodsInfo.checked=true;
        cart.push(this.GoodsInfo);
      }else{
        // 已经存在购物车数据 执行 num++
          cart[index].num++;
     }
     // 把购物车重新添加回缓存中
     wx.setStorageSync("cart",cart);
     // 弹窗提示
     wx.showToast({
       title: '加入成功',
       icon: 'success',
       // true 防止用户 手抖 疯狂点击按钮
       mask: true
     });
       
   },

   // 点击 商品收藏图标
   handleCollect(){
     let isCollect = false;
    // 获取缓存中的商品收藏数组
    let collect = wx.getStorageSync("collect")||[];
    this.GoodsInfo = this.data.goodsObj;
    // 判断该商品是否被收藏过
    let index = collect.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
    // 当index!=-1表示已经收藏过
    if (index!==-1) {
      // 能找到 已经收藏过了 在数组中删除该商品
      collect.splice(index,1);
      isCollect = false;
      wx.showToast({
        title: '取消收藏',
        icon: 'success',
        mask: true
      });
        
    }else{
      // 没有收藏过
      collect.push(this.GoodsInfo);
      isCollect = true;
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        mask: true
      });
    }
    // 把数组存入到缓存中
    wx.setStorageSync("collect",collect);
    // 修改data中的属性 isCollect
    this.setData({
      isCollect
    });
   },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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