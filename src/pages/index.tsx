import React from 'react';
import InfoBar from 'features/Infobar';
import { HomeContainer, HomeWrapper } from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <InfoBar />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
