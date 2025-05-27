const { generateMultipleIds } = require('../../utils/generator');

Page({
  data: {
    countArray: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    countIndex: 0,
    ids: []
  },

  onLoad() {
    console.log('页面加载完成');
  },

  bindCountChange(e) {
    this.setData({
      countIndex: e.detail.value
    });
  },

  generateIds() {
    const count = parseInt(this.data.countArray[this.data.countIndex]);
    const ids = generateMultipleIds(count);
    
    this.setData({
      ids: ids
    });
  },

  copyId(e) {
    const id = e.currentTarget.dataset.id;
    wx.setClipboardData({
      data: id,
      success: () => {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1500
        });
      }
    });
  }
}); 