<template>
  <div>
    <h1>Marca {{ marca }}</h1>
    <div class="container">
      <div v-for="cubo in cubos" :key="cubo">
        <div class="card" style="width: 18rem">
          <img :src="cubo.imagen" class="card-img-top" alt="Cubo" />
          <div class="card-body">
            <h5 class="card-title">{{ cubo.nombre }}</h5>
            <p class="card-text">{{ cubo.precio }}€</p>
            <router-link :to="'/detalle/' + cubo.idCubo" class="btn btn-primary"
              >Detalle</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "MarcaComponent",
  data() {
    return {
      cubos: null,
      marca: null,
    };
  },
  mounted() {
    this.marca = this.$route.params.marca;
    service.getMarcaCubos(this.marca).then((res) => {
      this.cubos = res.data;
    });
  },
  watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.marca = this.$route.params.marca;
        service.getMarcaCubos(this.marca).then((res) => {
          this.cubos = res.data;
        });
      }
    },
  },
};
</script>

<style>
</style>