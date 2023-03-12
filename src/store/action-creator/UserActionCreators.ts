import { UserAction, UserActionTypes, RemoveUserAction, FilterUserAction, ResetUsersAction } from '../types/UserTypes';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: 'Error'
            });
        }
    }
};

export const removeUser = (id: number, event: any): RemoveUserAction => {
    event.stopPropagation();
    return {type: UserActionTypes.REMOVE_USER, payload: id};
};

export const filterUser = (filter: string): FilterUserAction => {
    return {type: UserActionTypes.FILTER_USER, payload: filter === '' ? null : filter.toLowerCase()};
};

export const resetUsers = (): ResetUsersAction => {
    return {type: UserActionTypes.RESET_USERS, payload: null};
}