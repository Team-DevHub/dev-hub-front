import styled from 'styled-components';

const RootDiv = styled.div`
  background-color: ${(props) => props.theme.color.key};
  color: ${(props) => props.theme.color.bgWhite};
  width: 100%;
  height: 100%;
`;

export const S = {
  RootDiv,
};
