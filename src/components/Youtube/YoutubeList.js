import React from 'react';
import YoutubeItem from './YoutubeItem';
import data from '../../data'

const YoutubeList = (props) => {
    return (
        <div className="yt-list">
        {/* {props.children} */}
        {data.map((item, index) => (
          <YoutubeItem key={item.id} item = {item} image = {item.image} className = {index % 2 === 0 ? 'even-item-list' : ""} />
        ))}
        </div>
    );
};

export default YoutubeList;