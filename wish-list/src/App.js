import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import PersonCard from "./components/PersonCard";
import ItemList from "./components/ItemList";

// The goal of this app is to display a list of people that when clicked on individually will display the items in their wish list.  The list of people and the list of items are on two separate api endpoints.  In this exercise you will have to determine when each of those requests needs to be made.

// When you finish checkout the "class" branch and do the same thing just with life cycle methods.

// ENDPOINTS:
// https://powerful-beyond-74276.herokuapp.com/api/wishlist  -- returns list of people
// https://powerful-beyond-74276.herokuapp.com/api/wishlist/:id  -- returns list of items of person with matching ID

function App() {
  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState({});

  // Fill in the useEffect functions using the proper axios get requests and set that data to the proper state value.
  // Then fill in the dependancy array with the appropriate value to track. HINT: An empty array is valid

  // Fetch the list of people
  useEffect(() => {
    // Code goes here
  }, []); // <---- What value do we want to track and see if it changes, if any?

  // Fetch the list of items for selected Person
  useEffect(() => {
    // Code goes here
  }, []); // <---- What value do we want to track and see if it changes, if any?

  return (
    <div className="App">
      {people.map(person => (
        <div onClick={() => setSelectedPerson(person)} key={person.id}>
          <PersonCard person={person} />
          {/* PROBLEM SOLVING!  We only want to display the list of items for the person that was clicked on. What do we need to compare person.id to in order to do that? Uncomment out the line below and fill in the blank with the answer */}
          {/* {person.id === __blank__ ? <ItemList list={items} /> : null} */}
        </div>
      ))}
    </div>
  );
}

export default App;
