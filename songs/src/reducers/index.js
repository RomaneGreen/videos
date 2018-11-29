import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No scrubs', duration:'4:38'},
        {title: 'Macarena', duration:'4:28'},
        {title: 'All star', duration:'4:18'},
        {title: 'I want it that way', duration:'4:58'},
    ];
};

const selectedSongReducer = (selectedSong=null,action) => {
  
  if (action.type === 'SONG_SELECTED') {
      return action.payload
  }

    return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

