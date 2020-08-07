import { REQUEST_GROCERY_LIST } from './groceryTypes'
import { RECEIVE_GROCERY_LIST } from './groceryTypes'
import { RECEIVE_GROCERY_LIST_ERROR } from './groceryTypes'
import { RECEIVE_GROCERY_LIST_NETWORK_ERROR } from './groceryTypes'

const initialState = {
    searchParameter: {
        selectedStatus: '',
        selectedType: '',
        selectedAssay: '',
        selectedDevice: '',
        searchText: '',
    },
    groceryList: [],
    currentPageNumber: 0,
    currentPageSize: 0,
    totalCount: 0,
    loadingGrocery: false,
    isGrocerylActionFailed: false,
    groceryErrorMsg: ''
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_GROCERY_LIST:
            return Object.assign({}, state, {
                loadingGrocery: true,
                isGrocerylActionFailedActionFailed: false,
            });

        case RECEIVE_GROCERY_LIST:
            return Object.assign({}, state, {
                groceryList: action.groceryList,
                totalCount: action.totalCount,
                loadingGrocery: false,
                groceryErrorMsgErrorMsg: '',
            });

        case RECEIVE_GROCERY_LIST_ERROR:
            return Object.assign({}, state, {
                loadingGrocery: false,
            });
        case RECEIVE_GROCERY_LIST_NETWORK_ERROR:
            return Object.assign({}, state, {
            });
        default:
            return state
    }
}

export default iceCreamReducer