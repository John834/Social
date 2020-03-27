import React from 'react';
import f from './Follownig.module.css';


const Follownig = () => {
	return (
		<div className={f.following}>
			<h4 className={f.follTitle}>WHO'S FOLLOWNIG</h4>
			<ul>
				<li>
					<figure>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ02uOh_bHDA86WZh9XnhK2YYsb0gJgQ8lh1gxlgVmgOJKiJUSu' />
						<div className={f.metaFoll}>
							<h5><a href='#'>Amy Acker</a></h5>
							<a className={f.fol} href='#'>add Friend</a>
						</div>
					</figure>
				</li>

				<li>
					<figure>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ02uOh_bHDA86WZh9XnhK2YYsb0gJgQ8lh1gxlgVmgOJKiJUSu' />
						<div className={f.metaFoll}>
							<h5><a href='#'>Amy Acker</a></h5>
							<a className={f.fol} href='#'>add Friend</a>
						</div>
					</figure>
				</li>

				<li>
					<figure>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ02uOh_bHDA86WZh9XnhK2YYsb0gJgQ8lh1gxlgVmgOJKiJUSu' />
						<div className={f.metaFoll}>
							<h5><a href='#'>Amy Acker</a></h5>
							<a className={f.fol} href='#'>add Friend</a>
						</div>
					</figure>
				</li>

				<li>
					<figure>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ02uOh_bHDA86WZh9XnhK2YYsb0gJgQ8lh1gxlgVmgOJKiJUSu' />
						<div className={f.metaFoll}>
							<h5><a href='#'>Amy Acker</a></h5>
							<a className={f.fol} href='#'>add Friend</a>
						</div>
					</figure>
				</li>

				<li>
					<figure>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ02uOh_bHDA86WZh9XnhK2YYsb0gJgQ8lh1gxlgVmgOJKiJUSu' />
						<div className={f.metaFoll}>
							<h5><a href='#'>Amy Acker</a></h5>
							<a className={f.fol} href='#'>add Friend</a>
						</div>
					</figure>
				</li>
			</ul>
		</div>
	);
}

export default Follownig;