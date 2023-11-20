<template>
  <div v-if="token === null">
    <h1>Login Component</h1>
    <form v-on:submit.prevent="enviarDatos()">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label">IdUsuario</label>
        <input type="number" class="form-control" v-model="usuario.idUsuario" disabled/>
        
      </div>
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="usuario.nombre" />
        
      </div>
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" v-model="usuario.email" />
        
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label">Contraseña</label>
        <input type="password" class="form-control" v-model="usuario.pass" />
        
      </div>

      <!-- Submit button -->
      <button class="btn btn-primary btn-block mb-4">
        Registrarse
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
  name: "RegistroComponent",
  data(){
    return {
        usuario:{
            idUsuario:1,
            nombre:"",
            email:"",
            pass:""
        },
        token:null
    }
  },
  mounted(){
    this.token = localStorage.getItem("token");
  },
  methods:{
    enviarDatos(){
        console.log(this.usuario);
        service.registro(this.usuario).then(res=>{
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