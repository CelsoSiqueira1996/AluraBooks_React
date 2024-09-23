import styled from "styled-components";
import StyledInput from "../Input";
import useListaLivrosPesquisados from "../../state/hooks/useListaLivrosPesquisados";
import useValorFiltro from "../../state/hooks/useValorFiltro";
import useUpdateFiltro from "../../state/hooks/useUpdateFiltro";
import { favoritosService } from "../../servicos/favoritosHttp";
import livroSrc from "@/imagens/livro.png";

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    min-height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

export default function Pesquisa() {
    const { filtro } = useValorFiltro();
    const { updateFiltro } = useUpdateFiltro();
    const { listaLivrosPesquisados } = useListaLivrosPesquisados();

    async function adicionarFavorito(id: string) {
        await favoritosService.postFavoritos(id);
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <StyledInput
                value={filtro}
                type="text"
                placeholder="Encontre sua próxima leitura..."
                onChange={(event) => updateFiltro(event.target.value)}
            />
            {listaLivrosPesquisados.map((livro) => (
                <Resultado key={livro.id} onClick={() => adicionarFavorito(livro.id)}>
                    <img src={livroSrc} />
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}