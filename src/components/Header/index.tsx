import styled from "styled-components";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";


const StyledHeader = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </StyledHeader>
    )
}
