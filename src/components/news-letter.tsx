import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import Text, { InlineText } from "./text";
import Button from "./button";
import Letters from "../img/letters.png";

const NewsLetterWrapper = styled.div`
  background: ${theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  padding: 50px;
  margin: 100px 0 120px;
`;

const LettersContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 90px;
  max-width: 240px;
`;

const InlineTextContainer = styled.div`
  max-width: 400px;
`;

const Form = styled.div`
  display: flex;
`;

const Input = styled.input`
  border-bottom: 1px solid ${() => theme.colors.green};
  font-size: 18px;
  background: transparent;
  ::placeholder {
    color: ${theme.colors.black};
    font-size: 18px;
  }
  :focus-visible {
    outline: none;
  }
`;

const LetterImg = styled.img``;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function NewsLetter() {
  return (
    <NewsLetterWrapper>
      <LettersContainer>
        <LetterImg src={Letters} alt='' />
      </LettersContainer>
      <FormContainer>
        <InlineTextContainer>
          <Text bold color={theme.colors.green}>
            Nenechte si ujít <InlineText>novinky do emailu</InlineText> a k
            první objednávce{" "}
            <InlineText>dostanete od nás malý dárek</InlineText>.
          </Text>
        </InlineTextContainer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          non.
        </Text>
        <Form>
          <Input placeholder='napište váš email' />
          <Button>odeslat</Button>
        </Form>
      </FormContainer>
    </NewsLetterWrapper>
  );
}
