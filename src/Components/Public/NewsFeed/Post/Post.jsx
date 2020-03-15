import React from 'react';
import p from './Post.module.css';


const Post = () => {
    return (
        <div className={p.Post}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4aiFpuviHwdXTS7gN5lMb62TarJoSt4LK3qicKrpKbVOgQWMZ' />
        	<form method='post'>
        		<textarea placeholder='write something'></textarea>
        	</form>
        </div>
    );
}

export default Post;