import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPost extends Component {
    state = {
        post: {
            id: Math.floor(Math.random() * 100),
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
        this.props.createPost(this.state.post);
        this.setState({
            post: {
                id: Math.floor(Math.random() * 100),
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

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            dispatch({ type: 'ADD_POST', post });
        },
    };
};

export default connect(null, mapDispatchToProps)(AddPost);
