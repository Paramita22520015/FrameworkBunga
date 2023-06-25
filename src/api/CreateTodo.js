import { gql } from "@apollo/client";

const CREATE_TODO = gql`
  mutation CreateTodo($completed: Boolean, $task: String) {
    insert_todo(objects: { completed: $completed, task: $task }) {
      returning {
        completed
        id
        task
      }
    }
  }
`;

export default CREATE_TODO;
