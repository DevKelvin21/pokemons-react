import React from "react";
import Layout from "./features/Layout/Layout";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {
        pikachu: {
          name: "pikachu",
          order: "25",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
          moves: [
            "mega-punch",
            "thunder-punch",
            "thunder-shock",
            "thunder-bold",
          ],
        },
        bulbasaur: {
          name: "bulbasaur",
          order: "1",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          moves: ["razor-wind", "swords-dance", "vine-whip", "solar-beam"],
        },
        charmander: {
          name: "charmander",
          order: "4",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
          moves: ["flamethrower", "bite", "dragon-rage", "fire-spin"],
        },
        squirtle: {
          name: "squirtle",
          order: "7",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
          moves: ["ice-punch", "water-gun", "hydro-pump", "surf"],
        },
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Layout pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
