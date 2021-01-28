import React from 'react'
import {connect} from 'react-redux'

const SongDetail = ({mySong}) => {
    if (!mySong){
    return (
            <div>
                Selected Song
            </div>
        );
    }
    //console.log(props);
    return (
       <div>
           <h2>Detail For</h2>
           <hr /> 
           <h5>Song Title: {mySong.title} 
           <br />
            Song Duration: {mySong.duration}
            </h5>   
       </div>
    );
};

const mapStateToProps = (state) => {
 
    return {mySong: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);