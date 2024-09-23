import CardRecomenda from '../CardRecomenda'
import { Titulo } from '../Titulo'
import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import imagemLivro from '@/imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00' 
                tamanhofonte='36px'
            >ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img key={livro.id} src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo='Talvez você se interesse por...'
                subtitulo='Angular 11'
                descricao='Construindo uma aplicação com a plataforma Google'
                src={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos