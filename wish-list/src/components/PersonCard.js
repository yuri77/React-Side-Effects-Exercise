import React from "react";

// import ItemList from './ItemList';

function PersonCard({ person }) {
  const { first_name, last_name, age, birthday, gender } = person;

  return (
    <div>
      <h2>
        {first_name} {last_name}
      </h2>
      <p>{age} years old</p>
      <p>{gender}</p>
    </div>
  );
}

export default PersonCard;
