<template>
   <div id="login">
      <div class="box login-box is-flex is-flex-direction-column">
         <b-field label="Usuario" label-position="on-border">
            <b-input placeholder="Correo electrónico"></b-input>
         </b-field>
         <b-field label="Contraseña" label-position="on-border">
            <b-input placeholder="Contraseña"></b-input>
         </b-field>
         <b-button type = "is-info">Ingresar</b-button>
      </div>
   </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
   #login{
      height: 100vh;
      background-color: #f5f5f5;
   }

   .login-box{
      transform: translateY(12rem);
      width: 25rem;
      margin: auto;
   }
</style>