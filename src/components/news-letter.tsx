import React from "react";
import styled from "styled-components";
import { theme, breakSm } from "../theme";
import Text, { InlineText } from "./text";
import Button from "./button";
import Letters from "../img/letters.png";
import { ContentWrapper } from "./content-wrapper";

const { lightGrey, green, black } = theme.colors;

const NewsLetterContainer = styled(ContentWrapper)`
  max-width: calc(${theme.width.pageWidth}px - 20px);
  padding: 0;
`;

const NewsLetterWrapper = styled.div`
  background: ${lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex: 1;
  padding: 30px 25px;
  @media only screen and (min-width: ${breakSm}px) {
    flex-direction: row;
    align-items: flex-end;
    padding: 44px 90px;
    gap: 90px;
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
    padding: 32px 0 16px;
  }
`;

const Form = styled.div`
  display: flex;
  gap: 22px;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  @media only screen and (min-width: ${breakSm}px) {
    gap: 50px;
    margin-top: 45px;
  }
`;

const LetterImg = styled.img`
  max-width: 225px;
  @media only screen and (min-width: ${breakSm}px) {
    align-items: flex-start;
    max-width: none;
  }
`;

const Input = styled.input`
  border-bottom: 1px solid ${() => green};
  font-size: 18px;
  background: transparent;
  width: 100%;
  max-width: 360px;
  @media only screen and (min-width: ${breakSm}px) {
    max-width: 520px;
  }
  ::placeholder {
    color: ${black};
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
    <NewsLetterContainer>
      <NewsLetterWrapper>
        <LettersContainer>
          <LetterImg src={Letters} alt='' />
        </LettersContainer>
        <FormContainer>
          <InlineTextContainer>
            <Text bold color={green} alignSm='center'>
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
    </NewsLetterContainer>
  );
}
