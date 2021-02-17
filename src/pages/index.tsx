import React, { useState } from 'react';
import InfoBar from 'features/Infobar';
import {
  EducationAndWorkContainer,
  EducationAndWorkContent,
  HomeContainer,
  HomeWrapper,
  Modal,
} from './styles';
import Projects from 'features/Projects/index';
import Content from 'layout/Content';
import AliceCarousel from 'react-alice-carousel';
import { AiOutlineClose } from 'react-icons/ai';
import TimeLine from 'features/TimeLine';

const Home: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [projectImages, setProjectImages] = useState([]);
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
              <AliceCarousel mouseTracking items={projectImages} />
            </div>
          </Modal>
        )}
        <InfoBar />
        <Content>
          <h2>Projects</h2>
          <Projects
            setModal={setModal}
            modal={modal}
            setProjectImages={setProjectImages}
          />
          <EducationAndWorkContainer>
            <EducationAndWorkContent>
              <h2>Education</h2>
              <TimeLine
                timeLineTitle="System Analysis and Development"
                timeLineDate="2018 - 2020"
                timeLineLocationName="University Grupo Educacional Opet"
              >
                <ol>
                  <li>
                    Identify real customer needs and design computational
                    solutions
                  </li>
                  <li>
                    Learn concepts such as networks, operating systems,
                    databases, security, data structure, algorithm, among
                    others.
                  </li>
                  <li>
                    Learned different programming languages that will make it
                    possible to build corporate applications on different
                    technological platforms
                  </li>
                </ol>
              </TimeLine>
              <TimeLine
                timeLineTitle="Gostack Bootcamp"
                timeLineDate="2020 - 2021"
                timeLineLocationName="RocketSeat"
              >
                <ol>
                  <li>
                    Getting deep into the technologies NodeJS, ReactJS, and
                    React Native and the entire ecosystem around these tools,
                    from zero to deploy.
                  </li>
                  <li>
                    Learn concepts like automated testing, continuous
                    integration, in-store publishing, and all libraries and
                    structures
                  </li>
                </ol>
              </TimeLine>
            </EducationAndWorkContent>
            <EducationAndWorkContent>
              <h2>Work Experience</h2>
              <TimeLine
                timeLineTitle="Full Stack Developer"
                timeLineDate="Present"
                timeLineLocationName="Meta"
              >
                <ol>
                  <li>
                    Participating in the development of a website and mobile
                    application for a medium and high standard company that owns
                    real estate
                  </li>
                  <li>
                    Participating in the development of a website, and mobile
                    application for a company that rents apartments for
                    students.
                  </li>
                </ol>
              </TimeLine>
              <TimeLine
                timeLineTitle="Junior Java Developer"
                timeLineDate="2019 - 2020"
                timeLineLocationName="MOVIVA - SEU CONDOMÍNIO DIGITAL"
              >
                <ol>
                  <li>
                    Participating in the development of software that helps
                    condominiums to manage the condominium and residents.
                  </li>
                  <li>
                    The software helps condominium manager to control Bills to
                    receive, Bills to pay, Human Resources, among others
                  </li>
                </ol>
              </TimeLine>
            </EducationAndWorkContent>
          </EducationAndWorkContainer>
        </Content>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
