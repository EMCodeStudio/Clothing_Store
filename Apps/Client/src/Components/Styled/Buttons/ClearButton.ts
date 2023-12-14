import styled from "styled-components";

const ClearButton = styled.button`
display: flex;
align-content: center;
justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
`;
const ClearButtonSearch = styled(ClearButton)`
 font-size: 16px;
 color: #888;
`;

export { ClearButtonSearch }