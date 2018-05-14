// pages/xiangbalao/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailgood:{},
    listgood: [{
      "id": 101001,
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "111.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": 101002,
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "177.0",
      "type": "3.3kg/箱"
    }, {
      "id": 101003,
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "178.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": 102001,
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "172.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": 102002,
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "171.0",
      "type": "3.3kg/箱"
    }, {
      "id": 102003,
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "174.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": 103001,
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "177.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": 103002,
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "173.0",
      "type": "3.3kg/箱"
    }, {
      "id": 103003,
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "169.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": 201001,
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "159.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": 201002,
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "149.0",
      "type": "3.3kg/箱"
    }, {
      "id": 202001,
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "139.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": 203001,
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "159.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": 401001,
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "181.0",
      "type": "3.3kg/箱"
    }, {
      "id": 101001,
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "180.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }],
    hotgoods: [
      {
        "more_pic": "http://img10.yiguoimg.com/e/ad/2016/161008/585749449862226248_778x303.jpg"
      }, {
        "more_pic": "http://img14.yiguoimg.com/e/ad/2016/160929/585749449767461181_778x303.jpg"
      }, {
        "more_pic": "http://img12.yiguoimg.com/e/ad/2016/161009/585749449871663433_778x303.jpg"
      }, {
        "more_pic": "http://img10.yiguoimg.com/e/ad/2016/161008/585749449862226248_778x303.jpg"
      }, {
        "more_pic": "http://img14.yiguoimg.com/e/ad/2016/160929/585749449767461181_778x303.jpg"
      }, {
        "more_pic": "http://img12.yiguoimg.com/e/ad/2016/161009/585749449871663433_778x303.jpg"
      }, {
        "more_pic": "http://img10.yiguoimg.com/e/ad/2016/161008/585749449862226248_778x303.jpg"
      }, {
        "more_pic": "http://img14.yiguoimg.com/e/ad/2016/160929/585749449767461181_778x303.jpg"
      }, {
        "more_pic": "http://img12.yiguoimg.com/e/ad/2016/161009/585749449871663433_778x303.jpg"
      }, {
        "more_pic": "http://img10.yiguoimg.com/e/ad/2016/161008/585749449862226248_778x303.jpg"
      }
    ]

  
  },

//  加入购物车
  addtocart:function(){
    console.log("addtocart");
    wx.showModal({ //todo
      title: '提示',
      content: '确认加入购物车？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#ccc',
      confirmText: '确定',
      confirmColor: '#008842',
      success: function(res) {
        
        console.log("加入购物车成功");
      },
      fail: function(res) {
        console.log("加入购物车失败");
      },
      complete: function(res) {
        console.log("加入购物车complete");
      },
    })
  },

  buy:function(){
    wx.showModal({ //todo
    title: '提示',
    content: '立刻购买？',
    showCancel: true,
    cancelText: '取消',
    cancelColor: '#ccc',
    confirmText: '确认',
    confirmColor: '#008842',
    success: function(res) {
      console.log("立即购买 成功");
    },
    fail: function(res) {
      console.log("立即购买 失败");
    },
    complete: function(res) {
      console.log("立即购买 complete");
    },
  })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id=options.id;
    let list=this.data.listgood;
    var that =this;
    list.forEach(function(arr){
      console.log(arr.id.toString());
      if(id==arr.id){
        that.setData({
          detailgood:arr
        })
      }
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
      console.log("点击分享");
  }
})