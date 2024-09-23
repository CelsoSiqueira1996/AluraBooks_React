import axios from "axios";
import { ILivro } from "../../interfaces/ILivro";

const livrosHttp = axios.create({
    baseURL: 'http://localhost:8000/livros'
})

async function getLivros() {
    return (await livrosHttp.get<ILivro[]>('/')).data;
}

export const livrosService = {
    getLivros
}