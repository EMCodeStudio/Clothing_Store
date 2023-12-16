
import styled from "styled-components";
import { Colors } from "../_Colors";

const ButtonIcon = styled.button`
position: relative;
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
}`;

interface CountBadgeProps {
  $badgeColor?: string;
}

const CountBadge = styled.div<CountBadgeProps>`
  position: absolute;
  top: -2px;
  right: -2px;
  border-radius: 50%;
  padding: 0px 5px 1px 4.5px;
  font-size: 8.5px;
  background-color: ${(props) => props.$badgeColor || '#ffff'};
  color: white;
`



const NotifyButton = styled(ButtonIcon)`
/* .badge-color{ */
/* background-color: orange;  */
/* color: white; */
/* } */
`;

const ShippingButton = styled(ButtonIcon)`
/* .badge-color{ */
/* background-color: green;  */
/* color: white; */
/* } */
`;

const CartButton = styled(ButtonIcon)`
/* .badge-color{ */
/* background-color: blue;  */
/* color: white; */
/* } */
`;

export { ShippingButton, CartButton, NotifyButton, CountBadge }