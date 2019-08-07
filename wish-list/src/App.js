import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import PersonCard from "./components/PersonCard";
import ItemList from "./components/ItemList";

function App() {
  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState({});

  useEffect(() => {
    axios
      .get("https://powerful-beyond-74276.herokuapp.com/api/wishlist")
      .then(res => {
        setPeople(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (selectedPerson.id) {
      axios
        .get(
          `https://powerful-beyond-74276.herokuapp.com/api/wishlist/${
            selectedPerson.id
          }`
        )
        .then(res => {
          setItems(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [selectedPerson]);

  return (
    <div className="App">
      {people.map(person => (
        <div onClick={() => setSelectedPerson(person)} key={person.id}>
          <PersonCard person={person} />
          {person.id === selectedPerson.id ? <ItemList list={items} /> : null}
        </div>
      ))}
    </div>
  );
}

export default App;
