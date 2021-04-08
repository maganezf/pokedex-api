import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  margin-top: 10rem;

  > img {
    width: 50rem;
  }
`;

export const Content = styled.div`
  margin-top: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80rem;
  height: 30rem;

  background-color: #ffcc01;

  border-radius: 6px;
  padding: 2rem;

  box-shadow: 0 4.5px 3.6px rgba(0, 0, 0, 0.017),
    0 12.5px 10px rgba(0, 0, 0, 0.025), 0 30.1px 24.1px rgba(0, 0, 0, 0.033),
    0 100px 80px rgba(0, 0, 0, 0.05);

  color: #2062ac;

  font-size: 2rem;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .input {
    display: flex;
    justify-content: center;

    width: 100%;

    > input {
      font-size: 1.6rem;

      width: 80%;

      margin-top: 3rem;

      color: #ffcc01;

      background-color: #24292e;

      border: 5px solid #24292e;

      outline: 0;
      border-radius: 6px;
      padding: 1.2rem 1.5rem;
    }
  }
`;

export const InfoAPI = styled.footer`
  margin-top: 3rem;

  > p {
    font-size: 1.6rem;

    > a {
      padding-left: 0.5rem;
      font-weight: 600;
    }
  }
`;
