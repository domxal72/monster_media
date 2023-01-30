import React from "react";
import styled from "styled-components";
import IconButton from "./components/icon-button";

import SearchIcon from "./icons/search";
import AccountIcon from "./icons/account";
import BasketIcon from "./icons/basket";
import { theme } from "./theme";
import Button from "./components/button";
import Text from "./components/text";
import NewsLetter from "./components/news-letter";
import Footer from "./components/footer";

const Main = styled.div`
  padding-top: 100px;
`;

const Nav = styled.div`
  position: fixed;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${() => theme.colors.grey};
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  max-width: ${() => theme.width.pageWidth}px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
`;

export default function Layout() {
  return (
    <div>
      <Nav>
        <Logo></Logo>
        <Pages>
          <Text bold>Zdravá výživa</Text>
          <Text>Naše pobočky</Text>
          <Text>Blog</Text>
        </Pages>
        <Icons>
          <IconButton svgIcon={<SearchIcon />} />
          <IconButton svgIcon={<AccountIcon />} />
          <IconButton svgIcon={<BasketIcon />} />
        </Icons>
      </Nav>
      <Main>
        <Text bold size={27} color={theme.colors.green} align='center'>
          Přečtěte si něco zajimavého
        </Text>
        <Text align='center'>Fresh není jen jídlo, ale i náš blog.</Text>
        <Slider></Slider>
        <ButtonContainer>
          <Button>prohlížet další</Button>
        </ButtonContainer>

        <NewsLetter />
      </Main>
      <Footer />
    </div>
  );
}
