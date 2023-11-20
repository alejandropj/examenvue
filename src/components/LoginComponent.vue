<template>
  <div v-if="token === null">
    <h1>Login Component</h1>
    <form v-on:submit.prevent="enviarDatos()">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" v-model="usuario.email" />
        
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label">Contraseña</label>
        <input type="password" class="form-control" v-model="usuario.password" />
        
      </div>

      <!-- Submit button -->
      <button class="btn btn-primary btn-block mb-4">
        Iniciar Sesion
      </button>

    </form>
  </div>
  <div v-else>
    <h1>Iniciado Sesion</h1>
    <router-link to="/perfil" class="btn btn-dark">Ir a tu perfil</router-link>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "LoginComponent",
  data(){
    return {
        usuario:{
            email:"",
            password:""
        },
        token:null
    }
  },
  mounted(){
    this.token = localStorage.getItem("token");
  },
  methods:{
    enviarDatos(){
        console.log(this.usuario)
        service.login(this.usuario).then(res=>{
            console.log(res.data.response)
            localStorage.setItem("token", res.data.response);
            this.$router.push("/perfil");
        })
    },
  }
};
</script>

<style>
</style>