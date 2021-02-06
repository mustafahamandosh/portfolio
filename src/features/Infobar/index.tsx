import React from 'react';
import { CardBody, CardHeader, Divider, Languages } from './styles';
import ProfileImage from 'assets/images/profile-image.jpg';
import Card from 'components/Card';
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

const InfoBar: React.FC = ({ children }) => {
  return (
    <>
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
          <div style={{ width: 55 }}>
            <CircularProgressbarWithChildren
              value={100}
              styles={buildStyles({
                strokeLinecap: 'round',
                pathColor: `#4CAF50`,
                textColor: '#8c8c8e !important',
                trailColor: '#191923',
                backgroundColor: 'transparent',
              })}
            >
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <div
                style={{
                  fontSize: 11,
                  marginTop: -15,
                  marginLeft: 5,
                }}
              >
                <span>100%</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 55 }}>
            <CircularProgressbarWithChildren
              value={90}
              styles={buildStyles({
                strokeLinecap: 'round',
                pathColor: `#4CAF50`,
                textColor: '#8c8c8e !important',
                trailColor: '#191923',
                backgroundColor: 'transparent',
              })}
            >
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <div style={{ fontSize: 11, marginTop: -15, marginLeft: 2 }}>
                <span>90%</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div style={{ width: 55 }}>
            <CircularProgressbarWithChildren
              value={90}
              styles={buildStyles({
                strokeLinecap: 'round',
                pathColor: `#4CAF50`,
                textColor: '#8c8c8e !important',
                trailColor: '#191923',
                backgroundColor: 'transparent',
              })}
            >
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <div style={{ fontSize: 11, marginTop: -15, marginLeft: 5 }}>
                <span>90%</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </Languages>

        <Divider />
      </CardBody>
    </>
  );
};

export default InfoBar;
