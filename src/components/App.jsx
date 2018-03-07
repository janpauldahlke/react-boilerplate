import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'hello react course',
      date : '07.March 2018',
      number: 5,
      arrayList : [],
      anObjectInState : {
        name: 'iam an object on state of app'
      }
    }
  }


  render() {

    console.log('this is the app state', this.state)

    return(
      <div
        className="container app-container"
      >
        <div>
          <h4>our small pokemon app</h4>
            <form>
              <label>chosse your pokemon type</label>
              <select >
                <option value="1">normal</option>
                <option value="2">fighting</option>
                <option value="3">flying</option>
              </select>
              <button className="btn btn-success">seatch for type</button>
            </form>
        </div>
    </div>
    );
  }
}

export default App;