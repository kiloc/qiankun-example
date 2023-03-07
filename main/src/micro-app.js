import store from './store'

const microApps = [
  {
    name: 'sub-vue-1',
    entry: process.env.VUE_APP_SUB_VUE,
    activeRule: '/sub-vue-1'
  },
  {
    name: 'sub-vue-2',
    entry: process.env.VUE_APP_SUB_REACT,
    activeRule: '/sub-vue-2'
  },
  {
    name: 'sub-html',
    entry: process.env.VUE_APP_SUB_HTML,
    activeRule: '/sub-html'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
