// pages/pay/index.js
/**
 * 页面加载的时候
 *   - 从缓存中获取购物车数据 渲染到页面中
 *     ~ 这些数据 checked=true
 * 
 * 微信支付
 *   - 哪些人 哪些帐号 可以实现微信支付
 *     ~ 企业帐号
 *     ~ 企业帐号的小程序后台中 必须 给开发者 添加上白名单
 *       · 一个 appid 就可以同时绑定多个开发者
 *       · 这些开发者就可以公用这个appid 和 它的开发权限
 * 支付按钮
 *  - 先判断缓存中有没有token
 *  - 没有 跳转到授权页面 进行获取token
 *  - 有token...
 *  - 创建订单 获取订单编号
 *  - 创建订单 获取订单编号
 *  - 已经完成了微信支付
 *  - 手动删除缓存中 已经被选中了的商品
 *  - 删除后的购物车数据 填充回缓存
 *  - 再跳转页面
 */
import {requestPayment, showToast} from "../../utils/asyncWx.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    cart:[],
    totalPrice:0,
    totalNum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 1 获取缓存中的收货地址信息
    const address = wx.getStorageSync("address"); 
    // 2 获取缓存中的购物车数据
    let cart = wx.getStorageSync("cart")||[];
    // 过滤后的购物车数组
    cart = cart.filter(v=>v.checked);
    this.setCart(cart);

    // 1 总价格 总数量
    let totalPrice=0;
    let totalNum=0;
    cart.forEach(v=>{
      totalPrice+=v.num*v.goods_price;
      totalNum+=v.num;
    })
    
    this.setData({
      address,
      cart,
      totalPrice,
      totalNum
    });
},

// 点击 支付
async handlePrderPay(){
  try {
    // 判断缓存中有没有token
    const token = wx.getStorageSync("token");
    // 判断
    if (!token) {
      wx.navigateTo({
        url: '/pages/auth/index'
      });
      return;  
    }
    // 创建订单
    // - 准备 请求头参数
    // const header = { Authorization:token };
    // - 准备 请求头参数
    const order_price = this.data.totalPrice;
    const consignee_addr = this.data.address.all;
    const cart = this.data.cart;
    let goods = [];
    cart.forEach(v=>goods.push({
      goods_id:v.goods_id,
      goods_number:v.num,
      goods_price:v.goods_pricereq_unifiedorder
    }));
    const orderParams = { order_price, consignee_addr, goods };
    // -准备发送请求 创建订单 获取
    const {order_number} = await request({url:"/my/orders/create",method:"POST",data:orderParams});
    // 发起 预支付接口
    const {pay} = await request({url:"/my/orders/req_unifiedorder",method:"POST",data:{order_number}});
    // 发起微信支付
    await requestPayment(pay);
    // 查询后台 订单状态
    const res = await request({url:"/my/orders/chkOrder",method:"POST",data:{order_number}});
    await showToast({title:"支付成功"})
    // 手动删除缓存中 已经支付了的商品
    let newCart = wx.getStorageSync("cart");
    newCart = newCart.filter(v=>!v.checked);
    wx.setStorageSync("cart", newCart);
      
    // 支付成功了 跳转到订单页面
    wx.navigateTo({
      url: '/pages/order/index'
    });
      
  } catch (error) {
    await showToast({title:"支付失败"})
    console.log(error);
  }
},
  /**
   * 页面加载完毕
   *  - onLoad onShow
   *  - 获取本地存储中的地址数据
   *  - 把数据 设置给data中的一个变量
   * 
   * onShow
   *  - 回到商品详情页面，第一次添加商品的时候 手动添加了属性
   *    ~ num = 1;
   *    ~ checked = true;
   *  - 获取缓存中的购物车数组
   *  - 把购物车数据填充到data中
   * 
   * 全选的实现 数据的展示
   *  - onShow 获取缓存中的购物车数组
   *  - 根据购物车中的商品数据 所有的商品都被选中 checked=true 全选就被选中
   * 
   * 总价格和总数量
   *  - 都需要商品被选中 我们才拿它来计算
   *  - 获取购物车数组
   *  - 遍历
   *  - 判断商品是否被选中
   *  - 总价格 += 商品的单价*商品的数量
   *  - 总数量 += 商品的数量
   *  - 把计算后的价格和数量 设置回data中即可
   * 
   * 点击结算
   *  - 判断有没有收货地址信息
   *  - 判断用户有没有选购商品
   *  - 经过以上的验证 跳转到支付页面
   * 
   */

  // 设置购物车状态同时重新计算底部工具栏的数据 全选 总价格 购买的数量
  setCart(cart){
    wx.setStorage("cart",cart);

    // 计算全选
    // every 数组方法 会遍历 会接收一个回调函数 那么 每一个回调函数都返回true 那么 every 方法的返回值为true
    // 只要 有一个回调函数返回了false 那么不再循环执行，直接返回false
    // 空数组 调用 every, 返回值就是true;
    // 1 总价格 总数量
    let totalPrice=0;
    let totalNum=0;
    cart.forEach(v=>{
      if (v.checked) {
        totalPrice+=v.num*v.goods_price;
        totalNum+=v.num;
      }
    })
    
    this.setData({
      cart,
      totalPrice,
      totalNum
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