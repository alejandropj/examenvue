<template>
  <div>
    <h1>Realizar Compra</h1>
    <form v-on:submit.prevent="enviarDatos()">
      <label>Selecciona cubo: </label>
      <select v-model="cuboSeleccionado">
        <option v-for="cubo in cubos" :key="cubo"  :value="cubo.idCubo">{{cubo.nombre}}</option>
      </select>
      <button>Comprar</button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "RealizarCompra",
  data(){
    return{
        cubos:null,
        cuboSeleccionado:null
    }
  },
  mounted(){
    service.getCubos().then(res=>{
        console.log(res.data)
        this.cubos = res.data
    })
  },
  methods:{
    enviarDatos(){
        console.log(this.cuboSeleccionado);
        service.postCompra(this.cuboSeleccionado).then(res=>{
            console.log(res);
        })
    }
  }
};
</script>

<style>
</style>