import gql from 'graphql-tag';

export default gql`
  {
    movies {
      movies: items {
        title
        media {
          type
          src
        }
        release
        cast {
          id
        }
      }
    }
  }
`;
