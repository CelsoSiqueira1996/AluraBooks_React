import { selector } from "recoil";
import { ILivro } from "../../interfaces/ILivro";
import { filtroState, livrosState } from "../atom";

export const livrosPesquisados = selector<ILivro[]>({
    key: 'livrosPesquisados',
    get: ({ get }) => {
        const filtro = get(filtroState).toLocaleLowerCase();
        const livros = get(livrosState);
        return !filtro? [] : livros.filter((livro) => livro.nome.toLocaleLowerCase().includes(filtro));
    }
});

