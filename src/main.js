import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
//http请求
import axios from './plugins/http';
Vue.prototype.$axios = axios;
//API全局注册
import api from './api';
Vue.prototype.$api = api;
//注册全局过滤器
import * as filters from "@/plugins/filter.js";
Object.keys(filters).forEach(key => {
	Vue.filter(key,filters[key]);
});
import { Button, Select, Option, Message, Notice, Modal, Row, Col, Input, Table, Page, Layout } from 'iview';

// 设置iview部分全局组件
Vue.component('Button', Button);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Modal', Modal);
Vue.component('Col', Col);
Vue.component('Row', Row);
Vue.component('Input', Input);
Vue.component('Table', Table);
Vue.component('Page', Page);
Vue.prototype.$Message = Message;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Modal = Modal;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
