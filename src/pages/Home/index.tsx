import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonLogo from '../../assets/pokemon-logo.png';

import { Container, Header, Content, SearchForm, InfoAPI } from './styles';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    history.push(`/${search.toLowerCase().trim()}`);
  }

  return (
    <Container>
      <Header>
        <img src={PokemonLogo} alt="PokemonLogo" loading="lazy" />
      </Header>

      <Content>
        <SearchForm onSubmit={handleSubmit}>
          <h1>Search a Pokémon in Pokédex:</h1>

          <div className="input">
            <input
              type="text"
              placeholder="Type Pokémon name (ex: 'Pikachu', 'Bulbasaur', 'Snorlax')"
              onChange={event => setSearch(event.currentTarget.value)}
            />
          </div>
        </SearchForm>

        <InfoAPI>
          <p>
            Data from this database:
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pokeapi.co/"
            >
              https://pokeapi.co/
            </a>
          </p>
        </InfoAPI>
      </Content>
    </Container>
  );
};

export default Home;
