import Styled from "styled-components"
import { Colors } from "../_Colors"



const ButtonIcon = Styled.button`
height:24px;
width:24px;
padding:    2px 0px 0px 0px;
background-color: ${Colors.bg_lightwhite};
border-radius: 50%;
border: none;
cursor: pointer;
`


const FacebookIcon = Styled(ButtonIcon)`
color: ${Colors.facebook};
`

const TwitterIcon = Styled(ButtonIcon)`
color:${Colors.twitter};
`

const InstagramIcon = Styled(ButtonIcon)`
color: ${Colors.instagram};
`

const YoutubeIcon = Styled(ButtonIcon)`
color: ${Colors.youtube};
`

export { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon }