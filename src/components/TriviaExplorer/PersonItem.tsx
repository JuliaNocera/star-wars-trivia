import React from "react";
import { Person } from "./PeopleListView";

interface PersonItemProps {
  person: Person;
}

const PersonItem: React.FC<PersonItemProps> = ({ person }) => {
  console.log({ person });
  return (
    <div className="jan-TriviaExplorer-PeopleListView-Item">
      <p>Name: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Eye Color: {person.eye_color}</p>
    </div>
  );
};

export default PersonItem;
