// pages/goods_list/index.js
import { request } from "../../request/index.js";

/**
 * 用户上滑页面 滚动条触底 开始加载下一页数据
 *  1、找到滚动条触底事件（微信小程序官方开发文档中寻找）
 *  2、判断还有没有下一页数据
 *      - 获取到总页数
 *        总页数 = Math.ceil( 总条数 / 页容量 pagesize)
 *      - 获取到当前的页码
 *      - 判断一下 当前的页码是否大于等于总页数
 *         ~ 表示没有下一页数据
 *  3、假如没有下一页数据 弹出一个提示
 *  4、假如还有下一页数据 来加载下一页数据
 *      - 当前的页码 ++
 *      - 重新发送请求
 *      - 数据请求回来 要对data中的数组 进行 拼接 而不是全部替换！！！
 * 下拉刷新页面
 *  1、触发下拉刷新事件 需要在页面的json文件中开启一个配置项;
 *    - 找到 触发下拉刷新的事件
 *  2、重置 数据 数组
 *  3、重置页码 设置为1
 *  4、重新发送请求
 *  5、数据请求回来 需要手动关闭等待的效果
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[{
      id:0,
      value:"综合",
      isActive:true
    },{
      id:1,
      value:"销量",
      isActive:false
    },{
      id:2,
      value:"价格",
      isActive:false
    }],
    goodsList:[{
      goods_name:'容声(Ronshen) 456升 十字对开多门冰箱 一级能效 风冷无霜 抗菌 独立宽温 干湿分储BCD-456WD11FP',
      goods_price:3799.00,
      goods_small_logo:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/132475/4/17814/95052/5fc45c8aE1e7d4eac/c09e742ede3e3040.jpg!q70.jpg'
    },{
      goods_name:'海尔 （Haier）216升直冷三门家用小型冰箱中门软冷冻高品质铝板蒸发器制冷快宿舍租房小巧不占地BCD-216STPT',
      goods_price:1298.99,
      goods_small_logo:'https://img13.360buyimg.com/n2/s240x240_jfs/t1/147451/28/16503/93570/5fc4943dE2926734b/7d86112f372e8d35.jpg!q70.jpg'
    },{
      goods_name:'海尔 （Haier ）477升双变频风冷无霜十字门冰箱 干湿分储 T·ABT除菌多门四门纤薄机身厨装一体BCD-477WDPCU1',
      goods_price:4299.00,
      goods_small_logo:'https://img14.360buyimg.com/n2/s240x240_jfs/t1/150280/10/16413/108147/5fc4913eEe6a8cec1/45c9db9bf6cb206d.jpg!q70.jpg'
    },{
      goods_name:'海尔 (Haier )223升变频风冷无霜三门冰箱 干湿分储中门全温区变温DEO净味系统BCD-223WDPT',
      goods_price:2699.00,
      goods_small_logo:'https://img11.360buyimg.com/n2/s240x240_jfs/t1/153652/29/7752/103847/5fc490f8E404b5add/3c5381d76b6d86f9.jpg!q70.jpg'
    },{
      goods_name:'美的(Midea) 213升 三门三温家用冰箱冷藏冷冻大容量保鲜节能省电静音  BCD-213TM(E)',
      goods_price:1499.00,
      goods_small_logo:'https://img13.360buyimg.com/n2/s270x270_jfs/t1/137037/31/17929/67415/5fc35a33Ecdbdf5f6/e3421a02ebd9b909.jpg!q70.dpg'
    }]
  },

  // 接口要的参数
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },

  // 总页数
  totalPages:1,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cid || "";
    this.QueryParams.query = options.query||"";
    // this.getGoodsList();
  },

  // 获取商品列表数据
  async getGoodsList(){
    const res = await request({url:"/goods/search",data:this.QueryParams});
    // 获取总条数
    const total = res.total;
    // 计算总页数
    this.totalPages = Math.ceil(total/this.QueryParams.pagesize);
    this.setData({
      // 拼接了数组
      goodsList:[...this.data.goodsList,...res.goods]
    })

    // 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭页不会报错
    wx.stopPullDownRefresh();
      
  },

  // 标题点击事件 从子组件传递过来
  handleTabsItemChange(e){
   // 1 获取被点击的标题索引
   const {index} = e.detail;
   // 2 修改源数组
   let {tabs} = this.data;
   tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
   // 3 赋值
   this.setData({
     tabs
   })
  },

    /**
   * 页面上拉触底事件的处理函数
   */

  onReachBottom(){
    // 1 判断还有没有下一页数据
    if(this.QueryParams.pagenum>=this.totalPages){
      // 没有下一页数据
      console.log("%c%s","font-size:100px;color: red; background-image: linear-gradient(90deg, #0303fa, #e77373); ","没有下一页数据！");
      wx.showToast({
        title: '没有下一页数据'
      });
        
    }else{
      // 还有下一页数据
      // console.log("还有下一页数据")
      this.QueryParams.pagenum++;
      this.getGoodsList();
    }
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
    // 1 重置数组
    this.setData({
      goodsList:[]
    })
    // 2 重置页码
    this.QueryParams.pagenum=1;
    // 3 发送请求
    this.getGoodsList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})