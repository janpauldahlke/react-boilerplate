import React, { Component } from 'react';

class PokemonList extends Component {
  constructor() {
    super()
  }

  //------
  renderPokemons(){
    let counter = 0;
    
    return this.props.pokemonResult.map( pokemons => {
      counter = counter +1;
      return <li key={counter}className="card">name:  {pokemons.pokemon.name} </li>
    })

  }
  //-------
  
  
  render(){

    //console.log(this.props)
    if (this.props.pokemonResult.length > 0) {
      return(
        <ul>
          {this.renderPokemons()}
        </ul>
      );
    }
    return(<div>Loading...</div>)

  }    
}

export default PokemonList;