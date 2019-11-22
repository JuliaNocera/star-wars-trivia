import React from "react";
import { useRoutes } from "hookrouter";
import { ApolloProvider } from "@apollo/react-hooks";

import { routes } from "../../lib/routes";
import { client } from "../../lib/apollo-client";

const App: React.FC = () => {
  const route = useRoutes(routes);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <nav className="App-nav">Star Wars</nav>
        <div className="App-body">{route}</div>
      </div>
    </ApolloProvider>
  );
};

export default App;
