import React, { Dispatch, SetStateAction } from 'react';
import ProfileImage from 'assets/images/profile-image.png';
import { CardDescription, ProjectsCard } from './styles';
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
        <img src={ProfileImage} alt="Project" />
        <CardDescription
          className="cardDescription"
          onClick={() => setModal(!modal)}
        >
          <h5>React.js</h5>
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
        <CardDescription className="cardDescription">
          <h5>React.js</h5>
        </CardDescription>
      </Card>
    </ProjectsCard>
  );
};
export default Projects;
