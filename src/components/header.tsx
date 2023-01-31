import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "../components/icon-button";
import Text from "../components/text";

import SearchIcon from "../icons/search";
import AccountIcon from "../icons/account";
import BasketIcon from "../icons/basket";
import { theme, breakSm } from "../theme";
import LogoOrganicIcon from "../icons/logo-organic";
import BurgerNavIcon from "../icons/burger-nav";
import ArrowIcon from "../icons/arrow";
import { ContentWrapper } from "./content-wrapper";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid ${theme.colors.grey};
  background: ${theme.colors.white};
  z-index: 1;
`;

const NavBar = styled(ContentWrapper)`
  display: none;
  align-items: center;
  width: 100%;
  gap: 50px;
  order: 2;
  @media only screen and (min-width: ${breakSm}px) {
    display: flex;
  }
`;

const MobileNavBar = styled.div`
  position: relative;
  display: block;
  align-items: center;
  order: 1;
  @media only screen and (min-width: ${breakSm}px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  position: absolute;
  width: max-content;
  border: 1px solid ${theme.colors.grey};
  background: ${theme.colors.white};
  top: initial;
  left: 0;
  display: ${(props) => (props.isHidden ? "none" : "block")};
  align-items: center;
  @media only screen and (min-width: ${breakSm}px) {
    display: flex;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
  cursor: pointer;
  border-bottom: 1px solid ${theme.colors.grey};
  :last-child {
    border-bottom: none;
  }
  @media only screen and (min-width: ${breakSm}px) {
    border-bottom: none;
  }
`;

const BurgerNav = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: ${breakSm}px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  order: 3;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  order: 2;
  @media only screen and (min-width: ${breakSm}px) {
    order: 1;
  }
`;

function Nav() {
  return (
    <>
      <NavItem>
        <Text>Zdravá výživa</Text>
        <ArrowIcon />
      </NavItem>
      <NavItem>
        <Text bold>Naše pobočky</Text>
      </NavItem>
      <NavItem>
        <Text bold>Blog</Text>
      </NavItem>
    </>
  );
}

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  const handleBurgerNav = () => {
    setIsHidden(!isHidden);
  };

  return (
    <HeaderWrapper>
      <Logo>
        <LogoOrganicIcon />
      </Logo>
      <MobileNavBar>
        <BurgerNav onClick={handleBurgerNav}>
          <IconButton svgIcon={<BurgerNavIcon />} />
        </BurgerNav>
        <NavContainer isHidden={isHidden}>
          <Nav />
        </NavContainer>
      </MobileNavBar>
      <NavBar>
        <Nav />
      </NavBar>
      <Icons>
        <IconButton svgIcon={<SearchIcon />} />
        <IconButton svgIcon={<AccountIcon />} />
        <IconButton svgIcon={<BasketIcon />} />
      </Icons>
    </HeaderWrapper>
  );
}
