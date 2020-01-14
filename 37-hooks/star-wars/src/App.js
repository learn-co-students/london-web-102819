import React, { useEffect, useState } from "react";
import "./App.css";

// Get people from API
// save them in state
// render them
// do something to update

const getPeople = () =>
  fetch("https://swapi.co/api/people/").then(res => res.json());

function App() {
  const [people, setPeople] = useState([]);
  const [numPeople, setNumPeople] = useState(0);

  useEffect(() => {
    getPeople().then(data => setPeople(data.results));
  }, []);

  useEffect(() => {
    setNumPeople(people.length);
  }, [people]);

  useEffect(() => {
    console.log("well done num people changed");
  }, [numPeople]);

  return (
    <div className="App">
      {people.map(p => (
        <div>{p.name}</div>
      ))}
    </div>
  );
}

export default App;
