const initState = {
    posts: [
        {
            id: 1,
            title: 'post 1',
            content: 'post content 1',
        },
        {
            id: 2,
            title: 'post 2',
            content: 'post content 2',
        },
    ],
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            const newPost = state.posts.filter((post) => post.id !== action.id);
            return {
                posts: newPost,
            };
        case 'ADD_POST':
            console.log('you clicked me');
            return {
                posts: [action.post, ...state.posts],
            };
        default:
            return state;
    }
};

export default postReducer;
