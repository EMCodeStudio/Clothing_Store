import { rem, useMantineTheme } from "@mantine/core"
import { IconHeart, IconShoppingCart } from "@tabler/icons-react"
import { CartButton, FavoriteButton } from "../../Styled/Buttons/FavoriteCartButtons"
import '../MenuStyle.scss' 

const FavoriteCartOptions = () => {

  const theme = useMantineTheme()

  return (
    <div className="container-icons">

      <div className="row-icons">

        <FavoriteButton>
          <IconHeart
            style={{ width: rem(16), height: rem(16) }}
            color={theme.colors.red[6]}
            stroke={3}
          />
        </FavoriteButton>

        <CartButton>
          <IconShoppingCart
            style={{ width: rem(16), height: rem(16) }}
            color={theme.colors.blue[6]}
            stroke={3}
          />
        </CartButton>

      </div>
    </div>
  )
}

export default FavoriteCartOptions