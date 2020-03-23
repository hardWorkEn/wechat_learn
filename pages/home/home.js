// pages/home/home.js
//注册一个页面
Page({
  data: {
    name: 'timi',
    students: [{
        id: 1,
        name: 'kobe',
        age: 42
      },
      {
        id: 2,
        name: 'durant',
        age: 31
      }
    ],
    count: 0
  },
  handleBtnclick() {
    this.setData({
      count: this.data.count + 1
    })
  },
  handleBtnclickfl() {
    this.setData({
      count: this.data.count - 1
    })
  },
  bindleBtn(event){
    console.log(event.detail.userInfo.nickName)
  },

  bindleBtn2(event){
    console.log(event)
  }
})