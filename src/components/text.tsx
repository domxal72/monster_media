import styled from "styled-components";
import { breakSm } from "../theme";

export default Text = styled.p`
  font-size: ${(props) => props.sizeSm ?? "18"}px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => props.color ?? "black"};
  text-align: ${(props) => props.alignSm ?? "initial"};
  line-height: 1.5;
  @media only screen and (min-width: ${breakSm}px) {
    text-align: ${(props) => props.align ?? "initial"};
    font-size: ${(props) => props.size ?? "18"}px;
  }
`;

export const InlineText = styled(Text)`
  display: inline-block;
  font-weight: bold;
`;
