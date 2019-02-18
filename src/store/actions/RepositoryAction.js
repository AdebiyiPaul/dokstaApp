import RepositoryData from '../../assets/repositories.json';
import {SERVER_REQUEST} from "../../shared/Backend";
import {LOGGER} from "../../shared/Methods";

export const fetchRepositories = () => {
    return async (dispatch) => {

        dispatch({ type: 'FETCH_REPOSITORY', payload: RepositoryData.repositories });
    };
};

export const selectRepository = (selectedRepository) => {
    return {
        type: 'SELECT_REPOSITORY',
        payload: selectedRepository
    };
};

export const fetchRepositoryList = (body) => {
    return async (dispatch) => {

        dispatch({ type: 'FETCH_REPOSITORY_START', payload: null });

        const res = await SERVER_REQUEST(body, 'GET');

        LOGGER('response', res.items);

        dispatch({ type: 'FETCH_MEMBERS_LIST_DONE', payload: res.items });
    };
};