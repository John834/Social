import React from 'react';
import na from './NewsAside.module.css';

import YourPage from './YourPage/YourPage.jsx';
import Banner from './Banner/Banner.jsx';
import AsideFriends from './AsideFriends/AsideFriends.jsx';


const NewsAside = () => {
	return (
		<div className={na.NewsAside}>
			<YourPage />
			<Banner />
			<AsideFriends />
		</div>
	);
}

export default NewsAside;