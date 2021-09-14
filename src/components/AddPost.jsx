import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/PostAction';

export const AddPost = () => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        content: '',
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(post));
        setPost({
            id: Math.floor(Math.random() * 100),
            title: '',
            content: '',
        });
    };

    return (
        <>
            <div className='container' style={{ margin: '2.5rem auto' }}>
                <h4 className='blue-text center-align'>Redux Blog</h4>
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor='post_title'>Title</label>
                        <input
                            onChange={handleChange}
                            value={post.title}
                            type='text'
                            name='title'
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='post_content'>Content</label>
                        <textarea
                            name='content'
                            className='materialize-textarea'
                            onChange={handleChange}
                            value={post.content}
                        ></textarea>
                        <button className='btn blue'>
                            Submit <i className='material-icons right'>send</i>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createPost: (post) => {
//             dispatch(addPost(post));
//         },
//     };
// };

// export default connect(null, mapDispatchToProps)(AddPost);
