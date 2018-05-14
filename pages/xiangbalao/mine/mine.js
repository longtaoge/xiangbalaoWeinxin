// pages/xiangbalao/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
    userInfo:{},
    mine_list: [
      {
        "pic_url": "/images/icons/iocn_home_01.png",
        "title": "我的订单",
      },
      {
        "pic_url": "/images/icons/iocn_home_02.png",
        "title": "优惠券",
      },
      {
        "pic_url": "/images/icons/iocn_home_03.png",
        "title": "收货地址",
      },
      {
        "pic_url": "/images/icons/iocn_home_04.png",
        "title": "客服电话",
      },
      {
        "pic_url": "/images/icons/iocn_home_04.png",
        "title": "提货券",
      },
      {
        "pic_url": "/images/icons/iocn_home_04.png",
        "title": "修改密码",
      }
    ],
    item:{
      signinHidden:false,
      userlocal:{
        nickName:"",
        nickPwd:""
      }

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

 
  getUser:function(e){
    var that=e;
    wx.getUserInfo({
      success: function(res) {
        console.log(res.userInfo);
        that.setData({
          userInfo:res.userInfo
        });
       
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  /**
  * 微信登录
  */
  modalcancel: function () {
    var that = this;
    wx.login({
      success: function () {
        that.getUser(that);
      }
    })
    this.onShow();
    this.setData({
      "item.signinHidden": true
    })
  },

 /**
  * 用户名密码登录
  */
  modalconfirm:function(){
  wx.setStorageSync("username", this.data.item.userlocal.nickName);
    wx.setStorageSync("password", this.data.item.userlocal.nickPwd);
    this.setData({
       "item.signinHidden":true
       })
  },

 
  saveusername:function(e){
    this.setData({
      "item.userlocal.nickName": e.detail.value
    });
  },

  saveuserpwd:function(e){
    this.setData({
      "item.userlocal.nickPwd": e.detail.value
    });
    console.log(e.detail.value);
  }
,

quit:function(){
  this.setData({
    userInfo: {},
    "item.signinHidden": false
   

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