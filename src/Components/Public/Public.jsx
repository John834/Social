import React from 'react';
import p from './Public.module.css';
// Nav
import NewsFeed from './NewsFeed/NewsFeed.jsx';
import InBox from './InBox/InBox.jsx';
import MyPages from './MyPages/MyPages.jsx';
import Friends from './Friends/Friends.jsx';
import Images from './Images/Images.jsx';
import Videos from './Videos/Videos.jsx';
import Messages from './Messages/Messages.jsx';
import { Route, BrowserRouter } from 'react-router-dom';




const Public = (props) => {
    return (
        <div className={p.Public}>
        	<div className='App-nav'>
	          <Route exact path='/NewsFeed' render={ () => <NewsFeed /> } />
	          <Route path='/InBox' component={InBox} />
	          <Route path='/MyPages' component={MyPages} />
	          <Route path='/Friends' component={Friends} />
	          <Route path='/Images' component={Images} />
	          <Route path='/Videos' component={Videos} />
	          <Route path='/Messages' render={ () => <Messages UserData={props.UserData} MessageData={props.MessageData} />} />
	        </div>
        </div>
    );
}

export default Public;