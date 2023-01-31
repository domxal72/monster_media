import React from "react";
import styled from "styled-components";

import { theme, breakSm } from "../theme";
import Text from "./text";
import Img1 from "../img/slider1.png";
import Img2 from "../img/slider2.png";
import Img3 from "../img/slider3.png";
import { ContentWrapper } from "./content-wrapper";

const OuterWrapper = styled.div`
  overflow-x: auto;
  scrollbar-color: ${theme.colors.grey} ${theme.colors.lightGrey};
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
    background-color: ${theme.colors.grey};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.lightGrey};
  }

  ::-webkit-scrollbar:vertical {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  padding-bottom: 5px;
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
  background: ${theme.colors.white};
  padding: 20px 50px;
`;

export default function Slider() {
  return (
    <ContentWrapper>
      <OuterWrapper>
        <InnerWrapper>
          <SliderItem img={Img1}>
            <Description>
              <Text align='center'>Lorem ipsum dolor sit amet</Text>
            </Description>
          </SliderItem>
          <SliderItem img={Img2}>
            <Description>
              <Text align='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tortor quam, semper nec urna at, auctor sodales nulla.
              </Text>
            </Description>
          </SliderItem>
          <SliderItem img={Img3}>
            <Description>
              <Text align='center'>Lorem ipsum dolor sit amet</Text>
            </Description>
          </SliderItem>
        </InnerWrapper>
      </OuterWrapper>
    </ContentWrapper>
  );
}
