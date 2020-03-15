import React from 'react';
import m from './Messages.module.css';
import {NavLink} from 'react-router-dom';

const Messages = () => {
    return (
        <div className={m.Messages}>
        	<h5 className={m.MessageTitle}>All Messages</h5>
        	<div className={m.MessagesItem}>
	        	<div className={m.Users}>
	        		
					<div className={m.UserItem}>
	        			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4aiFpuviHwdXTS7gN5lMb62TarJoSt4LK3qicKrpKbVOgQWMZ' />
	        			<div className={m.Name + ' ' + m.active}>
	        				<NavLink to='/Messages/sarah_shaci'>sarah shahi</NavLink>
	        			</div>
	        		</div>
	        		
	        		<div className={m.UserItem}>
	        			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4aiFpuviHwdXTS7gN5lMb62TarJoSt4LK3qicKrpKbVOgQWMZ' />
	        			<div className={m.Name}>
	        				<NavLink to='/Messages/sarah_shaci'>sarah shahi</NavLink>
	        			</div>
	        		</div>
	        	</div>
	        	<div className={m.Dialogs}>
					<div className={m.dialog}>Hello</div>
					<div className={m.dialog}>How are you?</div>
	        	</div>
	        </div>
        </div>
    );
}

export default Messages;