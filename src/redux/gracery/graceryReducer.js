import { REQUEST_GRACERY_LIST } from './graceryTypes'
import { RECEIVE_GRACERY_LIST } from './graceryTypes'
import { RECEIVE_GRACERY_LIST_ERROR } from './graceryTypes'
import { RECEIVE_GRACERY_LIST_NETWORK_ERROR } from './graceryTypes'

const initialState = {
    searchParameter: {
        selectedStatus: '',
        selectedType: '',
        selectedAssay: '',
        selectedDevice: '',
        searchText: '',
    },
    graceryList: [],
    currentPageNumber: 0,
    currentPageSize: 0,
    totalCount: 0,
    loadingGracery: false,
    isGracerylActionFailed: false,
    graceryErrorMsg: ''
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_GRACERY_LIST:
            return Object.assign({}, state, {
                loadingGracery: true,
                isGracerylActionFailedActionFailed: false,
            });

        case RECEIVE_GRACERY_LIST:
            return Object.assign({}, state, {
                graceryList: action.graceryList,
                totalCount: action.totalCount,
                loadingGracery: false,
                graceryErrorMsgErrorMsg: '',
            });

        case RECEIVE_GRACERY_LIST_ERROR:
            return Object.assign({}, state, {
                loadingGracery: false,
            });
        case RECEIVE_GRACERY_LIST_NETWORK_ERROR:
            return Object.assign({}, state, {
            });
        default:
            return state
    }
}

export default iceCreamReducer