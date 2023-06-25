import { gql } from "@apollo/client";

const UPDATE_TODO2 = gql`
  mutation UpdateTodo($id: Int!) {
    update_todo_by_pk(pk_columns: { id: $id }, _set: { completed: false }) {
      completed
      id
      task
    }
  }
`;

export default UPDATE_TODO2;
