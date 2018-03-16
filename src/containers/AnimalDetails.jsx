import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalDetails extends Component {

  

  render(){

    //console.log('details', this);

    if(!this.props.selectedAnimal){
      return(
        <div>...</div>
      )
    }

    return(
      <div className="card">
        <h6>details</h6>
        <div>Species : {this.props.selectedAnimal.species}</div>
        <div>Age : {this.props.selectedAnimal.age}</div>
        <div>Gender : {(this.props.selectedAnimal.gender === 'm') ? 'male' : (this.props.selectedAnimal.gender === 'f') ? 'female' : 'undefined gender' }</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    selectedAnimal : state.selectedAnimal
  }
}

export default connect(mapStateToProps)(AnimalDetails)
