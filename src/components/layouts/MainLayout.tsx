import React from 'react';
import styled from 'styled-components';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default MainLayout;

const Container = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
