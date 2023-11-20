<template>
  <div>
    <h1>Compras </h1>
    <ul v-for="compra in compras" :key="compra">
        <li>IdCubo {{compra.idCubo}}</li>
        <li>IdCubo {{compra.idPedido}}</li>
        <li>IdCubo {{compra.idUsuario}}</li>
        <li>IdCubo {{compra.fechaPedido}}</li>
        <br>
    </ul>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
    name:"ComprasComponent",
    data(){
        return{
            compras:null
        }
    },
    mounted(){
        service.getCompras().then(res=>{
            this.compras=res.data
            console.log(this.compras)
        })
    }
}
</script>

<style>

</style>