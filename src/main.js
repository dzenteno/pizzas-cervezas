import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

/** Conection firebase */
import firebaseConfig from '@/configs/firebase.js' 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import 'firebase/compat/auth'; 
firebase.initializeApp(firebaseConfig)

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
