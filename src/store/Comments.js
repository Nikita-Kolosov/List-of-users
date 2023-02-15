export const fetchComments = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => dispatch({
                type: 'ADD_MANY_COMMENTS',
                payload: json.slice(0, 49)
            }));
    }
};