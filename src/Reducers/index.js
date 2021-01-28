import { combineReducers } from 'redux';

const songReducer = () =>{
    return [
        {title: 'Egziabher', duration: '5:30'},
        {title: 'Michael', duration: '5:00'},
        {title: 'Mariyam', duration: '5.14'},
        {title: 'Gebriel', duration: '5:00'}

    ];
};

const selectedSongReducer = (selectedSong=null, action) => {

        if(action.type === 'SONG_SELECTED'){
            return action.payload;
        }
        return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
});