import { PencilIcon, EyeSlashIcon, TrashIcon } from "@heroicons/react/24/outline";

function PeopleItem(props) {
  const { user, updateUser, deleteUser } = props;

  // console.log(props)
  return (
    <li key={user.id} className="flex justify-between gap-x-6 py-5">
      <div className="flex gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="m.jpg"
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {user.nama}
          </p>
          <p className="text-sm leading-6 text-gray-900">Username : {user.username}</p>
          <p className="text-sm leading-6 text-gray-900">Alamat : {user.alamat}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500 lowercase">
            {user.nama}@example.com
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">Administrator</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          User Created <time dateTime="{user.username}">{user.tgl_input}</time>
        </p>
        <button
          className="mb-2 px-4 py-1 text-sm bg-yellow-500 text-yellow-800 font-semibold rounded-lg border
          hover:text-white hover:bg-yellow-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          onClick={updateUser}
        >
          <PencilIcon className="block h-6 w-6" aria-hidden="true" />
        </button>
        <button
          className="px-4 py-1 text-sm bg-red-500 text-red-800 font-semibold rounded-lg border
          hover:text-white hover:bg-red-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          onClick={deleteUser}
        >
          <TrashIcon className="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export default PeopleItem;
