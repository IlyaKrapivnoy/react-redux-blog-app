import React, { Component } from 'react';

class AddPost extends Component {
    state = {
        post: {
            id: 3,
            title: '',
            content: '',
        },
    };

    handleChange = (e) => {
        this.setState({
            post: {
                ...this.state.post,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.post);
        this.setState({
            post: {
                title: '',
                content: '',
            },
        });
    };

    render() {
        return (
            <>
                <div className='container' style={{ margin: '2.5rem auto' }}>
                    <h4 className='blue-text center-align'>Redux Blog</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className='input-field'>
                            <label htmlFor='post_title'>Title</label>
                            <input
                                onChange={this.handleChange}
                                value={this.state.post.title}
                                type='text'
                                name='title'
                            />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='post_content'>Content</label>
                            <textarea
                                name='content'
                                className='materialize-textarea'
                                onChange={this.handleChange}
                                value={this.state.post.content}
                            ></textarea>
                            <button className='btn blue'>
                                Submit{' '}
                                <i className='material-icons right'>send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default AddPost;
