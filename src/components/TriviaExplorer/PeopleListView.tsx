import React from "react";
import { gql } from "apollo-boost";

import PersonItem from "./PersonItem";

type ApiUrl = string;

export interface PeopleCollection {
  people: Person[];
  count: number;
  next: ApiUrl;
}

export interface PeopleCollectionResponse {
  peopleCollection: PeopleCollection;
}

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

interface PeopleListViewProps {
  people: Person[];
}

const PeopleListView = ({ people }: PeopleListViewProps) => {
  return (
    <div className="jan-TriviaExplorer-PeopleListView">
      {people.map((person: Person, index: number) => (
        <PersonItem key={`${person.name}::${index}`} person={person} />
      ))}
    </div>
  );
};

export const PeopleListViewQuery = GET_PEOPLE;

export default PeopleListView;
