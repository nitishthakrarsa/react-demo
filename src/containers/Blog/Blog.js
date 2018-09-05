import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
// import axios from 'axios';
import axios from '../../axios';

class Blog extends Component {

    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                                <a href="/nwe-post">New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;