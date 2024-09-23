import { useRecoilValue } from "recoil";
import { filtroState } from "../atom";

export default function useValorFiltro() {
    const filtro = useRecoilValue<string>(filtroState);

    return {
        filtro
    }
}