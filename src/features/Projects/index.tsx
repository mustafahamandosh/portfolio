import React, { Dispatch, SetStateAction } from 'react';
import ProfileImage from 'assets/images/profile-image.png';
import FirstProjectImage from 'assets/images/projects/residencial/multiple-screens.png';
import { CardDescription, ProjectsCard } from './styles';
import ReactIcon from 'assets/icons/react.svg';
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
        <img src={FirstProjectImage} alt="Project" />
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
        <img src={ProfileImage} alt="Project" />
        <CardDescription className="cardDescription">
          <h5>React.js</h5>
        </CardDescription>
      </Card>
      <Card className="card">
        <img src={ProfileImage} alt="Project" />
        <CardDescription className="cardDescription"></CardDescription>
      </Card>
    </ProjectsCard>
  );
};
export default Projects;
