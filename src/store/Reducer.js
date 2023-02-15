const defaultState = {
    comments: []
};

const Reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {...state, comments: [action.payload, ...state.comments]};
        case 'ADD_MANY_COMMENTS':
            return {...state, comments: [...action.payload, ...state.comments]};
        case 'REMOVE_COMMENT':
            return {...state, comments: state.comments.filter(comment => comment.id !== action.payload)};
        default:
            return state;
    }
};

export default Reducer;