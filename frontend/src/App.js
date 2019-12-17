import React from 'react';
import './App.css';
import Rockets from './components/Rockets'
import FavoriteRockets from './components/FavoriteRockets'
import SearchBar from './components/SearchBar'


class App extends React.Component {
  state = {
    rockets: [],
    favorites: [],
    searchInput: ''
  }
  
  componentDidMount(){
    fetch('https://api.spacexdata.com/v3/launches')
      .then(response => response.json())
      .then(rockets => this.setState({ rockets }))
  }
  
  addToFavorites = (rocket) => {
    const rocketIDs = this.state.favorites.map(rocket => {
      return rocket.id
    })
    if (!rocketIDs.includes(rocket.id)){
      this.setState({ favorites: [...this.state.favorites, rocket]})
    }
  }

  removeFromFavorites = (rocket) => {
    const filteredFavorites = this.state.favorites.filter(favorite => {
      return favorite !== rocket ? rocket : null
    })

    this.setState({ favorites: filteredFavorites})
  }

  filterRockets = () => {
    return this.state.rockets.filter(rocket => {
      return (rocket.mission_name).toLowerCase().includes(this.state.searchTerm)
    })
  }

  handleChange = (event) => {
    return this.setState({ searchInput: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>RISKY ROCKETS</h1>
        </header>
        <SearchBar
          handleChange={this.handleChange} />
        <main>
          <Rockets
            rockets={this.state.rockets}
            cardClick={this.addToFavorites} />
          <FavoriteRockets
            favorites={this.state.favorites}
            cardClick={this.removeFromFavorites} />
        </main>
      </div>
    )
  }
}

export default App;
