import React from 'react';
import ma from './MessagesAside.module.css';

import Social from './Social/Social.jsx';
import Follownig from './Follownig/Follownig.jsx';


const MessagesAside = () => {
	return (
		<div className={ma.MessagesAside}>
			<Social />
			<Follownig />
		</div>
	);
}

export default MessagesAside;