import React, { Component } from 'react';
import PostDetail from './PostDetail';

class PostList extends Component {
    render() {
        return (
            <>
                <h1>Post List</h1>
                <PostDetail />
            </>
        );
    }
}

export default PostList;
