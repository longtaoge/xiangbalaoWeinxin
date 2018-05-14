// pages/xiangbalao/index/index.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: "",
    motto: "MiHome_Store",
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 100,
    newgoods: [
      {
        "hg_pic": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
      }, {
        "hg_pic": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg"
      }, {
        "hg_pic": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
      }
    ]
    , hotgoods: [{
      "more_pic": "http://img13.yiguoimg.com/e/albums/2017/170630/153403897791357662_800x468.jpg"
    }, {
      "more_pic": "http://img14.yiguoimg.com/e/albums/2017/170629/153403897729786589_800x468.jpg",
    }, {
      "more_pic": " http://img12.yiguoimg.com/e/albums/2017/170626/153403897618375386_596x379.jpg",
    }, {
      "more_pic": " http://img12.yiguoimg.com/e/albums/2017/170621/153403897468003029_800x468.jpg",
    }
    ],

    banner_list: 
      {
        "banner": [{
          "pic_url": "http://img09.yiguoimg.com/e/ad/2016/160825/585749448986042649_800x400.jpg",
        },
        {
          "pic_url": "http://img11.yiguoimg.com/e/ad/2016/160927/585749449690947899_800x400.jpg",
        },
        {
          "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160923/585749449636290871_800x400.jpg",
        },
        {
          "pic_url": "http://img13.yiguoimg.com/e/ad/2016/160914/585749449480315182_800x400.jpg",
        },
        {
          "pic_url": "http://img14.yiguoimg.com/e/ad/2016/161010/585749449889390922_800x400.jpg",
        }]
      }

    



  },


  onPullDownRefresh: function () {

    console.log("onPullDownRefresh");
  }
  ,
  scroll: function (e) {
    if (this.data.toView == "top") {

      this.setData({
        toView: ""
      })
    }
  }
  , bindViewTap: function () {

    wx.navigateTo({
      url: '../logs/logs',
    })
  }
  ,

  tap: function () {
    console.log("ontap");
    this.setData({
      toView: "top"
    })
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log("乡巴佬食品");

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