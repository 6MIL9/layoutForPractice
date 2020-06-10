import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { MenuContext } from '../Context/navState';

const Menu = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 300px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #44C09C;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 26%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  line-height: 110%;
  font-weight: 400;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};



SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/">Главная</MenuLink>
      <MenuLink href="/articles">Статьи</MenuLink>
      <MenuLink href="/about">О сайте</MenuLink>
      <MenuLink href="/contact">Контакт</MenuLink>
    </>
  ),
};