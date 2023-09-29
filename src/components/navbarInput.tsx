import React, { useState } from "react"
import {SearchButton, SearchInput } from "./navbar-styles";

export const NavbarInput = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const changeSearchValue = (e: any) => {
        // use a throttle or debounce function here
        setSearchValue(e.target.value)
    }


    return (
        <div>
            <SearchInput type="text" name="inputSearch" value={searchValue} onChange={changeSearchValue} />
            <SearchButton>Search</SearchButton>
        </div>
    )
}

export default NavbarInput