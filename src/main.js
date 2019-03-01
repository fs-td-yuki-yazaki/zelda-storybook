// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import * as components from './components'

// Vue.config.productionTip = false

/* eslint-disable */
var ZeldaVuestory = {
  install: function (Vue, opts = {}) {
    //console.log("TEST")
    // コンポーネントの登録
    (function registerComponents (components) {
      if (components) {
        for (const key in components) {
          console.log(key)
          const component = components[key]
          Vue.component(key, component)
        }
      }
    })(components)
  },
  components: components[0],
  version: '1.0'
}

//if (typeof window !== 'undefined' && window.Vue) {
//  window.Vue.use(ZeldaVuestory)
//}

//export default ZeldaVuestory

Vue.use(ZeldaVuestory);

new Vue({
  render: h => h(App),
}).$mount('#app')
