import {REQUEST_GRACERY_LIST} from './graceryTypes'
import {RECEIVE_GRACERY_LIST} from './graceryTypes'
import {RECEIVE_GRACERY_LIST_ERROR} from './graceryTypes'

export function requestGrocery(searchParameters, page,
    pageCount, sortBy, sortDirection, isFirstLoad, isLoadMore, isUpdated) {
    return (dispatch) => {
      dispatch({
        type: REQUEST_GRACERY_LIST,
      });

      fetch("http://localhost:3001/gracery")
      .then(response => response.json())
      .then(data => 
        dispatch(receiveGrocery(data, isFirstLoad, false))
        )
      .catch(error => dispatch({
          type: RECEIVE_GRACERY_LIST_ERROR,
          loadingGracery: false,
        })
      );
    };
  }

  export function receiveGrocery(graceryList, isFirstLoaded, isSorting) {
    return {
      type: RECEIVE_GRACERY_LIST,
      graceryList: graceryList,
      isFirstLoad: isFirstLoaded,
      totalCount:graceryList.length,
      isSorting,
    };
  }