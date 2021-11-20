<template>
  <div>
    <div class="card" style="width: 20rem">
      <div class="card-image">
        <figure class="image">
         <img class="img-pizza" :src="pizza.data.imagen" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content" horizontal>
        <div class="media">
          <div class="media-content">
            <p class="title is-4 is-capitalized">{{ pizza.data.nombre }}</p>
          </div>
        </div>

        <div class="content has-text-left">
          <b>Ingredientes</b>
          <br />
          <p class="is-capitalized">
            {{ pizza.data.ingredientes }}
          </p>
          <p class="has-text-right"><b>Valor: </b>${{ pizza.data.valor }}</p>
          <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pizza"],
};
</script>

<style scoped>
.img-pizza {
  object-fit: cover;
  height: 8rem;
}
</style>