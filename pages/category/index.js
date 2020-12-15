// pages/category/index.js
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList: [{
      "name": "为您推荐",
      "id": "176"
    }, {
      "name": "国际大牌",
      "id": "1495"
    }, {
      "name": "天猫国际",
      "id": "5188"
    }, {
      "name": "女装",
      "id": "178"
    }, {
      "name": "女鞋",
      "id": "179"
    }, {
      "name": "男装",
      "id": "180"
    }, {
      "name": "男鞋",
      "id": "181"
    }, {
      "name": "内衣",
      "id": "182"
    }, {
      "name": "母婴",
      "id": "183"
    }, {
      "name": "手机",
      "id": "8019"
    }, {
      "name": "数码",
      "id": "184"
    }, {
      "name": "家电",
      "id": "185"
    }, {
      "name": "美妆",
      "id": "186"
    }, {
      "name": "箱包",
      "id": "187"
    }, {
      "name": "运动",
      "id": "188"
    }, {
      "name": "户外",
      "id": "189"
    }, {
      "name": "家装",
      "id": "190"
    }, {
      "name": "家纺",
      "id": "191"
    }, {
      "name": "居家百货",
      "id": "192"
    }, {
      "name": "鲜花宠物",
      "id": "9832"
    }, {
      "name": "配饰",
      "id": "1824"
    }, {
      "name": "食品",
      "id": "1698"
    }, {
      "name": "生鲜",
      "id": "7478"
    }, {
      "name": "汽车摩托",
      "id": "194"
    }, {
      "name": "医药",
      "id": "195"
    }, {
      "name": "图书",
      "id": "1517"
    }, {
      "name": "通信",
      "id": "197"
    }, {
      "name": "洗护",
      "id": "6344"
    }, {
      "name": "乐器",
      "id": "7925"
    }],
    // 右侧的商品数据
    rightContent: [{
      "name": "女装",
      "id": "8141",
      "type": "cat",
      "list": [{
        "name": "连衣裙",
        "id": "8142",
        "pic": "//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=50025145"
      }, {
        "name": "T恤",
        "id": "8143",
        "pic": "//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=50029627"
      }, {
        "name": "衬衫",
        "id": "8145",
        "pic": "//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=162104"
      }, {
        "name": "雪纺衫",
        "id": "8146",
        "pic": "//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=50025233"
      }, {
        "name": "裤子",
        "id": "8147",
        "pic": "//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=50100707"
      }, {
        "name": "牛仔裤",
        "id": "8148",
        "pic": "//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=50025227"
      }]
    }, {

      "name": "女鞋",
      "id": "8144",
      "type": "cat",
      "list": [{
        "name": "小白鞋",
        "id": "8149",
        "pic": "//img.alicdn.com/tfs/TB1gh88SVXXXXciaXXXXXXXXXXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?q=%E5%B0%8F%E7%99%BD%E9%9E%8B"
      }, {
        "name": "乐福鞋",
        "id": "8150",
        "pic": "//img.alicdn.com/tfs/TB1yNqkSVXXXXXBXVXXXXXXXXXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?q=%E4%B9%90%E7%A6%8F%E9%9E%8B"
      }, {
        "name": "草编鞋",
        "id": "8151",
        "pic": "//img.alicdn.com/tfs/TB1lwyrSVXXXXbCXFXXXXXXXXXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?q=%E8%8D%89%E7%BC%96%E9%9E%8B"
      }]
    }, {

      "name": "男装",
      "id": "8152",
      "type": "cat",
      "list": [{
        "name": "T恤",
        "id": "8155",
        "pic": "//img.alicdn.com/tfs/TB1h.PxqmBYBeNjy0FeXXbnmFXa-100-100.png",
        "url": "//s.m.tmall.com/search.htm?q=T%E6%81%A4%E7%94%B7%0A"
      }, {
        "name": "衬衫",
        "id": "8156",
        "pic": "//img.alicdn.com/tfs/TB1faWZqhGYBuNjy0FnXXX5lpXa-100-100.png",
        "url": "//s.m.tmall.com/search.htm?q=%E8%A1%AC%E8%A1%AB%E7%94%B7%0A"
      }, {
        "name": "POLO衫",
        "id": "8157",
        "pic": "//img.alicdn.com/tfs/TB1EMREqbSYBuNjSspiXXXNzpXa-100-100.png",
        "url": "//s.m.tmall.com/search.htm?cat=50037920"
      }, {
        "name": "夹克",
        "id": "8158",
        "pic": "//img.alicdn.com/tfs/TB1vUWzqkCWBuNjy0FaXXXUlXXa-100-100.png",
        "url": "//s.m.tmall.com/search.htm?cat=50026329"
      }, {
        "name": "休闲裤",
        "id": "8159",
        "pic": "//img.alicdn.com/tfs/TB1qW4YqbGYBuNjy0FoXXciBFXa-100-100.png",
        "url": "//s.m.tmall.com/search.htm?cat=50026259"
      }, {
        "name": "牛仔裤",
        "id": "8160",
        "pic": "//img.alicdn.com/tfs/TB11StUqXGWBuNjy0FbXXb4sXXa-100-100.png",
        "url": "//s.m.tmall.com/search.htm?cat=50026245"
      }]
    }, {

      "name": "家电",
      "id": "8153",
      "type": "cat",
      "list": [{
        "name": "平板电视",
        "id": "8161",
        "pic": "//img.alicdn.com/tps/i1/TB1IQsKGVXXXXXLXpXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?q=%E5%B9%B3%E6%9D%BF%E7%94%B5%E8%A7%86"
      }, {
        "name": "洗衣机",
        "id": "8162",
        "pic": "//img.alicdn.com/tps/i4/TB1TcZzGVXXXXc_apXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?q=%E6%B4%97%E8%A1%A3%E6%9C%BA"
      }, {
        "name": "冰箱",
        "id": "8163",
        "pic": "//img.alicdn.com/tps/i3/TB19_gEGVXXXXbAXVXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?q=%E5%86%B0%E7%AE%B1"
      }, {
        "name": "电饭煲",
        "id": "8164",
        "pic": "//img.alicdn.com/tps/i2/TB18cUQGVXXXXanXXXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=54312953"
      }, {
        "name": "空气净化器",
        "id": "8165",
        "pic": "//img.alicdn.com/tps/i4/TB1do7HGVXXXXaoXVXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=54298151"
      }, {
        "name": "扫地机器人",
        "id": "8166",
        "pic": "//img.alicdn.com/tps/i3/TB1CjwPGVXXXXa1XXXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=54298156"
      }]
    }, {

      "name": "美妆",
      "id": "8154",
      "type": "cat",
      "list": [{
        "name": "护肤套装",
        "id": "8167",
        "pic": "//img.alicdn.com/tps/i4/TB1ZsMAGVXXXXcMaXXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=54288705"
      }, {
        "name": "面膜",
        "id": "8168",
        "pic": "//img.alicdn.com/tps/i1/TB1IDECGVXXXXXOXVXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=54288706"
      }, {
        "name": "身体护理",
        "id": "8169",
        "pic": "//img.alicdn.com/tps/i4/TB19M7HGVXXXXaGXpXXMxXJVFXX-100-100.jpg",
        "url": "//s.m.tmall.com/search.htm?cat=54288542"
      }]
    }],
    // 被选中的索引
    currentIndex:0,
    // 右部内容距顶部的距离
    scrollTop:0
  },

  // 左侧菜单的点击事件
  handleItemTap(e){
    /*
    1 获取被点击的标题身上的索引
    2 给data中的currentIndex赋值就可以了
    3 根据不同的索引来渲染右侧的商品内容
    */
    const {index} = e.currentTarget.dataset;
    // let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex:index,
      // rightContent,
      // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
      scrollTop:0
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 1 web中的本地存储和小程序中的本地存储的区别
     *   - 写代码的方式不一样
     *      web: localStorage.setItem("key","value"); localStorage.getItem("key");
     *    小程序： wx.getStorageSync("key","value"); wx.getStorageSync("key")
     * 
     *   - 存的时候 有没有做类型转换
     *      web: 不管存入的是什么类型的数据，最终都会先调用一下 toString(),把数据变成字符串 再存入进去；
     *    小程序： 不存在类型转换的这个操作，存什么类型的数据进去，获取的时候就是什么类型
     * 2 先判断一下本地存储中有没有旧数据
     *   {time:Date.now(),data:[...]}
     * 3 没有旧数据 直接发送新请求
     * 4 有旧数据 同时 旧的数据也没有过期 就使用 本地存储中的旧数据即可
    */

    const Cates = wx.getStorageSync("cates")

    // 判断
    if(!Cates){
       this.getCates();
    } else {
      // 有旧数据 定义过期时间 10s 改成 5分钟
      if (Date.now() - Cates.time>1000*10) {
        // 重新发送请求
        this.getCates();
      } else {
        // 可以使用旧的数据
        this.Cates = Cates.data;

        // 构造左侧的大菜单数据
        let leftMenuList = this.Cates.map(v => v.cat_name);
        // 构造右侧的商品数据
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent
        })
      }
    }

  },

  // 获取分类数据
  async getCates(){
    /*request({
      url:"/category"
    })
    .then(res => {
      this.Cates = res.data.message;
      // 把接口的数据存入到本地存储中
      wx.getStorageSync("cates",{time:Date.now(),data:this.Cates});

      // 构造左侧的大菜单数据
      let leftMenuList = this.Cates.map(v => v.cat_name);
      // 构造右侧的商品数据
      let rightContent = this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
      
    })*/

    // 1 使用es7的async await来发送请求
    const res = await request({url:"/categories"})

    this.Cates = res;
    // 把接口的数据存入到本地存储中
    wx.getStorageSync("cates",{time:Date.now(),data:this.Cates});

    // 构造左侧的大菜单数据
    let leftMenuList = this.Cates.map(v => v.cat_name);
    // 构造右侧的商品数据
    let rightContent = this.Cates[0].children;
    this.setData({
      leftMenuList,
      rightContent
    })
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