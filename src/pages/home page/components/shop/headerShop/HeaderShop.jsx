import { LinkStyled, Typography } from '../../../../../App.Styled'
import {HeaderShopStyled, BreadcrumbsStyled} from './HeaderShop.styled'

const HeaderShop = () => {
  return (
    <HeaderShopStyled items='center' justify='center' >
              <BreadcrumbsStyled items='center'>
                    <LinkStyled to='/' margin='0 12px 0 0'>Home &gt; </LinkStyled>
                    <LinkStyled to='/products'>Shop</LinkStyled>
              </BreadcrumbsStyled>
                <Typography fontSize='54px' fontWeight={500} margin={"10px 0"}>
                    Shop
                </Typography>


                <Typography fontSize='18px' width={"45%"}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.
                </Typography>
    </HeaderShopStyled>
  )
}

export default HeaderShop