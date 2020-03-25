import React from 'react';
import me from './Messages.module.css';

import Mess from './Mess/Mess.jsx';
import MessagesAside from './MessagesAside/MessagesAside.jsx';

const Messages = () => {
	return (
		<div className={me.messages}>
			<Mess />
			<MessagesAside />
		</div>
	);
}


export default Messages;