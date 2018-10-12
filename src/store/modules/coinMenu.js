export default {
  state: {
    selectTab: ['Followed', 'Price','oneHour','twentyFourHour','sevenDayPrice', 'mktCap','dayVol','algoScore','actions'],
    customize: [],
    marketTab: ['Followed', 'Price','oneHour','twentyFourHour','sevenDayPrice', 'mktCap','dayVol','algoScore','actions'],
    isLogin: false
  },
  mutations: {
    changeMenu(state,val){
        state.selectTab = val;
    },
    customMenu(state,val){
      state.selectTab = val;
      state.customize = val;
    },
    marketTab(state,val) {
      state.marketTab = val;
    }
  }
}
