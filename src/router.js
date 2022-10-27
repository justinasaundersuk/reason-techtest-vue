import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage/HomePage.vue';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.vue';
import TheDigitalDivide from './components/TheDigitalDivide/TheDigitalDivide.vue';
import GetInvolved from './components/GetInvolved/GetInvolved.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/whatwedo',
      name: 'WhatWeDo',
      component: WhatWeDo
    },
    {
      path: '/thedigitaldivide',
      name: 'TheDigitalDivide',
      component: TheDigitalDivide
    },
    {
      path: '/getinvolved',
      name: 'GetInvolved',
      component: GetInvolved
    },
  ]
});

export default router;