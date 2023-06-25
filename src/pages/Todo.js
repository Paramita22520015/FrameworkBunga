import { useQuery, useMutation } from "@apollo/client";
import Navigation from "../components/NavigationAdmin";
import GET_TODOS from "../api/GetToDo";
import TodoItem from "../components/TodoItem";
import CREATE_TODO from "../api/CreateTodo";
import UPDATE_TODO from "../api/UpdateTodo";
import UPDATE_TODO2 from "../api/UpdateTodo2";
import DELETE_TODO from "../api/DeleteTodo";
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Todo() {
  const navigate = useNavigate();
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  const [addTodo] = useMutation(CREATE_TODO);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [updateTodo2] = useMutation(UPDATE_TODO2);
  const [deleteTodo] = useMutation(DELETE_TODO);
  const [inputTask, setInputTask] = useState();

  const handleInputTaskChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleUpdateTodo = (id) => {
    updateTodo({
      variables: {
        id: id,
      },
    })
      .then((response) => {
        console.log("Succes update data");
        refetch();
      })
      .catch((error) => {
        console.log("Error update data", error);
      });
  };

  const handleUpdateTodo2 = (id) => {
    updateTodo2({
      variables: {
        id: id,
      },
    })
      .then((response) => {
        console.log("Succes update data");
        refetch();
      })
      .catch((error) => {
        console.log("Error update data", error);
      });
  };

  const handleDeleteTodo = (id) => {
    deleteTodo({
      variables: {
        id: id,
      },
    })
      .then((response) => {
        console.log("Succes delete data");
        refetch();
      })
      .catch((error) => {
        console.log("Error delete data", error);
      });
  };

  const handleSubmitTask = () => {
    addTodo({
      variables: {
        completed: false,
        task: inputTask,
      },
    })
      .then((response) => {
        console.log("Succes input data");
        refetch();
      })
      .catch((error) => {
        console.log("Error input data", error);
        // return <p>Error : {error}</p>;
      });
  };

  const loginHandler = () => {
    if (localStorage.getItem("userLogged") === "true") {
    }else{
      navigate("/login");
    }
  };

  useEffect(() => {
    // console.log(localStorage.getItem("userLogged"))
    loginHandler();
  }, []);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <Navigation></Navigation>
      <h2 class="text-4xl font-bold leading-tight pt-12 pl-12 pr-12 pb-2">
        Daftar Bunga
      </h2>
      <form class="pl-12 pr-12 flex-col">
        <input
          type="text"
          autoComplete="username"
          className="mr-5 w-2/4 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="input teks"
          value={inputTask}
          onChange={handleInputTaskChange}
        />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={handleSubmitTask}
        >
          Tambah
        </button>
      </form>

      <hr class="mt-4 mb-8 ml-12 mr-12"></hr>
      <ol class="pl-16 pr-16">
        {data.todo.map((todo) => (
          <TodoItem
            todo={todo}
            updateTodo={() => handleUpdateTodo(todo.id)}
            updateTodo2={() => handleUpdateTodo2(todo.id)}
            deleteTodo={() => handleDeleteTodo(todo.id)}
          ></TodoItem>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
