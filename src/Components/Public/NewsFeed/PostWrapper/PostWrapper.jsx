import React from 'react';
import pw from './PostWrapper.module.css';

import Post from './Post/Post.jsx';
import PostCentral from './PostCentral/PostCentral.jsx';


const PostWrapper = () => {
    return (
        <div className={pw.Post}>
        	<Post />
            <PostCentral />
        </div>
    );
}

export default PostWrapper;