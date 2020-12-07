import React, {Component} from 'react';
import './App.css';
import {SearchBox} from './components/search/search-box.component';
import { Cardlist } from './components/card-list/card-list.component';
class Robot extends Component {
  constructor(){
    super()
    this.state = {
      robot:[ ],
      searchField: ''

    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({robot:users}) )
  }

  render(){
    const { robot, searchField } = this.state;
    const filteredrobot = robot.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Robot Project</h1>
      <h2>
       <SearchBox  
       placeholder='search Robot'
       handlechange={e =>this.setState({searchField: e.target.value})}
       />
       </h2>
      <Cardlist robot={filteredrobot} />
      </div>
    );
  }
}
  

export default Robot;
