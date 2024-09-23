import { NavLink } from "react-router-dom";
import styled from "styled-components"

const StyledOpcoesHeader = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;
    li {
        color: black;
        height: 100%;
        min-width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export default function OpcoesHeader() {

    const textoOpcoes = [
        'CATEGORIAS', 'ESTANTE', 'FAVORITOS'
    ];

    return (
        <StyledOpcoesHeader>
            {textoOpcoes.map((opcao) => {
                return (
                    <NavLink key={opcao}
                        to={`/${opcao.toLocaleLowerCase()}`} style={({ isActive }) => (
                            {
                                textDecoration: isActive ? "underline" : "none",
                            })}>
                        <li><p>{opcao}</p></li>
                    </NavLink>)
            })}
        </StyledOpcoesHeader >
    )
}