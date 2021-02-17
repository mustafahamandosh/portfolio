import React, { Dispatch, SetStateAction } from 'react';
import { CardDescription, ProjectsCard } from './styles';
import ReactIcon from 'assets/icons/react.svg';
import NodeIcon from 'assets/icons/node.svg';
import ReactNative from 'assets/icons/react-native.svg';
import Card from 'components/Card';

import MainImage from 'assets/images/projects/residencial/multiple-screens.png';
import SecondMain from 'assets/images/projects/emprendimento/SecondMain.png';
import ThirdMain from 'assets/images/projects/gostack/ThirdMain.png';
import {
  firstProjectImages,
  secondProjectImages,
  thirdProjectImages,
} from './images';

interface ProjectsProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  setProjectImages: Dispatch<SetStateAction<JSX.Element[]>>;
  modal: boolean;
}

const Projects: React.FC<ProjectsProps> = ({
  setModal,
  modal,
  setProjectImages,
}) => {
  return (
    <ProjectsCard>
      <Card
        className="card"
        onPress={() => {
          setModal(!modal);
          setProjectImages(firstProjectImages);
        }}
      >
        <img src={MainImage} alt="" />
        <CardDescription className="cardDescription">
          <div className="icons">
            <img src={ReactIcon} alt="" />
            <img src={ReactNative} alt="" />
          </div>
        </CardDescription>
      </Card>
      <Card
        className="card"
        onPress={() => {
          setModal(!modal);
          setProjectImages(secondProjectImages);
        }}
      >
        <img src={SecondMain} alt="" />
        <CardDescription className="cardDescription">
          <div className="icons">
            <img src={ReactIcon} alt="" />
            <img src={ReactNative} alt="" />
            <img src={NodeIcon} alt="" />
          </div>
        </CardDescription>
      </Card>
      <Card
        className="card"
        onPress={() => {
          setModal(!modal);
          setProjectImages(thirdProjectImages);
        }}
      >
        <img src={ThirdMain} alt="" />
        <CardDescription className="cardDescription">
          <div className="icons">
            <img src={ReactIcon} alt="" />
            <img src={ReactNative} alt="" />
            <img src={NodeIcon} alt="" />
          </div>
        </CardDescription>
      </Card>
    </ProjectsCard>
  );
};
export default Projects;
