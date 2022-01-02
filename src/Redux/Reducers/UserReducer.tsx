import {UserType} from '../../Types/types';
import {SET_ERR, SET_IS_LOADING, SET_LANG, SET_USER} from '../Actions/types';

export interface UserReducerInitType {
  loading: boolean;
  err: string;
  user: UserType;
  lang: string;
}

const INITIAL_STATE: UserReducerInitType = {
  loading: false,
  err: '',
  lang: 'en',
  user: {
    image: '',
    id: 0,
    lastName: '',
    name: '',
    phoneNumber: '',
    roles: ['admin'],
    status: false,
    username: '',
  },
};
export type KeysOfUser = keyof typeof INITIAL_STATE.user;
export type ValuesOsUser = typeof INITIAL_STATE.user[KeysOfUser];
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          [action.compositeKey]: action.payload,
        },
      };
    case SET_ERR:
      return {...state, err: action.payload};
    case SET_IS_LOADING:
      return {...state, loading: action.payload};
    case SET_LANG:
      return {...state, lang: action.payload};
    default:
      return state;
  }
};
