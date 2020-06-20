import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../Hooks/onClickOutside';
import { MenuContext } from '../Context/navState';
import HamburgerButton from './HamburgerButton';
import ColoredHamburgerButton from './ColoredHamburgerButton';
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
  padding: 0 60px;
  z-index: 500;
`;

const ColoredNavbar = styled.div`
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
  color: #888888;
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 60px;
  z-index: 500;
  background-color: #FFFFFF;
`;

const MenuText = styled.h3`
  font-weight: 300;
  font-family: 'Roboto', sans-serif;  
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  let [Scrolled, setScrolled] = React.useState(0);

  let innerHeight = window.innerHeight;

  window.onload = function () {
    window.dispatchEvent(new Event("scroll"));
  }
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > innerHeight) {
      setScrolled(1);
    } else {
      setScrolled(0);
    }
  });

  return (
    <header ref={node}>
      {Scrolled ?
        (<>
        <ColoredNavbar>
          <ColoredHamburgerButton />
          <MenuText>Menu</MenuText>
        </ColoredNavbar>
        </>) :
        (<>
        <Navbar>
          <HamburgerButton />
          <MenuText>Menu</MenuText>
        </Navbar>
        </>)}
        <SideMenu/>
    </header>
  );
};

export default MainMenu;