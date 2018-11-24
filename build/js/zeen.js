// Global libraries
window.Vue = require('vue');
window._ = require('lodash');

Zeen.scene = require('./scene/932b8946-9764-4cc9-acda-d01cd5d0ee2e');

// Environment
// require('filter');
require('./bootstrap');

// Components
Vue.component('z-map', require('./components/map'));

var vm = new Vue({
	el: '#zeen'
});