import React, { FC, useEffect, useState } from "react"
import {SearchButton, SearchInput } from "./navbar-styles";

interface NavbarProps {
    changeSearchQuery: CallableFunction
}

export const NavbarInput:FC<NavbarProps> = ({changeSearchQuery}) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const changeSearchValue = (e: any) => {
        // use a throttle or debounce function here
        setSearchValue(e.target.value)
    }

    useEffect(() => {

        const delayInputTimeout = setTimeout(() => {
            changeSearchQuery(searchValue)
        }, 1000);

        return () => clearTimeout(delayInputTimeout);

    },[searchValue])

    return (
        <div>
            <SearchInput type="text" name="inputSearch" value={searchValue} onChange={changeSearchValue} />
            <SearchButton>Search</SearchButton>
        </div>
    )
}

export default NavbarInput