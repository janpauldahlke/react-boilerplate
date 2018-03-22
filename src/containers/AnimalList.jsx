import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as _ from 'lodash';

import { selectAnimal, getAnimalsList, deleteAnimalById } from '../actions/index';



class AnimalList extends Component {

  //constructor
  //-------------------------------
  constructor() {
    super();
  }

  //lifecycle methods
  //-------------------------------
  
  componentWillMount() {
    this.props.getAnimalList() //can take 10ms // 1s // 5s
  }


   //own methods
  //-------------------------------

  renderAnimalsList() {
    let counter = 0;
    //return _.map(this.props.animalList, (animal)=> {
    return this.props.animalList.map((animal) => {
      counter = counter +1;
      return(
        <li
          onClick={() => {this.props.selectAnimal(animal)}}
          key={counter}
          className="list-group-item">
          <p>Name : {animal.name}</p>
          <button
            onClick={() => { this.onDeleteButtonClick(animal.id)}}
            className="btn btn-warning">delete</button>
        </li>
      )
    })
  }

  onDeleteButtonClick(id) {
    //console.log('deleted id', id)
    //id like ti use deleteAnimalById(id)
    this.props.deleteAnimal(id);
  }


  //react render
  //---------------------------------------

  render() {

    //console.log(':-)', this.props)

    if(!this.props.animalList){
      return(<div>Loading....</div>)
    }
    
    return(
      <ul className="list-group">
        {this.renderAnimalsList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  
  return {
    animals : state.animals,
    selectedAnimal: state.selectedAnimal,
    animalList : state.animalList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAnimal : selectAnimal,
    getAnimalList: getAnimalsList,
    deleteAnimal: deleteAnimalById
  }, dispatch)
}

//export default AnimalList;
//wrapped component -> higher order component
//the order counts here, 1st mapStateToProps, 2nd mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);
