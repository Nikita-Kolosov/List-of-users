import { UserAction, UserActionTypes, UserState } from './types/UserTypes';

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    filter: null
};

const Reducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER: 
            return { loading: true, error: null, users: [], filter: null };
        case UserActionTypes.FETCH_USER_SUCCESS:
            return { loading: false, error: null, users: action.payload, filter: null };
        case UserActionTypes.FETCH_USER_ERROR: 
            return { loading: false, error: action.payload, users: [], filter: null };
        case UserActionTypes.REMOVE_USER:
            return { loading: false, error: null, users: [...state.users.filter(user => user.id !== action.payload)], filter: null };
        case UserActionTypes.FILTER_USER:
            return { loading: false, error: null, users: [...state.users], filter: action.payload };
        case UserActionTypes.RESET_USERS:
            return { loading: false, error: null, users: [...state.users], filter: action.payload };
        default:
            return state;
    }
};

export default Reducer;