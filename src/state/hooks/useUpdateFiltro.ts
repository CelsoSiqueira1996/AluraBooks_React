import { useSetRecoilState } from "recoil";
import { filtroState } from "../atom";

export default function useUpdateFiltro() {
    const setFiltroState = useSetRecoilState<string>(filtroState);
    function updateFiltro(filtro: string) {
        setFiltroState(filtro)
    }

    return {
        updateFiltro
    }
}