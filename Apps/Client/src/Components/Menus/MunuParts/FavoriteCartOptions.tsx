import { rem, useMantineTheme } from "@mantine/core"
import { IconBell, IconShoppingCart } from "@tabler/icons-react"
import { CartButton, FavoriteButton } from "../../Styled/Buttons/FavoriteCartButtons"
import '../MenuStyle.scss' 

const FavoriteCartOptions = () => {

  const theme = useMantineTheme()

  return (
    <div className="shop-container-icons">

      <div className="row-icons">

        <FavoriteButton>
          <IconBell
            style={{ width: rem(18), height: rem(21) }}
            color={theme.colors.yellow[6]}
            stroke={2}
          />
        </FavoriteButton>

        <CartButton>
          <IconShoppingCart
            style={{ width: rem(18), height: rem(21) }}
            color={theme.colors.blue[6]}
            stroke={2}
          />
        </CartButton>

      </div>
    </div>
  )
}

export default FavoriteCartOptions