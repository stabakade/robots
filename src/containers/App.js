import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  /*onSearchChange = (event) => {
    console.log(event.target.value);
  }*/

  // I get an error if I don't use arrow function here 
  // https://reactjs.org/docs/handling-events.html
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })  // event.target.value will give whatever we input 
  }

  render() {
    const { robots, searchfield } = this.state; // state is used to make the children communicate with each other
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robo App</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;
