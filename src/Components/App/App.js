import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2 },
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3 }
    ],
    playlistName:'My playlist',
    playlistTracks: [{name:'name1a', artist:'artist1a', album:'album1a', id:'a'},
    {name:'name2a', artist:'artist2a', album:'album2a', id:'b'},
    {name:'name3a', artist:'artist3a', album:'album3a', id:'c'}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    var tracks=this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist(){
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} /> 
          </div>
        </div>
      </div>
    )
  }
}

export default App;
