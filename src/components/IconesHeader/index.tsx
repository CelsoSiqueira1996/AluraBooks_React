import sacola from "@/imagens/sacola.svg";
import perfil from "@/imagens/perfil.svg";
import styled from "styled-components";

const StyledIconesHeader = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;
    li {
        height: 100%;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export default function IconesHeader() {

    const icones = [
        sacola, perfil
    ];

    return (
        <StyledIconesHeader>
            {icones.map((icone) => (
                <li key={icone}><img src={icone} /></li>
            ))}
        </StyledIconesHeader>
    )
}