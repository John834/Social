import React from 'react';
import yp from './YourPage.module.css';


const YourPage = () => {
	return (
		<div className={yp.YourPage}>
			<h4 className={yp.title}>YOUR PAGE</h4>
			<div className={yp.mypage}>
				<figure>
					<a href='#'>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ02uOh_bHDA86WZh9XnhK2YYsb0gJgQ8lh1gxlgVmgOJKiJUSu' />
					</a>
				</figure>
			</div>
		</div>
	);
}

export default YourPage;