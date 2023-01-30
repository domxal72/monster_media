import React from "react";
import styled from "styled-components";
import ChevronIcon from "../icons/chevron";
import { theme } from "../theme";
import Text from "./text";

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background: ${theme.colors.green};
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  gap: 12px;
`;

export default function Button(props) {
  return (
    <ButtonWrapper>
      <Text color={theme.colors.white}>{props.children}</Text>
      <ChevronIcon />
    </ButtonWrapper>
  );
}
