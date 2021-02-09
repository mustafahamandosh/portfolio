import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;

  .card {
    position: relative;
    flex: 0 0 32%;
    max-width: 32%;
    padding: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(85%);
      transition: 0.4s ease-in-out;
    }
  }

  .card:hover {
    .cardDescription {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      cursor: pointer;

      h5 {
        color: #4caf50;
      }
    }
  }
`;

export const CardDescription = styled.div`
  display: none;
  padding: 30px;
  background: linear-gradient(
    159deg,
    rgba(45, 45, 58, 0.98) 0%,
    rgba(43, 43, 53, 0.98) 100%
  );
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;