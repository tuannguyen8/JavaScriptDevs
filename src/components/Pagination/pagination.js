import React from 'react'
//import {pagination} from 'react-bootstrap';

const pagination = ({postsPerPage, totalPosts, paginate}) => {
    
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    /* const func = event=>{
        event.preventDefault();
    }
    func(); */
    return (
        <nav className='nav-pagi'>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key = {number} className="page-item">
                        <a onClick={()=>paginate(number)} href='/dashboard' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
  )
}

export default pagination