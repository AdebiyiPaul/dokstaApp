import RepositoryData from '../../assets/repositories.json';

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