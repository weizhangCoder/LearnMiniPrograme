// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'zhangwei',
    age: 20,
    students: [
      { id: 110, name: 'keno', age: 29 },
      { id: 111, name: 'Jame', age: 20 },
      { id: 112, name: 'Weide', age: 27 },
      { id: 113, name: 'Zhang', age: 21 }
    ],
    counter:0
  },
  handlebtnClick() {
    console.log('点击加号按钮');
    this.setData({
      counter: this.data.counter+1
    })
  },
  handlesamllClick() {
    console.log('点击-号按钮');
    this.setData({
      counter: this.data.counter - 1
    })
  }

  
})