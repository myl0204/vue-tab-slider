# tab-slider
[![npm](https://img.shields.io/npm/v/tab-slider.svg)](https://www.npmjs.com/package/tab-slider)
> A Vue component that can switch tabs by swiping the screen to the left or right


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
> note that you still need import the css file in main.js
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
> note the `name` attribute in comp must same as the name in route,that is,you must identify a route with a name,see [Named Routes](https://router.vuejs.org/en/essentials/named-routes.html#) or you can pass the `path` attribute to it.
---
中文版本：

属性 | 描述 | 类型 | 例子
----|---|---|---
comp(必需)|包含所有路由组件的数组|Array|[{name: 'comp1', component: foo}, {name: 'comp2', component: bar}]
defalut-index(可选)|默认要跳转的路由索引，从0开始|Number| 1
> comp属性中的name属性的值必须和路由name属性的值相同，也就是说，你必须给你的路由组件命名。相关信息[命名路由](https://router.vuejs.org/zh-cn/essentials/named-routes.html#)，或者你也可以传`path`参数进去。
## no tab
因为tab样式可能是多种多样的。所以不做tab，只关注slider部分。