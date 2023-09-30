import React, { FC } from "react";

import NavbarInput from "./navbarInput"
import { Container} from "./navbar-styles";

interface NavbarProps {
    changeSearchQuery: CallableFunction
}

const Navbar:FC<NavbarProps> = ({changeSearchQuery}) => {
    return (
        <Container>
            <NavbarInput changeSearchQuery={changeSearchQuery}/>
        </Container>
    )
}

export default Navbar