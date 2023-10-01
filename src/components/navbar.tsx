import { FC } from "react";

import NavbarInput from "./navbarInput"
import { Container, FavMoviePageNavigation, HomeNavigation, InnerContainer, NavText} from "./navbar-styles";
import HomeIcon from '../resource/home.png'
import HeartIcon from '../resource/blackheart.png'
import { useNavigate } from "react-router-dom";

interface NavbarProps {
    changeSearchQuery?: CallableFunction
    showNavBar?: boolean
}

const Navbar:FC<NavbarProps> = ({changeSearchQuery, showNavBar = true}) => {
    const navigation = useNavigate();
    const homeNavigation = () => {
        navigation('/')
    }
    const favMoviePageNavigation = () => {
        navigation('/likedMovies')
    }

    return (
        <Container>
            <InnerContainer>
                <HomeNavigation onClick={homeNavigation}>
                    <img src={HomeIcon} alt="homeIcon"/>
                    <NavText>HOME</NavText>
                </HomeNavigation>
                {showNavBar && changeSearchQuery ? <NavbarInput changeSearchQuery={changeSearchQuery}/> : null}
                <FavMoviePageNavigation onClick={favMoviePageNavigation}>
                    <img src={HeartIcon} alt="heartIcon"/>
                    <NavText>LIKED MOVIES</NavText>
                </FavMoviePageNavigation>
            </InnerContainer>
        </Container>
    )
}

export default Navbar