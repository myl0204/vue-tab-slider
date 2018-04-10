# tab-slider

> A Vue component that can switch tabs by swiping the screen to the left or right

[![npm](https://img.shields.io/npm/v/tab-slider.svg)](https://www.npmjs.com/package/tab-slider)
## Install
``` bash
npm install tab-slider -S
```
## Usage
1. in `main.js`
``` js
import TabSlider from 'tab-slider'
import 'tab-slider/dist/index.css'
Vue.use(TabSlider)
```
2. in `.Vue` file
``` js
import TabSlider from 'tab-slider'
export default {
  components: {
    TabSlider
  }
}
```
## API
Attribute | Description | Type | example
----|---|---|---
comp(required)|A array contains all router components|Array|[{name: 'comp1', component: foo}, {name: 'comp2', component: bar}]
defalut-index(optional)|index of default component to dispaly, default to 0|Number| 1

中文版本：
属性 | 描述 | 类型 | 例子
----|---|---|---
comp(必需)|包含所有路由组件的数组|Array|[{name: 'comp1', component: foo}, {name: 'comp2', component: bar}]
defalut-index(可选)|默认要跳转的路由索引，从0开始|Number| 1

