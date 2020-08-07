import {REQUEST_GROCERY_LIST} from './groceryTypes'
import {RECEIVE_GROCERY_LIST} from './groceryTypes'
import {RECEIVE_GROCERY_LIST_ERROR} from './groceryTypes'

export function requestGrocery(searchParameters, page,
    pageCount, sortBy, sortDirection, isFirstLoad, isLoadMore, isUpdated) {
    return (dispatch) => {
      dispatch({
        type: REQUEST_GROCERY_LIST,
      });

      fetch("http://localhost:3001/grocery")
      .then(response => response.json())
      .then(data => 
        dispatch(receiveGrocery(data, isFirstLoad, false))
        )
      .catch(error => dispatch({
          type: RECEIVE_GROCERY_LIST_ERROR,
          loadingGrocery: false,
        })
      );
    };
  }

  export function receiveGrocery(groceryList, isFirstLoaded, isSorting) {
    return {
      type: RECEIVE_GROCERY_LIST,
      groceryList: groceryList,
      isFirstLoad: isFirstLoaded,
      totalCount:groceryList.length,
      isSorting,
    };
  }