import { Action, GlobalState, Reducer } from '../types';
import {
  YOUTUBE_SEARCH_ERROR,
  YOUTUBE_SEARCH_LOADING,
  YOUTUBE_SEARCH_SUCCESS,
  INPUT_VALUE_CHANGE,
} from './actionType';

const reducer: Reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case YOUTUBE_SEARCH_LOADING:
      return {
        ...state,
        isSearchLoading: true,
      };
    case YOUTUBE_SEARCH_SUCCESS:
      return {
        ...state,
        isSearchLoading: false,
        searchList: action.payload.searchList,
      };
    case YOUTUBE_SEARCH_ERROR:
      return {
        ...state,
        isSearchLoading: false,
        error: action.payload.error,
      };
    case INPUT_VALUE_CHANGE:
      return {
        ...state,
        inputValue: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
