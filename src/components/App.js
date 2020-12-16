import React from "react";
import Rapid from '../api/Rapid';
import SongList from './SongList';
import SongDetail from './SongDetail';

class App extends React.Component {
    state = { songs: [], selectedSong: null }

    onSelectSong = ( song ) => {
        this.setState({ selectedSong: song })
    };

    componentDidMount= async () => {
        const response = await Rapid.get('artists/16775/songs');
        this.setState({ 
            songs: response.data.response.songs,
            selectedSong: response.data.response.songs[0].full_title
        });
    };
    
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='ten wide column'>
                            <SongList songs={this.state.songs} onSelectSong={this.onSelectSong} />
                        </div>
                        <div className='six wide column'>
                            <SongDetail selectedSong={this.state.selectedSong} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;