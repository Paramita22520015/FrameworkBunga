import PeopleItem from "../components/PeopleItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/NavigationAdmin";
import { useLocation, useNavigate } from 'react-router-dom';

function SwapiPeople() {
  const [peoples, setPeoples] = useState([]);
  const navigate = useNavigate();

  const loginHandler = () => {
    if (localStorage.getItem("userLogged") === "true") {
    }else{
      navigate("/login");
    }
  };

  useEffect(() => {
    loginHandler();

    // axios.get("https://swapi.dev/api/people/").then(function (response) {
    //   if (response.status === 200) {
    //     setPeoples(response.data.results);
    //   }
    // });
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="px-20 py-6">
        <ul role="list" className="divide-y divide-gray-100">
          {peoples.map((people) => {
            return <PeopleItem people={people}></PeopleItem>;
          })}
        </ul>
      </div>
    </>
  );
}

export default SwapiPeople;
