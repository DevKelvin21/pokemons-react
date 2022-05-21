import React from "react";
import Card from "../../components/Card/Card";
import DetailsList from "../../components/DetailsList/DetailsList";

import './Layout.css'

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            actualPokemon: []
        }
        this.pokemonSelected = this.pokemonSelected.bind(this);
    }

    pokemonSelected(image) {
        const pokemonSelected = Object.values(this.props.pokemons).filter(pokemon => pokemon.image.includes(image))
        this.setState({
            actualPokemon :pokemonSelected[0]
        })
    }

  render() {
    return (
        <div className="Layout">
            <div className="logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
                    height="100%"
                    alt="logo"
                />
            </div>
            <h4 className="title">With React</h4>
            <div className="layoutContainer">
                {this.props.pokemons !== undefined && (
                <div className="cardContainer">
                    {Object.values(this.props.pokemons).map(pokemon =>{
                        return <Card onClick={this.pokemonSelected} src={pokemon.image}  alt={pokemon.name} key={pokemon.name}/>
                    })}
                </div>
                )}
            <DetailsList image={this.state.actualPokemon.image} name={this.state.actualPokemon.name} order={this.state.actualPokemon.order}>
                {this.state.actualPokemon.moves !== undefined && (
                    this.state.actualPokemon.moves.map(move =>{
                        return <li key={move}><h2>{move}</h2></li>
                    })
                )}
            </DetailsList>
            </div>

        </div>
    )
  }
}

export default Layout;
