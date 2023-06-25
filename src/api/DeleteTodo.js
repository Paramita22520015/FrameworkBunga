import { gql } from "@apollo/client";

const UPDATE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    delete_todo_by_pk(id: $id) {
      completed
      id
      task
    }
  }
`;

export default UPDATE_TODO;
