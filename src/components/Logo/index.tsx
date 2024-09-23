import styled from "styled-components";
import logo from '@/imagens/logo.svg';
import { NavLink } from "react-router-dom";

const StyledLogo = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
    && p {
        color: black;
        strong {
            color: black;
        }
    }
`

export default function Logo() {
    return (
        <NavLink 
            style={({ isActive }) => ({textDecoration: isActive ? "underline": "none"})}
            to="/"
            end
        >
            <StyledLogo>
                <img src={logo} alt='Logo' />
                <p><strong>Alura</strong>Books</p>
            </StyledLogo>
        </NavLink>
    )
}