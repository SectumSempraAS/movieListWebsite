import React, { FC, useEffect, useState } from "react"
import {SeachBar, SearchButton, SearchInput } from "./navbar-styles";

interface NavbarProps {
    changeSearchQuery: CallableFunction
}

export const NavbarInput:FC<NavbarProps> = ({changeSearchQuery}) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const changeSearchValue = (e: any) => {
        // use a throttle or debounce function here
        setSearchValue(e.target.value)
    }

    const onSearch = () => {
        changeSearchQuery(searchValue)
    }

    return (
        <SeachBar>
            <SearchInput type="text" name="inputSearch" value={searchValue} onChange={changeSearchValue} />
            <SearchButton onClick={onSearch}>Search</SearchButton>
        </SeachBar>
    )
}

export default NavbarInput