import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

function DataFetching() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios
			/* .get('https://randomuser.me/api/?results=100') */
            .get('https://randomuser.me/api/?page=3&results=20&seed=abc')
			.then((res) => {
				console.log(res.data.results);
				setPosts(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<ul className='render-all'>
				{posts.map(post => (
                    
                        
                    <Card className='each-card'>
                        <div className='div-user-img'>
                            <img className='user-img'
                                src={post.picture.large}
                                alt="user"
                            />
                        </div>
                        <ul>
                            <li><span>Name: </span> {post.name.last} {post.name.first}</li>
                            <li><span>Gender: {post.gender}</span></li>
                            <li><span>Email: {post.email}</span></li>
                        </ul>
                    </Card>
                    
					
				))}
			</ul>
            <div className='paginated-btn'>
                <Button className='each-page-btn'>Page 1</Button>
                <Button className='each-page-btn'>Page 2</Button>
                <Button className='each-page-btn'>Page 3</Button>
                <Button className='each-page-btn'>Page 4</Button>
                <Button className='each-page-btn'>Page 5</Button>
            </div>
		</div>
	);
}

export default DataFetching;
