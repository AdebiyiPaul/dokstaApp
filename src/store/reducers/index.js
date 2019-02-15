import { combineReducers } from 'redux';
import repositoryReducer from './RepositoryReducer';

export default combineReducers({
    repositoryData: repositoryReducer,
});