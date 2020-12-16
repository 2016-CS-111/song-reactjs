import React from 'react';

const SongDetail = ({ selectedSong }) => {
    if (!selectedSong) {
        return (
            <div className='ui loading segment' style={{ height: '50px' }}></div>
        )
    };

    return (
        <div className='ui placeholder segment' style={{ backgroundColor: 'lightseagreen' }}>
            <div className='ui header'>Details For:</div>
            <div>Title: {selectedSong}</div>
        </div>
    );
};

export default SongDetail;