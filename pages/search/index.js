// pages/search/index.js
/**
 * 输入框绑定 值改变事件 input事件
 *   - 获取到输入框的值
 *   - 合法性判断
 *   - 检验通过 把输入框的值 发送到后台
 *   - 返回的数据打印到页面上
 * 
 * 防抖 （防止抖动） 定时器 or 节流
 *   - 防抖 一般 输入框中 防止重复输入 重复发送请求
 *   - 节流 一般是用在页面下拉和上拉
 *   - 定义全局的定时器id
 */
import { request } from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    // 取消按钮 是否显示
    isFocus:false,
    // 输入框的值
    inpValue:''
  },
  TimeId:-1,

  // 输入框的值改变 就会触发的事件
  handleInput(e){
    console.log(e);
    // 获取输入框的值
    const {value} = e.detail;
    // 检测合法性
    if (!value.trim()) {
      this.setData({
        goods:[],
        isFocus:false
      })
      // 值不合法
      return;
    }
    // 准备发送请求获取数据
    this.setData({
      isFocus:true
    })
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      // this.qsearch(value)
    }, 1000);
  },

  // 发送请求获取搜索建议的数据
  async qsearch(query){
    const res = await request({url:"/goods/qsearch",data:{query}});
    this.setData({
      goods:res
    })
  },

  // 点击取消按钮
  handleCancel(){
    this.setData({
      inpValue:'',
      isFocus:false,
      goods:[]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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