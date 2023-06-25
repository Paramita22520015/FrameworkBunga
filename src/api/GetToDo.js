import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetToDos {
    todo {
      completed
      id
      task
    }
  }
`;

export default GET_TODOS;
