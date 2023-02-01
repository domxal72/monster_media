import React from "react";
import styled from "styled-components";
import LogoIcon from "../icons/logo";
import { theme, breakSm } from "../theme";
import { ContentWrapper } from "./content-wrapper";
import Text, { InlineText } from "./text";

const FooterWrapper = styled.div`
  border-top: 1px solid ${theme.colors.grey};
  margin-top: 64px;
  @media only screen and (min-width: ${breakSm}px) {
    margin-top: 128px;
  }
`;

const FooterContent = styled(ContentWrapper)`
  justify-content: space-between;
  flex-direction: column;
  padding: 15px 25px;
  @media only screen and (min-width: ${breakSm}px) {
    flex-direction: row;
    padding: 15px 10px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Left>
          <Text size={14} sizeSm={14}>
            © 2022{" "}
            <InlineText bold size={14} sizeSm={14}>
              Organic.
            </InlineText>{" "}
            Všechna práva vyhrazena.
          </Text>
        </Left>
        <Right>
          <Text size={14} sizeSm={14}>
            Created by{" "}
          </Text>
          <LogoIcon />
          <Text size={14} sizeSm={14}>
            {" "}
            Monster Media
          </Text>
        </Right>
      </FooterContent>
    </FooterWrapper>
  );
}
