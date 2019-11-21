import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import PersonItem from "./PersonItem";

type ApiUrl = string;

export interface Person {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: ApiUrl[];
  gender: string;
  hair_color: string;
  height: string;
  homeword: ApiUrl;
  mass: string;
  name: string;
  skin_color: string;
  species: ApiUrl[];
  starships: ApiUrl[];
  url: ApiUrl;
  vehicles: ApiUrl[];
}

const GET_PEOPLE = gql`
  {
    peopleCollection @client {
      people
      count
      next
    }
  }
`;

const PeopleListView = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);
  if (error) {
    console.log({ error });
    return <p>error</p>;
  }
  if (loading) return <p>Loading ...</p>;
  const { people } = (data && data.peopleCollection) || {};

  return (
    <div className="jan-TriviaExplorer-PeopleListView">
      {people.map((person: Person, index: number) => (
        <PersonItem key={`${person.name}::${index}`} person={person} />
      ))}
    </div>
  );
};

export default PeopleListView;
