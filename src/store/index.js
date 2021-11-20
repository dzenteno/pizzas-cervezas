import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizzas: [],
  },

  getters:{
    pizzasDisponibles(state){
      return state.pizzas;
    },
  },

  mutations: {
    setPizzas(state, pizzas){
      state.pizzas = pizzas;
    },
  }, 

  actions: {

    getPizzas(context){
      firebase.firestore().collection('pizzas').onSnapshot( (snapShot) => {
        const pizzas = [];
        snapShot.forEach( (doc) => {
          pizzas.push({ id: doc.id, data: doc.data() });
        });
        context.commit('setPizzas', pizzas);
      });
    },

    addPizzas(context, pizza){
      firebase.firestore().collection('pizzas').add(pizza);
    },

    deletePizza(context, pizzaID){
      firebase.firestore().collection('pizzas').doc(pizzaID).delete();
    },

    updatePizza(context,{ pizzaData, pizzaID } ){
		firebase.firestore().collection('pizzas').doc(pizzaID).set(pizzaData);
    },
    
  },

  modules: {
  }
})
