import { useEffect, useState } from "react"
import { ILivro } from "../interfaces/ILivro"
import { favoritosService } from "../servicos/favoritosHttp";
import styled from "styled-components";
import livroSrc from "@/imagens/livro.png";

const AppContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState<ILivro[]>([]);

    useEffect(() => {
        retornaFavoritos();
    }, []);

    async function retornaFavoritos() {
        const livros = await favoritosService.getFavoritos();
        setFavoritos(livros);
    }

    async function removerDeFavoritos(id: string) {
        await favoritosService.deleteFavoritos(id);
        setFavoritos(favoritos.filter((livro) => livro.id !== id));
    }

    return (
        <AppContainer>
            <div>
                <Titulo>Aqui estão seus livros favoritos:</Titulo>
                <ResultadoContainer>
                    {
                        favoritos.length !== 0 ? favoritos.map(livro => (
                            <Resultado key={livro.id} onClick={() => removerDeFavoritos(livro.id)}>
                                <p>{livro.nome}</p>
                                <img src={livroSrc} />
                            </Resultado>
                        )) : null
                    }
                </ResultadoContainer>
            </div>
        </AppContainer>
    )
}