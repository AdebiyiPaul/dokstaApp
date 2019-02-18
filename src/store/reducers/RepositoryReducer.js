const INITIAL_VALUES = {
    selectedRepository: {},
    repositoryList: [],
    repositoryApiList: [],
    loading: false,
};

export const repositoryReducer = (state = INITIAL_VALUES, action) => {

    switch(action.type){
        case 'UPDATE_VALUES':
            return { ...state, [action.payload.key]: action.payload.value };
        case 'FETCH_REPOSITORY':
            return { ...state, repositoryList: action.payload };
        case 'FETCH_REPOSITORY_START':
            return { ...state, loading: true};
        case 'FETCH_MEMBERS_LIST_DONE':
            return { ...state, loading: false, repositoryApiList: action.payload };
        case 'SELECT_REPOSITORY':
            return { ...state, selectedRepository: action.payload };
        default:
            return state;
    }
};

export default repositoryReducer;
