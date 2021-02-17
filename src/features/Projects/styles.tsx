import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .card {
    position: relative;
    flex: 0 0 32%;
    max-width: 32%;
    padding: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(80%);
      transition: 0.4s ease-in-out;
      image-rendering: high-quality;
    }
  }

  .card:hover {
    cursor: pointer;
    img {
      filter: brightness(100%);
    }
    .cardDescription {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      h5 {
        color: #4caf50;
      }
    }
  }
`;

export const CardDescription = styled.div`
  display: none;
  padding: 15px;
  background: linear-gradient(
    159deg,
    rgba(45, 45, 58, 0.98) 0%,
    rgba(43, 43, 53, 0.98) 100%
  );
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  .icons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
