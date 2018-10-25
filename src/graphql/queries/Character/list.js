import gql from 'graphql-tag';

export default gql`
  {
    characters {
      characters: items {
        id
        name
        castName
        media {
          src
          type
        }
        movies {
          title
        }
      }
    }
  }
`;
