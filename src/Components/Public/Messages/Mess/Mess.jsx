import React from 'react';
import m from './Mess.module.css';
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
		<div className={m.dialog}>{props.message}</div>
	);
}






const Mess = (props) => {
	debugger;	
	

	
	let UsersElements = props.state.UserData.map(ud => <UserAccount name={ud.name} id={ud.id} img={ud.img} /> );
	let MessageElements = props.state.MessageData.map(md => <UserMessages message={md.message} /> );

    return (
        <div className={m.Messages}>
        	<h5 className={m.MessageTitle}>All Messages<sup>&hellip;</sup></h5>
        	<div className={m.MessagesItem}>
	        	<div className={m.Users}>
					
				{UsersElements}	        
	        		
	        	</div>

				<div className={m.contentDialogs}>
		        	<div className={m.UserMess}>
		        		<figure>
		        			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4aiFpuviHwdXTS7gN5lMb62TarJoSt4LK3qicKrpKbVOgQWMZ' />
		        		</figure>
		        		<span>
							Sarah Shahi
							<i>Online</i>
		        		</span>
		        		<div className={m.circle}>
		        			<div className={m.circleOne}>
								<div>&mdash;</div>
								<div>&mdash;</div>
								<div>&mdash;</div>
							</div>	
		        		</div>
		        	</div>

		        	<div className={m.Dialogs}>
						{MessageElements}
		        	</div>

		        	<div className={m.getMessage}>
		        		<textarea placeholder='Отправьте сообщение'>

		        		</textarea>
		        	</div>
		        </div>
	        </div>
        </div>
    );
}

export default Mess;