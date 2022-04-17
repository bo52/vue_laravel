require('./bootstrap');
import {createApp} from 'vue';
//главный компонент
import App from '../App.vue';
import {store} from '../store.js';
//компоненты
import map_wrap from 'components/map_wrap.vue';
import map_load from 'components/map_load.vue';
//создание главного компонента и регистрация внутри других компонентов
const app=createApp(App);
app.use(store);
app.component('map-wrap',map_wrap);
app.component('map-load',map_load);
app.mount('#app');
