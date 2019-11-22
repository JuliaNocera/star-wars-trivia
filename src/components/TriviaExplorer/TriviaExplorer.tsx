import React from "react";

import Query from "../Query";
import PeopleListView, {
  PeopleListViewQuery,
  PeopleCollectionResponse
} from "./PeopleListView";
import Toolbar from "../../components/Toolbar";

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

class TriviaExplorer extends React.Component {
  state: TriviaExplorerState = {
    triviaType: TriviaType.PEOPLE
  };

  render() {
    return (
      <div className="jan-TriviaExplorer">
        <Toolbar>
          <Toolbar.Title title="Trivia Explorer" />
          <Toolbar.Button label="Load more" onClick={() => {}} />
        </Toolbar>
        <span className="jan-TriviaExplorer-body">
          <Query query={PeopleListViewQuery}>
            {({ data, loading, error }) => (
              <PeopleListView
                people={
                  (data &&
                    data.peopleCollection &&
                    data.peopleCollection.people) ||
                  []
                }
              />
            )}
          </Query>
        </span>
      </div>
    );
  }
}

export default TriviaExplorer;
