import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import PersonCard from "./components/PersonCard";
import ItemList from "./components/ItemList";

//  Now that you've done it with the useEffect hooks, it's time to refactor it with class components and life-cycle methods.  The three most commonly used life-cycle methods are componentDidMount, componentDidUpdate and componentDidUnmount.  You'll only need two of those for this exercise.

// Note about componentDidUpdate:  this method needs to track a value on state or props much like useEffect.  The big difference is that we have to put in the comparison logic ourselves to compare previous-state (prevState) with the current-state.  Remember what you tracked in the dependancy array in the hooks version.

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      items: [],
      selectedPerson: {}
    };
  }

  componentDidMount(){
    
  }

  }
  // Fetch the list of people using the appropriate life-cycle method
  // Code here!

  // Fetch the list of items using the appropriate life-cycle method
  //Code here!

  setSelectedPerson = person => {
    this.setState({ selectedPerson: person });
  };

  render() {
    return (
      <div className="App">
        {this.state.people.map(person => (
          <div onClick={() => this.setSelectedPerson(person)} key={person.id}>
            <PersonCard person={person} />
            {/* Like before fill in the blank in the line below */}
            {/* {person.id === __blank__ && <ItemList list={this.state.items} />} */}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
