import React from 'react';
import a from './Att.module.css';

const Att = () => {
    return (
		<div className={a.attachments}>
			<ul>
				<li>
					<i>&#9786;</i>
					<label className={a.filecontainer}>
						<input type='file' />
					</label>
				</li>
				<li>
					<i>&#9786;</i>
					<label className={a.filecontainer}>
						<input type='file' />
					</label>
				</li>
				<li>
					<i>&#9786;</i>
					<label className={a.filecontainer}>
						<input type='file' />
					</label>
				</li>
				<li>
					<i>&#9786;</i>
					<label className={a.filecontainer}>
						<input type='file' />
					</label>
				</li>
				<li><button type="submit">Post</button></li>
			</ul>
		</div>
    );
}

export default Att;