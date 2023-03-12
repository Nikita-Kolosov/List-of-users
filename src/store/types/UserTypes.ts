export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
    filter: string | null;
};

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    REMOVE_USER = 'REMOVE_USER',
    FILTER_USER = 'FILTER_USER',
    RESET_USERS = 'RESET_USERS'
};

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USER
};

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: any[]
};

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR,
    payload: string
};

export interface FilterUserAction {
    type: UserActionTypes.FILTER_USER,
    payload: string | null
}

export interface RemoveUserAction {
    type: UserActionTypes.REMOVE_USER,
    payload: number
}

export interface ResetUsersAction {
    type: UserActionTypes.RESET_USERS,
    payload: null
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | RemoveUserAction | FilterUserAction | ResetUsersAction;