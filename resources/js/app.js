require('./bootstrap');
import Vue from 'vue'

Vue.component('my-test', require('./components/MyTest.vue').default);
const app = new Vue({
    el:"#app"
});