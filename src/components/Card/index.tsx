import React from 'react';
import { CardContainer } from './styles';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card: React.FC<CardProps> = ({ children, className, onPress }) => {
  return (
    <CardContainer className={className} onClick={onPress}>
      {children}
    </CardContainer>
  );
};

export default Card;
