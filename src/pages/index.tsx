import React from 'react';
import InfoBar from 'features/Infobar';
import { HomeContainer } from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <InfoBar />
    </HomeContainer>
  );
};

export default Home;
