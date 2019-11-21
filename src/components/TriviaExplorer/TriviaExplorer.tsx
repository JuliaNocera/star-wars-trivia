import React, { Component } from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { client } from "../../lib/apollo-client";
import PeopleListView from "./PeopleListView";

enum TriviaType {
  ALL = "ALL",
  PEOPLE = "PEOPLE",
  PLANETS = "PLANETS",
  SPACESHIPS = "SPACESHIPS",
  VEHICLES = "VEHICLES",
  FILMS = "FILMS",
  SPECIES = "SPECIES"
}

interface TriviaExplorerState {
  triviaType: TriviaType;
}

class TriviaExplorer extends Component {
  state: TriviaExplorerState = {
    triviaType: TriviaType.PEOPLE
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="jan-TriviaExplorer">
          <div>TriviaExplorer</div>
          <PeopleListView />
        </div>
      </ApolloProvider>
    );
  }
}

export default TriviaExplorer;
