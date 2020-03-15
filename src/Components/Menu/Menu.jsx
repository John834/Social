import React from 'react';
import m from './Menu.module.css';
// Navlink
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div className={m.Menu}>
        	<h4 className={m.WidgetTitle}>Shortcuts</h4>
        	<nav> 
        		<ul> 
        			<li><NavLink to="/NewsFeed">News Feed</NavLink></li>
                    <li><NavLink to="/InBox">Inbox</NavLink></li>      	
                    <li><NavLink to="/MyPages">My Pages</NavLink></li>       
                    <li><NavLink to="/Friends">Friends</NavLink></li>       
                    <li><NavLink to="/Images">Images</NavLink></li>       
                    <li><NavLink to="/Videos">Videos</NavLink></li>       
                    <li><NavLink to="/Messages">Messages</NavLink></li>       
        			<li><a href="">Notifications</a></li>
        			<li><a href="">People Nearby</a></li>
        			<li><a href="">Insights</a></li>
        			<li><a href="">Logout</a></li>
        		</ul>
        	</nav>
        </div>
    );
}

export default Menu;
