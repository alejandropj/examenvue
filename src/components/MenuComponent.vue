<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                to="/login"
                >Login</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/registro"
                >Registro</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/" v-on:click="cerrarSesion()"
                >Cerrar Sesión</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>
              <ul class="dropdown-menu">
                <li v-for="marca in marcas" :key="marca">
                  <router-link class="dropdown-item" :to="'/marca/'+marca"
                    >{{marca}}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: null,
    };
  },
  mounted() {
    service.getMarcas().then((res) => {
      this.marcas = res.data;
    });
  },
  methods:{
    cerrarSesion(){
        localStorage.clear();
    }
  }
};
</script>

<style>
</style>