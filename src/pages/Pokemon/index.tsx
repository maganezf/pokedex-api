import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import api from '../../services/api';

import BackIcon from '../../assets/back-icon.svg';
import LoadingIcon from '../../assets/loading.png';

interface RouteParam {
  pokemonName: string;
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}

interface ApiResponse {
  abilities: Ability[];
  moves: Move[];
  stats: Stat[];
  types: Type[];
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

import { Container, Header, Card, Section, Main, Loading } from './styles';

const iterate = (array: any[], key: string) => {
  const newArray = array.map((item, index) => {
    if (index + 1 === array.length) {
      return item[key].name;
    }
    return item[key].name + ', ';
  });

  return newArray;
};

const Pokemon: React.FC = () => {
  const [pokemons, setPokemons] = useState<ApiResponse | null>();

  const { pokemonName } = useParams<RouteParam>();

  useEffect(() => {
    api.get<ApiResponse>(pokemonName).then(async response => {
      setPokemons(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={BackIcon} alt="Back button" width="48px" height="48px" />
        </Link>
      </Header>

      {!pokemons ? (
        <Loading>
          <img src={LoadingIcon} alt="Loading Icon" />
          <p>
            Please check if you typed the name correctly, <br /> or if the
            pokémon exists in this database{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pokeapi.co/"
            >
              (https://pokeapi.co/)
            </a>
          </p>
        </Loading>
      ) : (
        <Card>
          <Main>
            <h1>{pokemonName}</h1>

            <img
              src={pokemons.sprites.other['official-artwork'].front_default}
              alt={pokemonName + ' image'}
            />
          </Main>

          <Section>
            <h2>Weigth: {pokemons.weight} lbs</h2>
            <h2>Heigth: {pokemons.height} ft</h2>
          </Section>

          <Section>
            <h2>Base XP: {pokemons.base_experience}</h2>
          </Section>

          <Section>
            <h2>Types: {iterate(pokemons.types, 'type')}</h2>
          </Section>

          <Section>
            <h2>Stats: {iterate(pokemons.stats, 'stat')}</h2>
          </Section>

          <Section>
            <h2>Abilities: {iterate(pokemons.abilities, 'ability')}</h2>
          </Section>

          <Section>
            <h2>Moves: {iterate(pokemons.moves, 'move')}</h2>
          </Section>
        </Card>
      )}
    </Container>
  );
};

export default Pokemon;
