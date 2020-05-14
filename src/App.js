import React from "react";

// Reusuable component - props: value
function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

// component - JSX
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food />
    </div>
  );
}

export default App;
