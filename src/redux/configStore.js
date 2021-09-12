import {applyMiddleware, combineReducers,createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import MenuReducer from './reducers/MenuReducer';
import CommentReducer from './reducers/CommentReducer';

const rootReducer = combineReducers({
   MenuReducer,
   CommentReducer
});
// apply thunk để xử lí dispatch api
export const store = createStore(rootReducer,applyMiddleware(reduxThunk));