import React from 'react';
import m from './Messages.module.css';
import {NavLink} from 'react-router-dom';





const UserAccount = (props) => {
	let path = '/Messages/' + props.id;
	return (
		<div className={m.UserItem}>
			<img src={props.img} />
			<div className={m.Name + ' ' + m.active}>
				<NavLink to={path}>{props.name}</NavLink>
			</div>	
		</div>
	);
}


const UserMessages = (props) => {
	return (
		<div className={m.dialog}>{props.Message}</div>
	);
}






const Messages = () => {

	let UserData = [
		{id: 'sarah_shaci', name: 'Sarah Shahi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4aiFpuviHwdXTS7gN5lMb62TarJoSt4LK3qicKrpKbVOgQWMZ' },
		{id: 'amy_acker', name: 'Amy Acker', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ02uOh_bHDA86WZh9XnhK2YYsb0gJgQ8lh1gxlgVmgOJKiJUSu'},
		{id: 'chloe_grace_moretz', name: 'chloe grace moretz', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxBicNkB8tUUZL03hVa8D_8Ss_ArdwyxeXxEjBWKPO4BuxFALI'},
		{id: 'cara_delevingne', name: 'cara delevingn', img: 'data:image/jpeg;base64,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'}
	]

	let MessageData = [
		{Message: 'Hello'},
		{Message: 'How are you?'}
	]

    return (
        <div className={m.Messages}>
        	<h5 className={m.MessageTitle}>All Messages</h5>
        	<div className={m.MessagesItem}>
	        	<div className={m.Users}>
	        
					<UserAccount name={UserData[0].name} id={UserData[0].id} img={UserData[0].img} />
					<UserAccount name={UserData[1].name} id={UserData[1].id} img={UserData[1].img} />
					<UserAccount name={UserData[2].name} id={UserData[2].id} img={UserData[2].img} />
					<UserAccount name={UserData[3].name} id={UserData[3].id} img={UserData[3].img} />
	        		
	        	</div>

	        	<div className={m.UserMess}>
	        		<figure>
	        			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4aiFpuviHwdXTS7gN5lMb62TarJoSt4LK3qicKrpKbVOgQWMZ' />
	        		</figure>
	        		<span>
						Sarah Shahi
						<i>Online</i>
	        		</span>
	        	</div>

	        	<div className={m.Dialogs}>
					<UserMessages Message={MessageData[0].Message} />
					<UserMessages Message={MessageData[1].Message} />
	        	</div>

	        	<div className={m.getMessage}>
	        		<textarea placeholder='Отправьте сообщение'>

	        		</textarea>
	        	</div>
	        </div>
        </div>
    );
}

export default Messages;