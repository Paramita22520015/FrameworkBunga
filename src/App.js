import "./App.css";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Dashboard from "./pages/HomeAdmin";
import { Route, Routes } from "react-router-dom";
import SwapiPeople from "./pages/SwapiPeople";
import { ApolloProvider } from "@apollo/client";
import GraphQLClient from "./api/GraphQLClient";
import Todo from "./pages/Todo";
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <ApolloProvider client={GraphQLClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/swapi-people" element={<SwapiPeople />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
