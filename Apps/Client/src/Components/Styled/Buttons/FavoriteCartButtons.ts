
import styled from "styled-components";
import { Colors } from "../__Colors";

const ButtonIcon = styled.button`
width:28px;
height:28px;
margin: auto;
padding-top: 4px;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;
border-style: none;

&:hover{
    background-color: ${Colors.bg_aliceblue};
}
`

const FavoriteButton = styled(ButtonIcon)`

`

const CartButton = styled(ButtonIcon)`

`

export {FavoriteButton, CartButton}