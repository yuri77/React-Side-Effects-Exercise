import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import PersonCard from "./components/PersonCard";
import ItemList from "./components/ItemList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      items: [],
      selectedPerson: {}
    };
  }

  componentDidMount() {
    axios
      .get("https://powerful-beyond-74276.herokuapp.com/api/wishlist")
      .then(res => {
        this.setState({ people: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevState) {
    if (prevState.selectedPerson !== this.state.selectedPerson) {
      axios
        .get(
          `https://powerful-beyond-74276.herokuapp.com/api/wishlist/${
            this.state.selectedPerson.id
          }`
        )
        .then(res => {
          this.setState({ items: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  setSelectedPerson = person => {
    this.setState({ selectedPerson: person });
  };

  render() {
    return (
      <div className="App">
        {this.state.people.map(person => (
          <div onClick={() => this.setSelectedPerson(person)} key={person.id}>
            <PersonCard person={person} />
            {person.id === this.state.selectedPerson.id && (
              <ItemList list={this.state.items} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
