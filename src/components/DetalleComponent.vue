<template>
  <div>
    <h1>Detalle Component</h1>
    <div class="d-flex justify-content-center">
      <div class="card" style="width: 18rem" v-if="cubo">
        <img :src="cubo.imagen" class="card-img-top" alt="Cubo" />
        <div class="card-body">
          <h5 class="card-title">{{ cubo.nombre }}</h5>
          <p class="card-text">{{ cubo.precio }}€</p>
          <router-link
            :to="'/marca/' + cubo.marca"
            class="btn btn-primary"
            >Volver</router-link
          >
<!--           <router-link
            :to="'/comprar/' + cubo.idCubo"
            class="btn btn-primary"
            :class="{
              disabled: this.token == undefined,
            }"
            >Comprar</router-link
          > -->
        </div>
      </div>
    </div>

    <br />

    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-0 border" style="background-color: #f0f2f5">
          <div class="card-body p-4">
            <div
              class="card mb-4"
              v-for="comentario in comentarios"
              :key="comentario"
            >
              <div class="card-body">
                <p>{{ comentario.comentario }}</p>

                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <p class="small mb-0 ms-2">
                      Usuario {{ comentario.idUsuario }}
                    </p>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <p class="small text-muted mb-0">
                      {{ comentario.fechaComentario }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
  name: "DetalleComponent",
  data() {
    return {
      cubo: null,
      comentarios: null,
      token: null,
    };
  },
  mounted() {
    this.token = localStorage["token"];
    //console.log("Token " + this.token==undefined)
/*     console.log("token" in localStorage); */
    var id = this.$route.params.id;
    /* console.log(id); */
    service.getCubo(id).then((res) => {
      console.log(res.data);
      this.cubo = res.data;
    });
    service.getComentarios(id).then((res) => {
      console.log(res.data);
      this.comentarios = res.data;
    });
  },
};
</script>

<style>
</style>