import React from "react";
import styled from "styled-components";

import { theme, breakSm } from "../theme";
import Text from "./text";
import Img1 from "../img/slider1.png";
import Img2 from "../img/slider2.png";
import Img3 from "../img/slider3.png";
import { ContentWrapper } from "./content-wrapper";

const { grey, lightGrey, white } = theme.colors;

const OuterWrapper = styled(ContentWrapper)`
  overflow-x: auto;
  scrollbar-color: ${grey} ${lightGrey};
  scrollbar-width: thin;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    height: 5px;
    background-color: ${grey};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${lightGrey};
  }

  ::-webkit-scrollbar:vertical {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: 15px;
  @media only screen and (min-width: ${breakSm}px) {
    gap: 30px;
  }
`;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: 5px;
  background-image: url(${(props) => props.img});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-width: 225px;
  height: 225px;
  flex-basis: 225px;
  flex-grow: 1;
  flex-shrink: 1;
  @media only screen and (min-width: ${breakSm}px) {
    width: 450px;
    height: 450px;
    flex-basis: 450px;
  }
`;

const Description = styled.div`
  margin: 30px;
  border-radius: 5px;
  background: ${white};
  padding: 10px 20px;
  @media only screen and (min-width: ${breakSm}px) {
    padding: 20px 50px;
  }
`;

const slidesData = [
  {
    text: "Lorem ipsum dolor sit amet",
    img: Img1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tortor quam, semper nec urna at, auctor sodales nulla.",
    img: Img2,
  },
  {
    text: "Lorem ipsum dolor sit amet",
    img: Img3,
  },
];

function Sliders() {
  return slidesData.map(({ text, img }) => (
    <SliderItem img={img}>
      <Description>
        <Text align='center' sizeSm={12}>
          {text}
        </Text>
      </Description>
    </SliderItem>
  ));
}

export default function Slider() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Sliders />
      </InnerWrapper>
    </OuterWrapper>
  );
}
