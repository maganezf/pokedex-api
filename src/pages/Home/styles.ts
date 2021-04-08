import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`;

export const Header = styled.header`
  margin-top: 10rem;

  > img {
    width: 30vw;

    @media (max-width: 768px) {
      width: 60vw;
    }
  }
`;

export const Card = styled.div`
  margin-top: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60vw;
  height: 40vh;

  background-color: #ffcc01;

  border-radius: 6px;
  padding: 2rem;

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
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 3.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .input {
    display: flex;
    justify-content: center;

    width: 100%;

    > input {
      font-size: 1.6rem;

      width: 80%;

      margin-top: 3rem;

      text-align: center;
      color: #fafafa;

      background-color: #24292e;

      border: 2px solid #24292e;

      outline: 0;
      border-radius: 6px;
      padding: 1.2rem 1.5rem;

      @media (max-width: 768px) {
        width: 100%;
      }

      &::placeholder {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 768px) {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export const InfoAPI = styled.footer`
  margin-top: 3rem;

  > p {
    font-size: 1.6rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }

    > a {
      padding-left: 0.5rem;
      font-weight: 600;
    }
  }
`;
