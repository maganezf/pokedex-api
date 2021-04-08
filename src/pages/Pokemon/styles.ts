import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  overflow-y: auto;
`;

export const Header = styled.header`
  width: 60vw;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 10rem auto 0;

  @media (max-width: 1024px) {
    margin-top: 5rem;

    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60vw;

  margin: 20rem auto 0;

  @media (max-width: 768px) {
    margin-top: 10rem;

    width: 90vw;
  }

  > img {
    width: 5rem;
    animation-name: spinner;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  > p {
    margin-top: 10rem;

    text-align: center;

    background-color: #ffcc01;
    border-radius: 6px;
    padding: 4rem;

    box-shadow: 0 4.5px 3.6px rgba(0, 0, 0, 0.017),
      0 12.5px 10px rgba(0, 0, 0, 0.025), 0 30.1px 24.1px rgba(0, 0, 0, 0.033),
      0 100px 80px rgba(0, 0, 0, 0.05);

    color: #2062ac;

    font-size: 3.2rem;
    font-weight: 600;

    @media (max-width: 1024px) {
      width: 80vw;
    }

    @media (max-width: 768px) {
      width: 90vw;

      font-size: 2rem;
    }

    > a {
      font-weight: 600;
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Card = styled.div`
  align-items: center;
  justify-content: center;

  margin: 10rem auto;

  width: 60vw;

  background-color: #ffcc01;

  border-radius: 6px;
  padding: 6rem;

  box-shadow: 0 4.5px 3.6px rgba(0, 0, 0, 0.017),
    0 12.5px 10px rgba(0, 0, 0, 0.025), 0 30.1px 24.1px rgba(0, 0, 0, 0.033),
    0 100px 80px rgba(0, 0, 0, 0.05);

  color: #2062ac;

  font-size: 2rem;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 90vw;

    padding: 6rem 4rem;

    font-size: 2rem;
  }
`;

export const Main = styled.main`
  padding-bottom: 6rem;
  text-align: center;
  color: #2062ac;

  > h1 {
    font-size: 5rem;

    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  @media (max-width: 580px) {
    > img {
      width: 100%;
    }
  }
`;

export const Section = styled.section`
  padding: 1.5rem 0;
  margin: 0 auto;
  border-radius: 1rem;

  align-items: center;
  width: 70%;

  > section + & {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
