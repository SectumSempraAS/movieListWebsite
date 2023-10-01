import React, { FC } from "react";

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
    const navigate = useNavigate();
    const homeNavigation = () => {
        navigate('/movies')
    }
    const favMoviePageNavigation = () => {
        navigate('/movies/liked')
    }

    return (
        <Container>
            <InnerContainer>
                <HomeNavigation onClick={homeNavigation}>
                    <img src={HomeIcon}/>
                    <NavText>HOME</NavText>
                </HomeNavigation>
                {showNavBar && changeSearchQuery ? <NavbarInput changeSearchQuery={changeSearchQuery}/> : null}
                <FavMoviePageNavigation onClick={favMoviePageNavigation}>
                    <img src={HeartIcon} />
                    <NavText>LIKED MOVIES</NavText>
                </FavMoviePageNavigation>
            </InnerContainer>
        </Container>
    )
}

export default Navbar