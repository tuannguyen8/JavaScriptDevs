import React from 'react';
import { Card } from 'react-bootstrap';

const Posts = ({posts, loading}) => {
    if(loading){
        return(
            <h2>Loading....</h2>
        )  
        
    }
  return (
    <div className='render-all'>
        {posts.map(post=>(
            <Card key={post.login.uuid} className='each-card'>
                <div className='div-user-img'>
                    <img className='user-img'
                        src={post.picture.large}
                        alt="user"
                    />
                </div>
                <ul className='userInfo'>
                    <li><span className='span-title'>Name: </span> {post.name.first} {post.name.last}</li>
                    <li><span className='span-title'>Gender: </span><span> {post.gender}</span></li>
                    <li><span className='span-title'>Phone Number: </span><span> {post.cell}</span></li>
                </ul>
            </Card>
        ))}
    </div>
  )
}

export default Posts 