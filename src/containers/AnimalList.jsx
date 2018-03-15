import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectAnimal } from '../actions/index';



class AnimalList extends Component {


  renderAnimalsList() {
    let counter = 0;
    return this.props.animals.map((animal) => {
      counter = counter +1;
      return(
        <li
          onClick={() => {this.props.selectAnimal(animal)}}
          key={counter}
          className="list-group-item">
          <p>Name : {animal.name}</p>
        </li>
      )
    })
  }

  render() {

    //console.log('animalList',this);

    return(
      <ul className="list-group">
        {this.renderAnimalsList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  // return {
  //   foobar : 'kitt',
  // }
  //console.log('mapStateToProps', state)

  return {
    animals : state.animals,
    selectedAnimal: state.selectedAnimal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAnimal : selectAnimal
  }, dispatch)
}

//export default AnimalList;
//wrapped component -> higher order component
//the order counts here, 1st mapStateToProps, 2nd mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);
