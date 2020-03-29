import React from 'react';
import nf from './NewsFeed.module.css';

import PostWrapper from './PostWrapper/PostWrapper.jsx';
import NewsAside from './NewsAside/NewsAside.jsx';


const NewsFeed = () => {
    return (
        <div className={nf.NewsFeed}>
        	<PostWrapper />
        	<NewsAside />
        </div>
    );
}

export default NewsFeed;