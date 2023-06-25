import PeopleItem from "../components/PeopleItem";
import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/NavigationAdmin";
import { useLocation, useNavigate } from 'react-router-dom';

function SwapiPeople() {
  const [users, setUser] = useState([]);
  const [formData, setFormData] = useState({
    nama: '',
    username: '',
    password: '',
    alamat: '',
  });
  const [inputId, setId] = useState("");
  // const [inputNama, setNama] = useState("");
  // const [inputUsername, setUsername] = useState("");
  // const [inputPassword, setPassword] = useState("");
  // const [inputAlamat, setAlamat] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const loginHandler = () => {
    if (localStorage.getItem("userLogged") === "true") {
    }else{
      navigate("/login");
    }
  };

  useEffect(() => {
    loginHandler();

    axios.get("http://localhost:8080/api/api2.php?op=normal").then(function (response) {
      if (response.status === 200) {
        setUser(response.data.data.result);
        // console.log(response.data.data.result);
      }
    });
  }, []);

  const getUser = () => {
    axios.get("http://localhost:8080/api/api2.php?op=normal").then(function (response) {
      if (response.status === 200) {
        setUser(response.data.data.result);
        // console.log(response.data.data.result);
      }
    });
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();

    // console.log(inputId);
    if (inputId) {
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/api2.php?op=update&id='+inputId,
        headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"},
        data: formData
      })
      .then(function (response) {
        if (response.status == 200 & response.data.status){
          alert(response.data.result);
          getUser();
        }else{
          alert(response.data.result);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/api2.php?op=create',
        headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"},
        data: formData
      })
      .then(function (response) {
        if (response.status == 200 & response.data.status){
          alert(response.data.result);
          getUser();
        }else{
          alert(response.data.result);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  };

  // console.log(formData)
  const handleUpdateUser = (id, nama, username, password, alamat) => {
    setId(id);
    setFormData({ 
      nama: nama,
      username: username,
      password: password,
      alamat: alamat 
    });
  };

  const handleDeleteUser = (id) => {
    axios.get("http://localhost:8080/api/api2.php?op=delete&id="+id).then(function (response) {
      if (response.status === 200 && response.data.status) {
        alert("Berhasil hapus data user!");
        getUser();
      }
    });
  };

  return (
    <>
      <Navigation></Navigation>
      <h2 className="text-4xl font-bold leading-tight pt-12 pl-12 pr-12 pb-2">
        Daftar User
      </h2>
      <form className="pl-12 pr-12 flex-col">
        <input 
          type="hidden"
          value={inputId} 
         />
        <input
          type="text"
          name="nama"
          value={formData.nama}
          className="mr-5 w-2/4 flex-1 border-solid border-2 border-sky-500 rounded-lg py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Nama Lengkap"
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          className="mr-5 w-2/4 flex-1 border-solid border-2 border-sky-500 rounded-lg py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          className="mr-5 w-2/4 flex-1 border-solid border-2 border-sky-500 rounded-lg py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="alamat"
          value={formData.alamat}
          className="mr-5 w-2/4 flex-1 border-solid border-2 border-sky-500 rounded-lg py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Alamat Lengkap"
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={handleSubmitTask}
        >
          Simpan
        </button>
      </form>

      <div className="px-20 py-6">
        <ul role="list" className="divide-y divide-gray-100">
          {users.map((user) => {
            return (
              <>
              <PeopleItem 
                user={user}
                updateUser={() => handleUpdateUser(user.id, user.nama, user.username, user.password, user.alamat)}
                deleteUser={() => handleDeleteUser(user.id)}
                ></PeopleItem>;
              </>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default SwapiPeople;
