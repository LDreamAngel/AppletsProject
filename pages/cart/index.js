// pages/cart/index.js
import { getSetting, chooseAddress, openSetting, showModal, showToast} from "../../utils/asyncWx.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    cart:[],
    allChecked:false,
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
    // 3 给data赋值
    this.setData({address})
    
    // 2 获取缓存中的购物车数据
    const cart = wx.getStorageSync("cart")||[];

    this.setCart(cart);
},

  /**
   * 获取用户的收货地址
   *  - 绑定点击事件
   *  - 调用小程序内置 api 获取用户的收货地址 wx.chooseAddress
   * 
   * 获取 用户 对小程序 所以授予 获取地址的 权限 状态 scope
   *  - 假设 用户 点击获取收货地址的提示框 确定 authSetting scope.address
   *    scope 值 true
   *  - 假设 用户 从来没有调用过 收货地址的api
   *    scope undefined
   *  - 假设 用户 点击获取收货地址的提示框取消
   *    scope 值 false
   *    ~ 诱导用户 自己 打开 授权设置页面 当用户重新给与 获取地址权限的时候
   *    ~ 获取收货地址
   * 把获取到的地址存入到本地存储中
   * 
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
   * 商品的选中
   *  - 绑定change事件
   *  - 获取到被修改的商品对象
   *  - 商品对象的选中状态 取反
   *  - 重新填充回data中和缓存中
   *  - 重新计算全选，总价格，总数量。。。
   * 
   * 全选和反选
   *  - 全选复选框绑定事件 changge
   *  - 获取 data中的全选变量 allChecked
   *  - 直接取反 allChecked=!allChecked
   *  - 遍历购物车数组 让里面 商品 选中状态跟随 allChecked
   *  - 把购物车数组 和 allChecked 重新设置回data 把购物车重新设置回缓存中
   * 
   * 商品数量的编辑
   *  - "+" "-"按钮 绑定同一个点击事件 区分的关键是自定义属性
   *    ~ "+"=>"+1"
   *    ~ "-"=>"-1"
   *  - 传递被点击的商品id goods_id
   *  - 获取data中的购物车数组 来获取需要被修改的商品对象
   *  - 当购物车的数量=1的同时，用户点击了"-"
   *    ~ 弹窗提示(showModal) 询问用户 是否要删除
   *      1> 确定 直接执行删除
   *      2> 取消 什么都不做
   *  - 直接修改商品对象的数量 num
   *  - 把cart数组 重新设置回 缓存中和data中 this.setCart
   * 
   * 点击结算
   *  - 判断有没有收货地址信息
   *  - 判断用户有没有选购商品
   *  - 经过以上的验证 跳转到支付页面
   * 
   */
  async handleChooseAddress(){
    try {
      // 1 获取权限状态
      const res1 = await getSetting();
      const scopeAddress = res1.authSetting["scope.address"]; 
      // 2 判断 权限状态
      if(scopeAddress ===false){
        // 4 先诱导用户打开授权页面
        await openSetting();
      }
      // 3 调用获取收货地址的api
      let address = await chooseAddress();
      address.all=address.provinceName+address.cityName+address.countyName+address.detailInfo;
      // 存入到缓存中
      wx.setStorageSync("address",address);
        
    } catch (error) {
      console.log(error);
    }
    
  },

  // 商品的选中
  handelItemChange(e){
    // 获取被修改的商品的id
    const goods_id = e.currentTarget.dataset.id;
    // 获取购物车数组
    let {cart} = this.data;
    // 找到被修改的商品对象
    let index = cart.findIndex(v=>v.goods_id===goods_id);
    // 选中状态取反
    cart[index].checked=!cart[index].checked;

    this.setCart(cart);
  },

  // 设置购物车状态同时重新计算底部工具栏的数据 全选 总价格 购买的数量
  setCart(cart){
    wx.setStorage("cart",cart);

    // 计算全选
    // every 数组方法 会遍历 会接收一个回调函数 那么 每一个回调函数都返回true 那么 every 方法的返回值为true
    // 只要 有一个回调函数返回了false 那么不再循环执行，直接返回false
    // 空数组 调用 every, 返回值就是true;
    // const allChecked = cart.length?cart.every(v=>v.checked):false;
    let allChecked =true;
    // 1 总价格 总数量
    let totalPrice=0;
    let totalNum=0;
    cart.forEach(v=>{
      if (v.checked) {
        totalPrice+=v.num*v.goods_price;
        totalNum+=v.num;
      } else {
        allChecked = false;          
      }
    })
    // 判断数组是否为空
    allChecked = cart.length!=0?allChecked:false;
    
    this.setData({
      cart,
      allChecked,
      totalPrice,
      totalNum
    });
  },

  // 商品全选功能
  handleItemAllCheck(){
    // 获取data中的数据
    let {cart,allChecked} = this.data;
    // 修改值
    allChecked =!allChecked;
    // 循环修改cart数组 中的商品选中状态
    cart.forEach(v=>v.checked=allChecked);
    // 把修改后的值 填充回data或者缓存中
    this.setCart(cart);
  },

  // 商品数量的编辑功能
  async handleItemNumEdit(e){
    // 获取传递过来的参数
    const {operation,id} = e.currentTarget.dataset;
    // 获取购物车数组
    let {cart} = this.data;
    // 找到需要修改的商品的索引
    const index = cart.findIndex(v=>v.goods_id===id);
    // 判断是否要执行删除
    if(cart[index].num===1&&operation===-1){
      // 弹框提示
      const res = await showModal({content:"您是否确定删除该商品？"});
      if (res.confirm) {
        cart.splice(index,1);
        this.setCart(cart);
      }
    }else{
      // 进行修改数量
      cart[index].num += operation;
      this.setCart(cart);
    }
  },

  // 点击 结算
  async handlePay(){
    // 判断收货地址
    const {address,totalNum} = this.data;
    if (!address.userName) {
      await showToast({title:"您还没有选择收货地址哦~"});
      return;
    }
    // 判断用户有没有选购商品
    if (totalNum===0) {
      await showToast({title:"您还没有选购商品哦~"});
      return;
    }
    // 跳转到 支付页面
      wx.navigateTo({
        url: '/pages/pay/index'
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