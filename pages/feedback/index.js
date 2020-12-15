// pages/feedback/index.js
/**
 * 点击“+”触发tap点击事件
 *  - 调用小程序内置的 选择图片的 api
 *  - 获取到 图片的路径 数组
 *  - 把图片路径 存到 data的变量中
 *  - 页面就可以根据 图片数组 进行循环显示 自定义组件
 * 
 * 点击自定义图片 组件
 *  - 获取被点击的元素的索引
 *  - 获取data中的图片数组
 *  - 根据索引 数组中删除对应的元素
 *  - 把数组重新设置回data中
 * 
 * 点击“提交”
 *  - 获取文本域的内容，类似于输入框的获取
 *    ~ data中定义变量 表示 输入框内容
 *    ~ 文本域 绑定 输入事件 事件触发的时候 把输入框的值 存入到变量中
 *  - 对这些内容 合法性验证
 *  - 验证通过 用户选择的图片 上传到专门的图片的服务器 返回图片外网的链接
 *    ~ 遍历图片数组
 *    ~ 挨个上传
 *    ~ 自己再维护图片数组 存放 图片上传后的外网的链接
 *  - 文本域和外网的图片的路径 一起提交到服务器 前端的模拟 不会发送请求到后台。。。
 *  - 文本域 和 外网的图片的路径 一起提交到服务器
 *  - 清空当前页面
 *  - 返回上一页
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[{
      id:0,
      value:"体验问题",
      isActive:true
    },{
      id:1,
      value:"商品、商家投诉",
      isActive:false
    }],
    chooseImgs:[],
    textVal:""
  },

  // 外网的图片的路径数组
  UpLoadImgs:[],
  
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

  // 点击“+”选择图片
  handleChooseImg(){
    // 调用小程序内置的选择图片api
    wx.chooseImage({
      // 同时选中的图片的数量
      count: 9,
      // 图片的格式：原图、 压缩
      sizeType: ['original', 'compressed'],
      // 图片的来源：相册、照相机
      sourceType: ['album', 'camera'],
      success: (result) => {
        this.setData({
          // 图片数组，进行拼接
          chooseImgs:[...this.data.chooseImgs,...result.tempFilePaths]
        })
      }
    });
      
  },

  // 点击自定义图片组件
  handleRemoveImg(e){
    // 获取被点击的组件的索引
    const {index}=e.currentTarget.dataset;
    // 获取data中的图片数组
    let {chooseImgs} = this.data;
    // 删除元素
    chooseImgs.splice(index,1);
    this.setData({
      chooseImgs
    });
  },

  // 文本域的输入事件
  handleTextInput(e){
    this.setData({
      textVal:e.detail.value
    });
  },

  /**
   * 提交按钮的点击事件
   * 上传文件的 api 不支持 多个文件同时上传 遍历数组，挨个上传
   * 显示正在等待的图片
   *  */ 
  handleFromSubmit(e){
    // 获取文本域的内容
    const {textVal, chooseImgs} = this.data;
    // 合法性的验证
    if (!textVal.trim()) {
      // 不合法
      wx.showToast({
        title: '输入不合法',
        icon: 'none',
        mask: true
      });
      return;
    }

    wx.showLoading({
      title: "上传中",
      mask: true
    });
      
    // 判断有没有需要上传的图片数组
    if (chooseImgs.length!=0) {
      chooseImgs.forEach((v,i)=>{
        // 准备上传图片 到专门的图片服务器
        wx.uploadFile({
          // 图片上传到哪里
          url: 'https://images.ac.cn/Home/Index/UploadAction',
          // 被上传的文件的路径
          filePath: v,
          // 上传的文件的名称 后台来获取文件，eg:file
          name: "file",
          // 顺带的文本信息
          formData: {},
          success: (result) => {
            let url = JSON.parse(result.data);
            this.UpLoadImgs.push(url);
            if (i===chooseImgs.length-1) {
              wx.hideLoading();
                
              console.log("把文本的内容和外网的图片数组 提交到后台中")
              // 提交都成功了
              // 重置页面
              this.setData({
                textVal:"",
                chooseImgs:[]
              })
              // 返回上一个页面
              wx.navigateBack({
                delta: 1
              });
                
            }
          }
        });
      })
    }else{
      wx.hideLoading();
      // 返回上一个页面
      wx.navigateBack({
        delta: 1
      });
    }
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