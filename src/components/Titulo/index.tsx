import styled from "styled-components";

interface TituloProps {
    cor?: string,
    tamanhofonte?: string,
    alinhamento?: 'center' | 'left' | 'right'
}

export const Titulo = styled.h2<TituloProps>`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhofonte || '18px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`