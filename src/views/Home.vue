<template>
  <div class="home">
    <div class="home-banner">
      <h1 class="title is-1 has-text-white">🍕 PIZZAS & CERVEZAS 🍺</h1>
    </div>
    <div class="box m-4 columns is-flex-wrap-wrap">
      <div class="column is-4" v-for="(pizza, i) in pizzasDisponibles" :key="i">
        <cards :pizza="pizza" />
      </div>
    </div>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'
  import Cards from '../components/Cards.vue'

  export default {
    name: 'Home',
    components: {Cards},
    computed:{
      ...mapGetters(['pizzasDisponibles']),
    },
  }

</script>

<style scoped>
  .home{
    height: 100vh;
    background-color: #f5f5f5;
  }

  .home-banner{
    height: auto;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url("../assets/pizza-banner.jpg");
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title{
    height: 20rem;
    position: relative;
    transform: translateY(8rem);
  }
</style>
