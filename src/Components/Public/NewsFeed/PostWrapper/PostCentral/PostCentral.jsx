import React from 'react';
import pc from './PostCentral.module.css';

const PostCentral = () => {
    return (
		<div className={pc.PostCentral}>
			<div className={pc.UserPost}>
				<div className={pc.FriendInfo}>
					<figure>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4aiFpuviHwdXTS7gN5lMb62TarJoSt4LK3qicKrpKbVOgQWMZ' />
					</figure>
					<div className={pc.frinedName}>
						<ins>
							<a href='#'>Sarah Shahi</a>
						</ins>
						<span>Published: June,2 2018 19:PM</span>
					</div>
					<div className={pc.postMeta}>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2YwEZuzNRnqx3dTlLIzTNOCkexSX7E7shKeCwlLAWR7Gpt_ev' />
					</div>	
				</div>
			</div>
		</div>
    );
}

export default PostCentral;