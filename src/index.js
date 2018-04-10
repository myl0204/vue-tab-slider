import TabSlider from './components/TabSlider.vue'

TabSlider.install = function(Vue) {
  Vue.component('tab-slider', TabSlider)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TabSlider)
}

export default TabSlider