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
  color: #D4F2E9;
  font-size: 24px;
  line-height: 110%;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;  

  :hover {
    color: white;
  }
`;

const MenuLinkSignUpButton = styled.a`
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: #44C09C;
  background-color: #FFFFFF;
  width: 140px;
  text-align: center;
  font-size: 20px;
  line-height: 110%;
  font-weight: 400;
  max-width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 20px auto 0 ;
  border-radius: 10px;
`;

const MenuLinkLoginButton = styled.a`
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: #FFFFFF;
  width: 140px;
  text-align: center;
  font-size: 20px;
  line-height: 110%;
  font-weight: 400;
  max-width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 25px auto;
  border-radius: 10px 10px 10px 10px;
  border: solid 3px #73D0B5;

  :hover {
  background-color: #52C5A3;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
 `;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};



SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/">Generic</MenuLink>
      <MenuLink href="/">Elements</MenuLink>
      <ButtonContainer>
        <MenuLinkSignUpButton href="/">SIGN UP</MenuLinkSignUpButton>
        <MenuLinkLoginButton href="/">LOG IN</MenuLinkLoginButton>
      </ButtonContainer>
    </>
  ),
};