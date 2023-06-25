import { EyeIcon, EyeSlashIcon, TrashIcon } from "@heroicons/react/24/outline";

function TodoItem(props) {
  const { todo, updateTodo, updateTodo2, deleteTodo } = props;
  const textStyle = todo.completed === true ? "line-through" : "";
  const bgStyle = todo.completed === true ? "bg-yellow-200" : "bg-sky-200";

  return (
    <li key={todo.id} className="mb-2">
      <div class={`flex items-center justify-center block rounded-lg p-3 ${bgStyle}
      shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] `}>
        <h5
          // class={`${textStyle} w-full text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50`}
          class={`w-full text-xl font-medium leading-tight`}
        >
          {todo.task}
        </h5>
        {todo.completed === false && (
          <button
            // class="px-4 py-1 text-sm bg-white text-green-800 font-semibold rounded-full border border-purple-200 
            // hover:text-white hover:bg-green-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            class="flex px-4 py-1 text-sm bg-orange-200 font-semibold rounded-lg border 
            hover:text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            onClick={updateTodo}
          >
            <EyeSlashIcon className="block h-5 w-5 mr-1" aria-hidden="true" /> Sembunyikan
          </button>
        )}
        {todo.completed === true && (
          <button
            class="flex px-4 py-1 text-sm bg-sky-200 font-semibold rounded-lg border
            hover:text-white hover:bg-sky-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            onClick={updateTodo2}
          >
            <EyeIcon className="block h-5 w-5 mr-1" aria-hidden="true" /> Tampilkan
          </button>
        )}

        <button
          class="ml-3 px-4 py-1 text-sm bg-red-500 text-red-800 font-semibold rounded-lg border
          hover:text-white hover:bg-red-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          onClick={deleteTodo}
        >
          <TrashIcon className="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
