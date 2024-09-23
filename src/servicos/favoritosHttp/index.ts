import axios from "axios";
import { ILivro } from "../../interfaces/ILivro";

const favoritosHttp = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getFavoritos() {
    const data = (await favoritosHttp.get<ILivro[]>('/')).data;
    return data;
};

async function postFavoritos(id: string) { 
    const resultado = (await favoritosHttp.post('/', {
        id
    })).data;
    alert(resultado.message)
};

async function deleteFavoritos(id: string) {
    const resultado = (await favoritosHttp.delete(`/${id}`)).data;
    alert(resultado.message)
};

export const favoritosService = {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}