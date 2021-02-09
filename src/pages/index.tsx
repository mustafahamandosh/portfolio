import React, { useState } from 'react';
import InfoBar from 'features/Infobar';
import { HomeContainer, HomeWrapper, Modal } from './styles';
import Projects from '../features/Projects/index';
import Content from '../layout/Content';
import ProfileImage from '../assets/images/profile-image.jpg';
import AliceCarousel from 'react-alice-carousel';
import { AiOutlineClose } from 'react-icons/ai';

const images = [
  <img src={ProfileImage} alt="" width="50%" height={400} />,
  <img src={ProfileImage} alt="" width="50%" height={400} />,
  <img src={ProfileImage} alt="" width="50%" height={400} />,
  <img src={ProfileImage} alt="" width="50%" height={400} />,
];

const Home: React.FC = () => {
  const [modal, setModal] = useState(false);
  return (
    <HomeContainer>
      <HomeWrapper>
        {modal && (
          <Modal>
            <div className="modalHeader">
              <AiOutlineClose
                className="closeIcon"
                onClick={() => setModal(!modal)}
              />
            </div>
            <div className="gallery">
              <AliceCarousel mouseTracking items={images} />
            </div>
          </Modal>
        )}
        <InfoBar />
        <Content>
          <Projects setModal={setModal} modal={modal} />
        </Content>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
