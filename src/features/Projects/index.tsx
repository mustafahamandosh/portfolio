import React, { Dispatch, SetStateAction } from 'react';
import ProfileImage from 'assets/images/profile-image.png';
import { CardDescription, ProjectsCard } from './styles';
import ReactIcon from 'assets/icons/react.svg';
import MainImage from 'assets/images/projects/residencial/multiple-screens.png';
import NodeIcon from 'assets/icons/node.svg';
import ReactNative from 'assets/icons/react-native.svg';
import Card from 'components/Card';

const images = [
  <img src={ProfileImage} alt="" width="100%" />,
  <img src={ProfileImage} alt="" width="100%" />,
  <img src={ProfileImage} alt="" width="100%" />,
];

interface ProjectsProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ setModal, modal }) => {
  return (
    <ProjectsCard>
      <Card className="card">
        <img src={MainImage} alt="" />
        <CardDescription
          className="cardDescription"
          onClick={() => setModal(!modal)}
        >
          <div className="icons">
            <img src={ReactIcon} alt="" />
            <img src={ReactNative} alt="" />
            <img src={NodeIcon} alt="" />
          </div>
        </CardDescription>
      </Card>
      <Card className="card">
        <img src={MainImage} alt="" />
        <CardDescription className="cardDescription">
          <div className="icons">
            <img src={ReactIcon} alt="" />
            <img src={ReactNative} alt="" />
            <img src={NodeIcon} alt="" />
          </div>
        </CardDescription>
      </Card>
      <Card className="card">
        <img src={MainImage} alt="" />
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
