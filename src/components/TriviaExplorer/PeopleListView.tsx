import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
    <div>
      {people.map((person: any, index: number) => (
        <div key={`${person.name}::${index}`}>{person.name}</div>
      ))}
    </div>
  );
};

export default PeopleListView;
