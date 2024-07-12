export const routes = [
  //主要页面层
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
    routes: [
      {
        name: '关于',
        path: '/home/about',
        components: '@/pages/about',
      },
    ],
  },
  {
    name: 'GPT聊天机器人',
    title: '聊天机器人',
    path: '/gptTalker',
    component: '@/pages/gptTalker',
    hideInBreadcrumb: true,
    hideInMenu: true,
  },
  {
    path: '/404',
    component: '@/pages/404',
  },
  {
    path: '/403',
    component: '@/pages/403',
  },
];
