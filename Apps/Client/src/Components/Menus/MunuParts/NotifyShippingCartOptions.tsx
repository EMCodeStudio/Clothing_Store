import { rem, useMantineTheme } from "@mantine/core"
import { IconBell, IconShoppingBag, IconTruck } from "@tabler/icons-react"
import { CartButton, CountBadge, NotifyButton, ShippingButton } from "../../Styled/Buttons/NotifyShippingCartButtons"
import '../MenuStyle.scss'

const NotifyShippingCartOptions = () => {

  const theme = useMantineTheme()

  return (
    <div className="shop-container-icons">

      <div className="row-icons">

        <NotifyButton>
          <IconBell
            style={{ width: rem(18), height: rem(21) }}
            color={theme.colors.yellow[6]}
            stroke={2}
          />
           <CountBadge $badgeColor={theme.colors.orange[4]}>5</CountBadge>
        </NotifyButton>

        <ShippingButton>
          <IconTruck
            style={{ width: rem(18), height: rem(21) }}
            color={theme.colors.green[6]}
            stroke={2}
          />
        </ShippingButton>

        <CartButton>
          <IconShoppingBag
            style={{ width: rem(18), height: rem(21) }}
            color={theme.colors.blue[6]}
            stroke={2}
          />
          <CountBadge $badgeColor={theme.colors.blue[6]}>5</CountBadge>
        </CartButton>

      </div>
    </div>
  )
}

export default NotifyShippingCartOptions