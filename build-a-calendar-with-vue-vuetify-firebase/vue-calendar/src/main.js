import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCUVtimzfN-I-Kq_xgA5btVSxxR_8DqyLg",
    authDomain: "vue-calendar-4bb73.firebaseapp.com",
    databaseURL: "https://vue-calendar-4bb73.firebaseio.com",
    projectId: "vue-calendar-4bb73",
    storageBucket: "vue-calendar-4bb73.appspot.com",
    messagingSenderId: "981348708158",
    appId: "1:981348708158:web:9e216c9d91bc8203e6066f"
});

export const db = firebase.firestore();


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
