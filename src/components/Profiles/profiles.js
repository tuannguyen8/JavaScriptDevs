import './profiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, InputGroup } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
/* import {Col, Row} from 'react-bootstrap'; */
const ProfileContent = () => {
	//state
	const [posts, setPosts] = useState([]);
	const [input, setinput] = useState('');

	const handleChange = (event) => {
		//console.log(event.target.value);
		setinput(event.target.value);
	};
	const handleClick = (input) => {
		//event.preventDefault();
		//console.log("I just submmited", input);
		//window.location.reload(true);

		const newPosts = posts.filter(
			(post) =>
				post.name.last.toLowerCase().includes(input.toLowerCase()) ||
				post.name.first.toLowerCase().includes(input.toLowerCase())
		);
		setPosts(newPosts);
		setinput('');
	};

	useEffect(() => {
		axios
			.get('https://randomuser.me/api/?results=100')
			/* .get('https://randomuser.me/api/?page=3&results=20&seed=abc') */
			.then((res) => {
				console.log(res.data.results);
				setPosts(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='profile-container'>
			<div className="div-profile">
				<InputGroup className=" input-group mb-3">
					<Form.Control
						value={input}
						onChange={handleChange}
						placeholder="Enter username"
						aria-label="Enter username"
						aria-describedby="basic-addon2"
					/>
					<Button
						onClick={() => handleClick(input)}
						variant="outline-secondary"
						id="button-addon2"
					>
						Search
					</Button>
				</InputGroup>
			</div>

            <div className="render-all-profile">
                <div className="div-render-all">
                    {posts.map((post) => (
                        <Card key={post.login.uuid} className="each-card-profile">
                            <div className="div-user-img">
                                <img
                                    className="user-img"
                                    src={post.picture.large}
                                    alt="user"
                                />
                            </div>
                            <ul className="user-info-profile">
                                <li>
                                    <span className='span-title'>Name: </span>{' '}
                                    <span>
                                        {post.name.first} {post.name.last}
                                    </span>
                                </li>
                                <li>
                                    <span className='span-title'>Gender:</span> <span> {post.gender}</span>
                                </li>
                                <li>
                                    <span className='span-title'>Phone Number: </span> <span> {post.cell}</span>
                                </li>
                                <li>
                                    <span className='span-title'>Email:</span> <span> {post.email}</span>
                                </li>
                                <li>
                                    <span className='span-title'>DOB: </span> <span> {post.dob.date}</span>
                                </li>
                                <li>
                                    <span className='span-title'>ID: </span>{' '}
                                    <span>
                                        {' '}
                                        {post.id.name} {post.id.value}
                                    </span>
                                </li>
                                <li>
                                    <span className='span-title'>Location: </span>{' '}
                                    <span>
                                        {' '}
                                        {post.location.city} {post.location.state}{' '}
                                        {post.location.postcode} {post.location.country}
                                    </span>
                                </li>
                                <li>
                                    <span className='span-title'>Registered: </span>{' '}
                                    <span>{post.registered.date}</span>
                                </li>
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
			
		</div>
	);
};

export default ProfileContent;
