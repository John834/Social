import React from 'react';
import p from './Post.module.css';

import Att from './Att/Att.jsx';

const Post = () => {

	let newPostElements = React.createRef();

	let addPost = () => {
		let text = newPostElements.current.value;
		alert(text);
		newPostElements.current.value = '';
	}

    return (
        <div className={p.Post}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4aiFpuviHwdXTS7gN5lMb62TarJoSt4LK3qicKrpKbVOgQWMZ' />
        	<form method='post'>
        		<textarea ref={newPostElements}></textarea>
        		<div className={p.attachments}>
					<ul>
						<li>
							<i>&#9786;</i>
							<label className={p.filecontainer}>
								<input type='file' />
							</label>
						</li>
						<li>
							<i>&#9786;</i>
							<label className={p.filecontainer}>
								<input type='file' />
							</label>
						</li>
						<li>
							<i>&#9786;</i>
							<label className={p.filecontainer}>
								<input type='file' />
							</label>
						</li>
						<li>
							<i>&#9786;</i>
							<label className={p.filecontainer}>
								<input type='file' />
							</label>
						</li>
					</ul>
				</div>
        	</form>
        	<button onClick={addPost}>Post</button>
        </div>
    );
}

export default Post;