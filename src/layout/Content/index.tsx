import React from 'react';
import { ContentChildren, ContentContainer } from './styles';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <ContentContainer>
    <ContentChildren>{children}</ContentChildren>
  </ContentContainer>
);
export default Content;
