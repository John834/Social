import React from 'react';
import nf from './NewsFeed.module.css';

import Post from './Post/Post.jsx';
import NewsAside from './NewsAside/NewsAside.jsx';


const NewsFeed = () => {
    return (
        <div className={nf.NewsFeed}>
        	<Post />
        	<NewsAside />
        </div>
    );
}

export default NewsFeed;