import React from "react";

function App() {
  const { href } = window.location;
  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <div>Current Href: { href }</div>
    </div>
  );
}

export default App;
