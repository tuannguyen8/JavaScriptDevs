import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Form, Button, InputGroup} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Card } from 'react-bootstrap';
import Posts from '../Posts/posts';
import Pagi from '../Pagination/pagination';

/* import {Col, Row} from 'react-bootstrap'; */


const DashboardContent = () => {

    //state
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [ postsPerPage] = useState(10);

    useEffect(()=>{
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await axios.get('https://randomuser.me/api/?results=100');
            //const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            //setPosts(res.data)
            setPosts(res.data.results);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    /* console.log(posts) */
    //Get current Posts
    //get index of the last post
    const indexOfLastPost = currentPage * postsPerPage;
    //get index of the first post
    const indexOfFirstPost = indexOfLastPost -postsPerPage;
    //get current posts
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    } 
    /* const func = event => {
        event.preventDefault();
    }
    func(); */
    
	return (
        <div className='container mt-5'>
            <Pagi postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            <Posts posts={currentPosts} loading={loading}/>        
        </div>
	);
};

export default DashboardContent;

