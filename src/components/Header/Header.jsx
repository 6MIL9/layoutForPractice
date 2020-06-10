import React from 'react';
import classes from './Header.module.scss';
import NavState from '../Context/navState';
import MainMenu from './MainMenu';

const Header = () => {
    return (
        <div className={classes.Header}>
        <NavState>
            <MainMenu />
        </NavState>
        </div>
    )
}

export default Header;