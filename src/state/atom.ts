import { atom } from "recoil";
import { ILivro } from "../interfaces/ILivro";
import { livrosService } from "../servicos/livrosHttp";

export const livrosState = atom<ILivro[]>({
    key: 'livrosState',
    default: livrosService.getLivros()
});

export const filtroState = atom<string>({
    key: 'filtroState',
    default: ''
});
