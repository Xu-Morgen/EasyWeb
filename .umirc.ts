import { defineConfig } from '@umijs/max';
import { routes } from './config/routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    appList: [{ title: '聊天机器人', url: '/gptTalker' }],
    appListRender: {},
  },
  routes: routes,
  npmClient: 'npm',
});
