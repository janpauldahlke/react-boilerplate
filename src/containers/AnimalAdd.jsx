import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createAnimal } from '../actions/index';


//class beginns here

class AnimalAdd extends Component {
  constructor() {
    super();

    this.state = {
      name : '',
      species: '',
      gender: 'm',
      age: 0
    }
  }

  //methods---
  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onSpeciesChange = (e) => {
    this.setState({
      species: e.target.value
    })
  }

  onAgeChange = (e) => {
    this.setState({
      age: parseInt(e.target.value)
    })
  }

  onSelectGenderChange = (e) => {
    this.setState({
      gender : e.target.value
    })
  }

  onButtonSubmit = () => {
    //console.log('from button', this.state)
    this.props.createAnimal(this.state);
  }


  //render()


  render() {

    //console.log(this.state)
    //console.log('this.props', this.props)

    return(
      <div className="form-group">
        <form>

          <label>Name: 
            <input
              onChange={this.onNameChange.bind(this)}
              value={this.state.name}
              type="text"/>
          </label>

          <label>Species: 
            <input
              onChange={this.onSpeciesChange.bind(this)}
              value={this.state.species}
              type="text"/>
          </label>
          <br/>
          <label>Gender:
            <select
             onChange={this.onSelectGenderChange.bind(this)}
            >
              <option value="m">male</option>
              <option value="f">female</option>
            </select>
          </label>

          <label>Age:
            <input
              onChange={this.onAgeChange.bind(this)}
              value={this.state.age}
              type="number"/>
          </label>

        </form>

        <button
          onClick={this.onButtonSubmit}
          className="btn btn-success">create animal</button>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    //createAnimal : createAnimal
    createAnimal
  }, dispatch)
}

//export default AnimalAdd;
export default connect(null, mapDispatchToProps)(AnimalAdd)
