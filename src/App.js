import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users, filteredMonsters: users }
      },
        () => {
          console.log('Callback >>> ', this.state);
        }
      ))
  }


  render() {
    return (
      <div className="App">
        <input className='search-box' type="search" placeholder='Search monsters' onChange={(event) => {
          const filMon = this.state.monsters.filter((monster) => {
            return (
              monster.name.toLowerCase().includes(event.target.value.toLowerCase())
              );
            })
          this.setState(() => {
            return {
              filteredMonsters: filMon
            }
          }, () => {
            console.log('VE', this.state.filteredMonsters);
          })
        }} />
        {
          this.state.filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
