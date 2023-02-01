import styled from "styled-components";
import { theme, breakSm } from "../theme";

export const ContentWrapper = styled.div`
  display: flex;
  max-width: ${theme.width.pageWidth}px;
  width: 100%;
  margin: 0 auto;
  padding: 0 25px;
  @media only screen and (min-width: ${breakSm}px) {
    padding: 0 10px;
  }
`;
