<template>
   <div>
      <h1 class="title is-1">Editando</h1>
      <div class="columns">
         <div class="column">
            <b-field label="Nombre" label-position="on-border">
               <b-input v-model="formEditar.nombre" placeholder="Nombre de la pizza"></b-input>
            </b-field>
         </div>
         <div class="column">
            <b-field label="Ingredientes" label-position="on-border">
               <b-input v-model="formEditar.ingredientes" placeholder="Ingredientes"></b-input>
            </b-field>
         </div>
         <div class="column">
            <b-field label="Imagen" label-position="on-border">
               <b-input v-model="formEditar.imagen" placeholder="Imagen"></b-input>
            </b-field>
         </div>
      </div>
      <div class="columns">
         <div class="column">
            <b-field label="Descripción" label-position="on-border">
               <b-input v-model="formEditar.descripcion" placeholder="Descripción"></b-input>
            </b-field>  
         </div>
         <div class="column">
            <b-field label="Valor" label-position="on-border">
               <b-input v-model="formEditar.valor" type="number" placeholder="Valor"></b-input>
            </b-field>
         </div>
         <div class="column">
            <b-button rounded class="mx-2" type="is-success" outlined @click="editar(formEditar.nombre)">Editar pizza</b-button>
            <b-button rounded type="is-danger" outlined @click="cancelar">Cancelar</b-button>
         </div>
      </div>
      <div>
         <img :src="formEditar.imagen" alt="">
      </div>
   </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
   props: ['pizza'],
   data(){
      return{
         formEditar: {
            nombre: '',
            ingredientes: '',
            imagen: '',
            descripcion: '',
            valor: 0
         },
      }
   },

   mounted(){
      this.formEditar = this.pizza.data;
   },

   methods:{
      ...mapActions(['updatePizza']),

      cancelar(){
         this.$router.push({name: 'administrar'});
      },

      editar(pizzaNombre){
         const pizzaData = this.formEditar;
         const pizzaID = this.pizza.id
         this.$buefy.dialog.confirm({
            title: 'Editando pizza',
            message: `Se editará la pizza <b>${pizzaNombre}</b> en el menú. Desea continuar?.`,
            confirmText: 'Si, editar',
            cancelText: 'No, cancelar',
            type: 'is-info',
            hasIcon: true,
            icon: 'pencil-alt',
            iconPack: 'fa',
            onConfirm: () => {
               this.updatePizza({pizzaData ,pizzaID});
               this.$router.push({name: 'administrar'});
               this.$buefy.toast.open('Account deleted!')
            }
         })

      },
   },
}
</script>

<style scoped>

</style>