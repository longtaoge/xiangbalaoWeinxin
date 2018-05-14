// pages/xiangbalao/list/list.js
var app =getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    listgoods: [{
      "id": '0101001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "111.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '0101002',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "177.0",
      "type": "3.3kg/箱"
    }, {
      "id": '0101003',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "178.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": '0102001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "172.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '0102002',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "171.0",
      "type": "3.3kg/箱"
    }, {
      "id": '0102003',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "174.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": '0103001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "177.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '0103002',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "173.0",
      "type": "3.3kg/箱"
    }, {
      "id": '0103003',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "169.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": '0201001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "159.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '0201002',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "149.0",
      "type": "3.3kg/箱"
    }, {
      "id": '0202001',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "139.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }, {
      "id": '1203001',
      "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
      "price": "159.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "id": '1401001',
      "name": "智利蓝莓2盒（约125g/盒）",
      "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "price": "181.0",
      "type": "3.3kg/箱"
    }, {
      "id": '1101001',
      "name": "澳大利亚脐橙12个约160g/个(北京)",
      "price": "180.0",
      "type": "3.3kg/箱",
      "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }],
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 2000,
      duration: 500

    }
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    //todo 从网上获取数据
  
  },

  switchSlider:function(e){
    this.setData({
      current:e.target.dataset.index
    })
  },
  changeSlider:function(e){

    this.setData({
      current:e.detail.current
    })

  },
  showdetail:function(e){
    var datas =e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.id);

    wx.navigateTo({
      url: '/pages/xiangbalao/detail/detail?id=' + datas.id,
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