import React from 'react';
import yp from './YourPage.module.css';


const YourPage = () => {
	return (
		<div className={yp.YourPage}>
			<h4 className={yp.title}>YOUR PAGE</h4>
			<div className={yp.mypage}>
				<div className={yp.myPageInfo}>
					<figure>
						<a href='#'>
							<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ02uOh_bHDA86WZh9XnhK2YYsb0gJgQ8lh1gxlgVmgOJKiJUSu' />
						</a>
					</figure>
					<div className={yp.pageMeta}>
						<a href='#'>My Page</a>
						<span>
							<a href="">
								Messages
								<em>9</em>
							</a>
						</span>
						<span>
							<a href="">
								Notifications
								<em>2</em>
							</a>
						</span>
					</div>
				</div>
				<div className={yp.pageLike}>
					<ul>
						<li><a>LIKES</a></li>
						<li><a>VIEWS</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default YourPage;