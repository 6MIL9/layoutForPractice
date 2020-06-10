import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../Hooks/onClickOutside';
import { MenuContext } from '../Context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: none none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  z-index: 500;
`;

const MenuText = styled.h3`
  font-weight: 300;
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
        <MenuText>Menu</MenuText>
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;