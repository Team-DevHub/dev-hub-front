import React, { useState } from 'react';
import styled from 'styled-components';

interface TabProps {
  title: string;
  children: React.ReactNode;
}

function Tab({ children }: TabProps) {
  return <>{children}</>;
}

interface TabsProps {
  children: React.ReactNode;
}

function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = React.Children.toArray(
    children,
  ) as React.ReactElement<TabProps>[];

  return (
    <>
      <Header>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            onClick={() => setActiveIndex(index)}
            isActive={activeIndex === index}>
            <h2>{tab.props.title}</h2>
          </TabButton>
        ))}
      </Header>
      <Content>{tabs[activeIndex]}</Content>
    </>
  );
}

export { Tabs, Tab };

const Header = styled.div`
  display: flex;
  gap: 2px;
`;

const Content = styled.div`
  margin-top: 12px;
`;

interface TabButtonProps {
  isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  border: none;
  cursor: pointer;
  padding: 0 10px;

  h2 {
    color: ${({ isActive, theme }) =>
      isActive ? theme.color_textBlack : theme.color_textGray};
  }
`;
