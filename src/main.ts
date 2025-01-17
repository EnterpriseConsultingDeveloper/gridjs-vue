import Grid from './gridjs-vue'
import install from './lib/install'
import Vue from 'vue'; // es6 syntax
window.Vue = Vue;

const plugin = {
  install: install
}

let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export { Grid, plugin as GridGlobal }
export default Grid
