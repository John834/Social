import React from 'react';
import me from './Messages.module.css';

import Mess from './Mess/Mess.jsx';
import MessagesAside from './MessagesAside/MessagesAside.jsx';



const Messages = (props) => {
	return (
		<div className={me.messages}>
			<Mess state={props.state.mudd} />
			<MessagesAside />
		</div>
	);
}


export default Messages;