import React from "react";
import { useRoutes } from "hookrouter";
import { routes } from "../../lib/routes";

const App: React.FC = () => {
  const route = useRoutes(routes);
  return (
    <div className="App">
      <header className="App-header">Star Wars</header>
      {route}
    </div>
  );
};

export default App;
