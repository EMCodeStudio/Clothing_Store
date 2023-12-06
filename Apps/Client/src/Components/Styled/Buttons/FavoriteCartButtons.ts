
import styled from "styled-components";
import { Colors } from "../__Colors";

const ButtonIcon = styled.button`
width:28px;
height:28px;
margin: auto;
padding-top: 3px;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;
border-style: none;
background-color: ${Colors.bg_aliceblue};
&:hover{
    background-color: ${Colors.white};
}
`

const FavoriteButton = styled(ButtonIcon)`

`

const CartButton = styled(ButtonIcon)`

`

export {FavoriteButton, CartButton}