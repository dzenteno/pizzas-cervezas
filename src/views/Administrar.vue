<template>
   <div id="admin">
      <h1 class="title is-3">Administrar</h1>
      <b-button rounded @click="modalAgregar = true">Agregar pizza</b-button>

      <!-- Lista -->
      <div class="columns is-flex-wrap-wrap">
         <div class="column is-4" v-for="(pizza, i) in pizzasDisponibles" :key="i">
            <div class="box has-text-left">
               <article class="media is-align-items-center">
                  <div class="media-left">
                     <figure class="image is-64x64">
                     <img class="is-rounded" :src="pizza.data.imagen" alt="Image">
                     </figure>
                  </div>
                  <div class="media-content">
                     <div class="content is-capitalized">
                        <p>
                           <strong>{{pizza.data.nombre}}</strong> <small>${{pizza.data.valor}}</small>
                           <br>
                           <b>Ingredientes: </b> {{pizza.data.ingredientes}}
                        </p>
                     </div>
                     <div class="has-text-right">
                        <b-button size="is-small" type = "is-info" outlined rounded class="mx-2" @click="irEditar(pizza)">Editar</b-button>
                        <b-button size="is-small" type = "is-danger" outlined rounded @click="deletePizzas(pizza.id, pizza.data.nombre)">Eliminar</b-button>
                     </div>
                  </div>
               </article>
            </div> 
         </div>
      </div>

      <!-- Modal -->
      <b-modal v-model="modalAgregar">
         <div class="box py-6">
            <h1 class="title is-4">Añadiendo pizzas al menú</h1>
            <div class="columns">
               <div class="column">
                  <b-field label="Nombre" label-position="on-border">
                     <b-input v-model="formPizza.nombre" placeholder="Nombre de la pizza"></b-input>
                  </b-field>
               </div>
               <div class="column">
                  <b-field label="Ingredientes" label-position="on-border">
                     <b-input v-model="formPizza.ingredientes" placeholder="Ingredientes"></b-input>
                  </b-field>
               </div>
               <div class="column">
                  <b-field label="Imagen" label-position="on-border">
                     <b-input v-model="formPizza.imagen" placeholder="Imagen"></b-input>
                  </b-field>
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  <b-field label="Descripción" label-position="on-border">
                     <b-input v-model="formPizza.descripcion" placeholder="Descripción"></b-input>
                  </b-field>
               </div>
               <div class="column">
                  <b-field label="Valor" label-position="on-border">
                     <b-input type="number" v-model="formPizza.valor" placeholder="Valor"></b-input>
                  </b-field>
               </div>
               <div class="column">
                  <b-button rounded class="mx-2" type="is-success" outlined @click="addPizza(formPizza)">Agregar pizza</b-button>
                  <b-button rounded type="is-danger" outlined @click="btnCancelar">Cancelar</b-button>
               </div>
            </div>
         </div> 
      </b-modal>
   </div>
</template>

<script>
   import {mapActions, mapGetters} from 'vuex' 

   export default {
      data(){
         return{
            modalAgregar: false,
            formPizza: {
               nombre: '',
               ingredientes: '',
               imagen: '',
               descripcion: '',
               valor: 0
            },
         }
      },

      computed:{
         ...mapGetters(['pizzasDisponibles']),
      },

      methods:{
         ...mapActions(['addPizzas', 'deletePizza']),
         

         addPizza(pizza){
            this.addPizzas(pizza);
            this.formPizza.nombre = '';
            this.formPizza.ingredientes = '';
            this.formPizza.imagen = '';
            this.formPizza.descripcion = '';
            this.formPizza.valor = 0;
            this.modalAgregar = false;
            this.$buefy.toast.open({
               message: 'Pizza añadida al menú!',
               type: 'is-success'
            })
         },

         deletePizzas(pizzaID, pizzaNombre){
            this.$buefy.dialog.confirm({
               title: 'Eliminando del menú',
               message: `Está seguro de <b>eliminar</b> la pizza <b>${pizzaNombre}</b> del menú?`,
               confirmText: 'Eliminar',
               cancelText: 'Cancelar',
               type: 'is-danger',
               hasIcon: true,
               icon: 'trash-alt',
               iconPack: 'fa',
               onConfirm: () => {
                  this.deletePizza(pizzaID);
                  this.$buefy.toast.open('Pizza eliminada del menú!')
               }
            })
         },
         
         btnCancelar(){
            this.formPizza.nombre = '';
            this.formPizza.ingredientes = '';
            this.formPizza.imagen = '';
            this.formPizza.descripcion = '';
            this.formPizza.valor = 0;
            this.modalAgregar = false;
         },

         irEditar(pizza){
            this.$router.push({ name: 'editar', params: { pizza: pizza} });
         },
      },

      
   }
</script>

<style scoped> 
   #admin{
      height: 100vh;
      background-color: #f5f5f5;
   }

</style>