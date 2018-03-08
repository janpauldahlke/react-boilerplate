import React, { Component } from 'react';

import Pokemon from './Pokemon';

class PokemonList extends Component {
  constructor() {
    super()
  }

  //------
  renderPokemons(){
    let counter = 0;
    
    return this.props.pokemonResult.map( pokemons => {
      counter = counter +1;
      //return <li key={counter} className="card">name:  {pokemons.pokemon.name} <br/> url: {pokemons.pokemon.url} </li>
      return <Pokemon key={counter} url={pokemons.pokemon.url} name={pokemons.pokemon.name}/>
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
    return(<div></div>)

  }    
}

export default PokemonList;