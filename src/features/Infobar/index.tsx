import React from 'react';
import {
  CardBody,
  CardHeader,
  Divider,
  Footer,
  InfoBarContainer,
  Languages,
  TechnicalSkills,
} from './styles';
import Card from '../../components/Card';
import ProfileImage from 'assets/images/profile-image.jpg';
import CircleProgress from './CircleProgress';
import LineProgress from './LineProgress';
import { FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const InfoBar: React.FC = () => (
  <InfoBarContainer>
    <CardHeader>
      <Card className="infoHeader">
        <img src={ProfileImage} alt="Profile Image" />
        <h5>Artur Carter</h5>
        <p>
          Front-end Developer
          <br />
          Ui/UX Designer
        </p>
      </Card>
    </CardHeader>

    <CardBody>
      <div className="cardContent">
        <ul>
          <li>
            <h6>Residence:</h6>
            <span>Canada</span>
          </li>
          <li>
            <h6>City:</h6>
            <span>Toronto</span>
          </li>
          <li>
            <h6>Age:</h6>
            <span>23</span>
          </li>
        </ul>

        <Divider />

        <Languages>
          <CircleProgress value={90} textValue="90" description="English" />
          <CircleProgress value={90} textValue="90" description="Portuguese" />
          <CircleProgress value={100} textValue="100" description="Arabic" />
        </Languages>

        <Divider />

        <TechnicalSkills>
          <LineProgress skillName="Javascript" percent={85} percentText="85" />
          <LineProgress skillName="Node.js" percent={75} percentText="75" />
          <LineProgress
            skillName="React Native"
            percent={85}
            percentText="85"
          />
          <LineProgress skillName="React.js" percent={85} percentText="85" />
          <LineProgress skillName="Java" percent={60} percentText="60" />
          <LineProgress
            skillName="Spring Framework"
            percent={50}
            percentText="50"
          />
          <LineProgress skillName="Flutter" percent={50} percentText="50" />
          <LineProgress skillName="Angular" percent={50} percentText="50" />
        </TechnicalSkills>

        <Divider />

        <ul className="knowledgeList">
          <li className="list">
            <FaCheck color="#4CAF50" />
            <span>Bootstrap, Materialize</span>
          </li>
          <li className="list">
            <FaCheck color="#4CAF50" />
            <span>Bootstrap, Materialize</span>
          </li>
          <li className="list">
            <FaCheck color="#4CAF50" />
            <span>Bootstrap, Materialize</span>
          </li>
          <li className="list">
            <FaCheck color="#4CAF50" />
            <span>Bootstrap, Materialize</span>
          </li>
        </ul>
      </div>
    </CardBody>

    <Footer>
      <ul>
        <li>
          <Link href="#">
            <a>
              <FaLinkedin />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/feed/">
            <a href="">
              <FaGithub />
            </a>
          </Link>
        </li>
      </ul>
    </Footer>
  </InfoBarContainer>
);

export default InfoBar;
