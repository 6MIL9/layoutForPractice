import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../Context/navState';

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  outline: 0;
  border: 0;
  padding: 20px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover {
    span:nth-of-type(1) {
      width: 27px;
    }

    span:nth-of-type(2) {
      width: 35px;
    }

    span:nth-of-type(3) {
      width: 27px;
    }

    cursor: pointer;
  }
`;

const Bar = styled.span`
  display: block;
  width: 35px;
  height: 4px;
  margin-bottom: 7px;
  background-color: #fff;
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};


export default HamburgerButton;