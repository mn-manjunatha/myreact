import {
    REQUEST_GROCERY_LIST,
    RECEIVE_GROCERY_LIST,
    RECEIVE_GROCERY_LIST_ERROR,
    RECEIVE_GROCERY_LIST_NETWORK_ERROR,
    REQUEST_SAVE_GROCERY,
    RECEIVE_SAVE_GROCERY,
    RECEIVE_SAVE_GROCERY_ERROR,

    REQUEST_GROCERY_BY_ID,
  RECEIVE_GROCERY_BY_ID,
  RECEIVE_GROCERY__BY_ID_ERROR
} from './groceryTypes'

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

    showErrorMessage: false,
    showBusyIndicator: false,
    saveSuccess: false,

    grocery:null
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {

        case REQUEST_GROCERY_BY_ID:
            return Object.assign({}, state, {
                showBusyIndicator: true,
                saveSuccess: false,
                grocery:null
            });

        case RECEIVE_GROCERY_BY_ID:
            console.log(action.grocery);
            return Object.assign({}, state, {
                showBusyIndicator: false,
                grocery:action.grocery
            });    

        case RECEIVE_GROCERY__BY_ID_ERROR:
            return Object.assign({}, state, {
                showBusyIndicator: false,
                grocery:null,
                groceryErrorMsg: action.groceryErrorMsg
            });     

        case REQUEST_GROCERY_LIST:
            return Object.assign({}, state, {
                loadingGrocery: true,
                isGrocerylActionFailedActionFailed: false,
                saveSuccess: false,
                grocery:null
            });

        case RECEIVE_GROCERY_LIST:
            return Object.assign({}, state, {
                groceryList: action.groceryList,
                totalCount: action.totalCount,
                loadingGrocery: false,
                showErrorMessage: false,
            });

        case RECEIVE_GROCERY_LIST_ERROR:
            return Object.assign({}, state, {
                loadingGrocery: false,
            });
        case RECEIVE_GROCERY_LIST_NETWORK_ERROR:
            return Object.assign({}, state, {
            });

        case REQUEST_SAVE_GROCERY:
            return Object.assign({}, state, {
                showBusyIndicator: true,
                saveSuccess: false
            });
        case RECEIVE_SAVE_GROCERY:
            return Object.assign({}, state, {
                showBusyIndicator: false,
                saveSuccess: true
            });
        case RECEIVE_SAVE_GROCERY_ERROR:
            return Object.assign({}, state, {
                saveSuccess: false,
                showBusyIndicator: false,
                groceryErrorMsg: action.groceryErrorMsg
            });

        default:
            return state
    }
}

export default iceCreamReducer