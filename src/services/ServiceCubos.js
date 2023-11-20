import { Global } from "@/Global";
import axios from "axios";

export default class ServiceCubos {
    getCubos(){
        return new Promise (function(resolve){
            var request = "api/Cubos";
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response)
            })
        })
    }
    getCubo(id){
        return new Promise (function(resolve){
            var request = "api/Cubos/"+id;
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response)
            })
        })
    }
    getComentarios(id){
        return new Promise (function(resolve){
            var request = "api/ComentariosCubo/GetComentariosCubo/"+id;
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response)
            })
        })
    }
    getMarcas(){
        return new Promise (function(resolve){
            var request = "api/Cubos/Marcas";
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response)
            })
        })
    }
    getMarcaCubos(marca){
        return new Promise (function(resolve){
            var request = "api/Cubos/CubosMarca/"+marca;
            var url = Global.urlCubos + request;
            axios.get(url).then(response=>{
                resolve(response)
            })
        })
    }
    login(usuario){
        return new Promise(function(resolve){
            var request = "api/Manage/Login";
            var url = Global.urlCubos + request;
            axios.post(url,usuario).then(response=>{
                resolve(response);
            })
        })
    }
    registro(usuario){
        return new Promise(function(resolve){
            var request = "api/Manage/RegistroUsuario";
            var url = Global.urlCubos + request;
            axios.post(url,usuario).then(response=>{
                resolve(response);
            })
        })
    }
    getToken(){
        const headers = {
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
        return headers;
    }
    getPerfil(){
        const headers = this.getToken();
        return new Promise (function(resolve){
            var request = "api/Manage/PerfilUsuario";
            var url = Global.urlCubos + request;
            axios.get(url,{headers}).then(response=>{
                resolve(response)
            })
        })
    }
    getCompras(){
        const headers = this.getToken();
        return new Promise(function(resolve){
            var request = "api/Compra/ComprasUsuario";
            var url = Global.urlCubos + request;
            axios.get(url,{headers}).then(response=>{
                resolve(response);
            })
        })
    }
    postCompra(id){
        const headers = this.getToken();
        return new Promise(function(resolve){
            var request = "api/Compra/InsertarPedido/"+id;
            var url = Global.urlCubos + request;
            axios.post(url,{headers}).then(response=>{
                resolve(response);
            })
        })
    }
}