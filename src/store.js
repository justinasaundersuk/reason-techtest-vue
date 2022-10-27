import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      navigation: [
        { id: 1, pagename: 'Home', url: '/home' },
        { id: 2, pagename: 'What we do', url: '/whatwedo' },
        { id: 3, pagename: 'The digital divide', url: '/thedigitaldivide' },
        { id: 4, pagename: 'Get involved', url: '/getinvolved' },
      ]
    };
  }
});

export default store;