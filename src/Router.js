import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import RegistroComponent from "./components/RegistroComponent.vue"
import PerfilComponent from "./components/PerfilComponent.vue"
import DetalleComponent from "./components/DetalleComponent.vue"
import MarcaComponent from "./components/MarcaComponent.vue"
import ComprasComponent from "./components/ComprasComponent.vue"
import RealizarCompra from "./components/RealizarCompra.vue"


const myRoutes = [
    {
        path:"/", component:HomeComponent
    },
    {
        path:"/login", component:LoginComponent
    },
    {
        path:"/registro", component:RegistroComponent
    },
    {
        path:"/perfil", component:PerfilComponent
    },
    {
        path:"/compras", component:ComprasComponent
    },
    {
        path:"/comprar", component:RealizarCompra
    },
    {
        path:"/detalle/:id", component:DetalleComponent
    },
    {
        path:"/marca/:marca", component:MarcaComponent
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;