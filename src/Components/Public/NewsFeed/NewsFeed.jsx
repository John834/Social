import React from 'react';
import nf from './NewsFeed.module.css';
import Post from './Post/Post.jsx';


const NewsFeed = () => {
    return (
        <div className={nf.NewsFeed}>
        	<Post />
        </div>
    );
}

export default NewsFeed;