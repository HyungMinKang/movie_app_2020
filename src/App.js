import React from "react";

// Reusuable component - props: value
function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture}></img>
    </div>
  );
}

const foodILike = [
  {
    name: "Coffe",
    image:
      "https://images.unsplash.com/photo-1505880643346-c930071b9980?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Cake",
    image:
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Bread",
    image:
      "https://images.unsplash.com/photo-1536739782508-c2388552aad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1495287889548-6b685b1a4de7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Tofu",
    image:
      "https://images.unsplash.com/photo-1588930850267-fe671c9ed91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];
// component - JSX
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
