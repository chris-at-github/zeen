// Global libraries
window.Vue = require('vue');
window._ = require('lodash');

// Environment
// require('filter');
require('./bootstrap');

// Components
Vue.component('z-map', require('./components/map'));

var vm = new Vue({
	el: '#zeen'
});