import React from 'react';
import { compose, graphql } from 'react-apollo';

import ApplicationWrapper from 'containers/ApplicationWrapper';
import Header from 'components/Header';
import MoviesList from 'components/Movies/List';
import Loader from 'components/Loader';

import MoviesListQuery from 'graphql/queries/Movie/list';
import CharactersListQuery from 'graphql/queries/Character/list';

class Application extends React.Component {
  state = {
    isLoading: true,
    characters: [],
    movies: [],
    selectedCharacter: null,
    selectedMovie: null
  };

  static getDerivedStateFromProps(props, state) {
    if (
      !props.moviesList.loading &&
      !props.charactersList.loading &&
      state.isLoading
    ) {
      const { movies } = props.moviesList.movies;
      const { characters } = props.charactersList.characters;

      return {
        movies: movies.map(e => ({
          ...e,
          top: Math.floor(Math.random() * 30) + 20
        })),
        characters,
        isLoading: false
      };
    }

    return null;
  }

  onSelectCharacter = id => {
    this.setState(prevState => ({ selectedCharacter: id }));
  };

  onSelectMovie = id => {
    this.setState(prevState => ({ selectedMovie: id }));
  };

  render() {
    const {
      movies,
      characters,
      isLoading,
      selectedCharacter,
      selectedMovie
    } = this.state;

    return (
      <ApplicationWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Header
              characters={characters}
              onSelect={this.onSelectCharacter}
              selectedCharacter={selectedCharacter}
              selectedMovie={selectedMovie}
            />
            <MoviesList
              movies={movies}
              selectedCharacter={selectedCharacter}
              selectedMovie={selectedMovie}
            />
          </React.Fragment>
        )}
      </ApplicationWrapper>
    );
  }
}

export default compose(
  graphql(MoviesListQuery, { name: 'moviesList' }),
  graphql(CharactersListQuery, { name: 'charactersList' })
)(Application);
