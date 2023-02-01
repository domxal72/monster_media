import React from "react";
import styled from "styled-components";

import { theme, breakSm } from "../theme";
import Button from "./button";
import Text from "./text";
import NewsLetter from "./news-letter";
import Slider from "./slider";

import Img1 from "../img/leave1.png";
import Img2 from "../img/leave2.png";
import Img3 from "../img/leave3.png";

const MainWrapper = styled.div`
  position: relative;
  padding-top: 100px;
  background-image: url(${Img1}), url(${Img2}), url(${Img3});
  background-position: 105% 25%, -7% 60%, -5% 80%;
  background-repeat: no-repeat;
`;

const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px auto 16px;
  @media only screen and (min-width: ${breakSm}px) {
    margin: 64px auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 64px;
  @media only screen and (min-width: ${breakSm}px) {
    margin: 60px auto 94px;
  }
`;

export default function Main() {
  return (
    <MainWrapper>
      <BlogTitle>
        <Text bold size={27} color={theme.colors.green}>
          Přečtěte si něco zajimavého
        </Text>
        <Text align='center' alignSm='center' sizeSm={14}>
          Fresh není jen jídlo, ale i náš blog.
        </Text>
      </BlogTitle>
      <Slider />
      <ButtonContainer>
        <Button>prohlížet další</Button>
      </ButtonContainer>
      <NewsLetter />
    </MainWrapper>
  );
}
