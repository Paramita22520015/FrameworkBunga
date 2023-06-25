import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { KeyIcon } from "@heroicons/react/24/outline";
// import $ from "jquery";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();

  const logoutProsess = () => {
    localStorage.setItem("userLogged", 'false');

    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    // axios.get("https://swapi.dev/api/people/").then(function (response) {
    //   if (response.status === 200) {
    //     setPeoples(response.data.results);
    //   }
    // });
    // localStorage.clear();
    // navigate("/");
    logoutProsess();
  }, []);



  return (
    <>
      
    </>
  );
}

export default Logout;