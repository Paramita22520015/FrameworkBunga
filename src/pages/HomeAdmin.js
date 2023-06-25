import Navigation from '../components/NavigationAdmin';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import GET_TODOS from "../api/GetToDo";
import { useQuery, useMutation } from "@apollo/client";
import { QueueListIcon } from "@heroicons/react/24/outline";

function Dashboard() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { loading, error, data, refetch } = useQuery(GET_TODOS);

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
    <>
      <div className="min-h-full">
        <Navigation></Navigation>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-medium tracking-tight text-gray-700">Selamat Datang di Toko Bunga</h1>
          </div>
        </header>
        <main>
          <div className="flex items-center mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <img
              className=""
              // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              src="flower-shop.png"
              alt="Your Company"
            />  
          </div>
          <div className="flex mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 items-center">
            <h1 className="text-3xl font-medium tracking-tight text-gray-700 mr-2">Daftar Bung </h1><QueueListIcon className="h-8 w-8" aria-hidden="true" />
          </div>
          <div className='grid grid-cols-3 gap-4 place-items-stretch'>
            {data.todo.map((item) => (
              <div class="flex m-2 h-20 basis-1/4 bg-orange-300 rounded-lg items-center place-content-center">
                <span className='font-bold text-xl text-gray-900'>{item.task}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
export default Dashboard;