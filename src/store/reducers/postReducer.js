const initState = {
    posts: [
        { id: 1, title: 'post one', content: 'this is post one' },
        { id: 2, title: 'post two', content: 'this is post two' },
        { id: 3, title: 'post three', content: 'this is post three' },
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
                posts: [...state.posts, action.post],
            };
        default:
            return state;
    }
};

export default postReducer;
