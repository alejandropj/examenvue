<template>
  <div v-if="token === null">
    <h1 style="color:red">No deberias estar aquí</h1>
  </div>
  <div v-else>
    <h1>Perfil</h1>
    <h2>Nombre: {{usuario.nombre}}</h2>
    <h2>Email: {{usuario.email}}</h2>
    <h2>Contraseña: {{usuario.pass}}</h2>

    <router-link to="/compras" class="btn btn-success">Ver mis compras</router-link>
    <router-link to="/comprar" class="btn btn-info">Ir de compras</router-link>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "PerfilComponent",
  data(){
    return {
        usuario:{},
        token:null
    }
  },
  mounted(){
    this.token = localStorage.getItem("token");
    service.getPerfil().then(res=>{
        this.usuario = res.data;
        console.log(this.usuario)
    })
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