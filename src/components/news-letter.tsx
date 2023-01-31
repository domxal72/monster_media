import React from "react";
import styled from "styled-components";
import { theme, breakSm } from "../theme";
import Text, { InlineText } from "./text";
import Button from "./button";
import Letters from "../img/letters.png";
import { ContentWrapper } from "./content-wrapper";

const NewsLetterWrapper = styled.div`
  background: ${theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 30px 25px;
  @media only screen and (min-width: ${breakSm}px) {
    flex-direction: row;
    padding: 44px 90px;
    gap: 90px;
    margin: 90px 0 120px;
  }
`;

const LettersContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InlineTextContainer = styled.div`
  padding: 32px 0;
  @media only screen and (min-width: ${breakSm}px) {
    max-width: 400px;
  }
`;

const Form = styled.div`
  display: flex;
  gap: 22px;
  width: 100%;
  justify-content: center;
  @media only screen and (min-width: ${breakSm}px) {
    gap: 50px;
  }
`;

const LetterImg = styled.img`
  // max-width: 100%;
  @media only screen and (min-width: ${breakSm}px) {
    align-items: flex-start;
  }
`;

const Input = styled.input`
  border-bottom: 1px solid ${() => theme.colors.green};
  font-size: 18px;
  background: transparent;
  width: 100%;
  max-width: 360px;
  @media only screen and (min-width: ${breakSm}px) {
    max-width: 520px;
  }
  ::placeholder {
    color: ${theme.colors.black};
    font-size: 18px;
  }
  :focus-visible {
    outline: none;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: ${breakSm}px) {
    align-items: flex-start;
  }
`;

export default function NewsLetter() {
  return (
    <ContentWrapper>
      <NewsLetterWrapper>
        <LettersContainer>
          <LetterImg src={Letters} alt='' />
        </LettersContainer>
        <FormContainer>
          <InlineTextContainer>
            <Text bold color={theme.colors.green} alignSm='center'>
              Nenechte si ujít <InlineText>novinky do emailu</InlineText> a k
              první objednávce{" "}
              <InlineText>dostanete od nás malý dárek</InlineText>.
            </Text>
          </InlineTextContainer>
          <Text alignSm='center' sizeSm={14}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            non.
          </Text>
          <Form>
            <Input placeholder='napište váš email' />
            <Button>odeslat</Button>
          </Form>
        </FormContainer>
      </NewsLetterWrapper>
    </ContentWrapper>
  );
}
