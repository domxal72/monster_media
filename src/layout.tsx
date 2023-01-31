import React from "react";
import styled from "styled-components";

import { theme, breakSm } from "./theme";
import Button from "./components/button";
import Text from "./components/text";
import NewsLetter from "./components/news-letter";
import Footer from "./components/footer";
import Header from "./components/header";
import Slider from "./components/slider";

const Main = styled.div`
  padding-top: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Layout() {
  return (
    <div>
      <Header />
      <Main>
        <Text
          bold
          size={27}
          color={theme.colors.green}
          align='center'
          alignSm='center'
        >
          Přečtěte si něco zajimavého
        </Text>
        <Text align='center' alignSm='center'>
          Fresh není jen jídlo, ale i náš blog.
        </Text>
        <Slider />
        <ButtonContainer>
          <Button>prohlížet další</Button>
        </ButtonContainer>

        <NewsLetter />
      </Main>
      <Footer />
    </div>
  );
}
