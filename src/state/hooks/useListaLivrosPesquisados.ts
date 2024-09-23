import { useRecoilValue } from "recoil";
import { ILivro } from "../../interfaces/ILivro";
import { livrosPesquisados } from "../seletores";

export default function useListaLivrosPesquisados() {
    const listaLivrosPesquisados = useRecoilValue<ILivro[]>(livrosPesquisados);

    return {
        listaLivrosPesquisados
    }
}