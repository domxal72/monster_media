import React from "react";
import styled from "styled-components";
import LogoIcon from "../icons/logo";
import { theme } from "../theme";
import Text, { InlineText } from "./text";

const FooterWrapper = styled.div`
  border-top: 1px solid ${theme.colors.grey};
`;

const MaxWidth = styled.div`
  margin: auto;
  max-width: ${theme.width.pageWidth};
  display: flex;
  justify-content: space-between;
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
      <MaxWidth>
        <Left>
          <Text size={14}>
            © 2022{" "}
            <InlineText bold size={14}>
              Organic.
            </InlineText>{" "}
            Všechna práva vyhrazena.
          </Text>
        </Left>
        <Right>
          <Text size={14}>Created by </Text>
          <LogoIcon />
          <Text size={14}> Monster Media</Text>
        </Right>
      </MaxWidth>
    </FooterWrapper>
  );
}
