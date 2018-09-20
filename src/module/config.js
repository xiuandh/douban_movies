import Vue from 'vue'

//获取rem
import computed_rem from './rem'
computed_rem()

//引入mint-ui的样式
import 'mint-ui/lib/style.css'

//引入小图标的样式
import '../../static/icon/iconfont.css'

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios

//引入正在加载的动图
import { Indicator } from 'mint-ui'
Vue.prototype.$loading = Indicator

Vue.config.productionTip = false
