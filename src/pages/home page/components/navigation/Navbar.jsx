
import { Container, FlexBox, LinkStyled, Typography } from '../../../../App.Styled'
import { LogoStyled, LogoTextStyled, NavStyled, NavigateLinkStyled } from './Navbar.styled'
import { GrSearch } from 'react-icons/gr';
import { FiUser } from 'react-icons/fi'
import { BsBag } from 'react-icons/bs'

const Navbar = () => {
  return (
    <Container margin='0 52px'>
    <NavStyled items='center' justify='space-between'>
        <LogoStyled  items='center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 27 28" fill="none">
            <path d="M23.7766 10.6757L23.7604 10.6594C23.7591 10.6585 23.758 10.6573 23.7574 10.6559L13.6072 0.505493L3.45713 10.6556C3.45596 10.6568 3.45531 10.6584 3.45413 10.6592L3.43738 10.6754C1.8853 12.2362 0.899455 14.271 0.636575 16.4565C0.373696 18.6419 0.848865 20.8525 1.98654 22.7369C3.12422 24.6212 4.85912 26.0713 6.91546 26.8563C8.97178 27.6414 11.2315 27.7166 13.3355 27.0698C13.5125 27.0157 13.7017 27.0157 13.8788 27.0698C15.9826 27.7164 18.2422 27.6411 20.2984 26.856C22.3546 26.0708 24.0893 24.6209 25.2269 22.7366C26.3645 20.8523 26.8398 18.6419 26.577 16.4566C26.3142 14.2713 25.3285 12.2365 23.7766 10.6757ZM7.06636 17.369C7.01695 17.4184 6.97777 17.4771 6.95104 17.5416C6.92431 17.6061 6.91054 17.6753 6.91056 17.7452C6.92862 19.5366 7.4349 21.2892 8.37492 22.8143C8.39627 22.8489 8.40614 22.8894 8.40311 22.9299C8.40008 22.9704 8.38432 23.0089 8.35805 23.04C8.3318 23.0711 8.2964 23.093 8.25693 23.1027C8.21745 23.1123 8.17592 23.1093 8.13828 23.094C7.4316 22.7968 6.78962 22.3646 6.24823 21.8219C5.13875 20.7122 4.51502 19.2075 4.51401 17.6384C4.51301 16.0692 5.13481 14.5637 6.24287 13.4526L13.6072 6.089L20.9711 13.4526C22.0794 14.5635 22.7014 16.069 22.7004 17.6384C22.6994 19.2075 22.0756 20.7122 20.966 21.8219C20.4246 22.3646 19.7827 22.7968 19.0761 23.094C19.0384 23.1093 18.9968 23.1123 18.9574 23.1027C18.918 23.093 18.8826 23.0709 18.8562 23.04C18.83 23.0089 18.8142 22.9704 18.8111 22.9298C18.8081 22.8893 18.818 22.8488 18.8393 22.8142C19.7795 21.2892 20.2861 19.5366 20.3044 17.7452C20.3044 17.6753 20.2905 17.6061 20.2637 17.5415C20.2368 17.4769 20.1975 17.4183 20.148 17.3689L16.6648 13.6743C16.63 13.6453 16.5864 13.6295 16.5412 13.6295C16.4961 13.6295 16.4523 13.6453 16.4177 13.6743C16.383 13.7031 16.3597 13.7434 16.3515 13.7878C16.3434 13.8322 16.3511 13.878 16.3734 13.9173C17.7262 16.3654 16.5629 19.8817 14.623 21.8219L14.6128 21.8322C14.345 22.097 13.9835 22.2455 13.6069 22.2454C13.2303 22.2453 12.8689 22.0965 12.6013 21.8315L12.5919 21.8219C10.6513 19.8817 9.48857 16.3658 10.8416 13.9178C10.8638 13.8785 10.8716 13.8328 10.8635 13.7883C10.8554 13.7439 10.832 13.7037 10.7973 13.6748C10.7627 13.6459 10.7189 13.63 10.6738 13.63C10.6286 13.63 10.5849 13.6459 10.5503 13.6748L7.06636 17.369Z" fill="#121212"/>
            </svg>
            <LogoTextStyled>SHOPR</LogoTextStyled>
        </LogoStyled>

        <NavigateLinkStyled>
          <LinkStyled to='/' fontSize='18px'>Home</LinkStyled>
          <LinkStyled to='/products' fontSize='18px'>Product</LinkStyled>
          <LinkStyled to='/category' fontSize='18px'>Category</LinkStyled>
        </NavigateLinkStyled>

        <FlexBox items='center' gap='20px'>
          <Typography fontSize='22px'>
            <GrSearch />
          </Typography>
          <Typography fontSize='22px'>
            <FiUser />
          </Typography>
          <Typography fontSize='22px'>
            <BsBag />
          </Typography>
        </FlexBox>
    </NavStyled>
    </Container>
  )
}

export default Navbar