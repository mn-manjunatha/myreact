import {
  REQUEST_GROCERY_LIST,
  RECEIVE_GROCERY_LIST,
  RECEIVE_GROCERY_LIST_ERROR,
  REQUEST_SAVE_GROCERY,
  RECEIVE_SAVE_GROCERY,
  RECEIVE_SAVE_GROCERY_ERROR,

  REQUEST_GROCERY_BY_ID,
  RECEIVE_GROCERY_BY_ID,
  RECEIVE_GROCERY__BY_ID_ERROR
} from './groceryTypes'

export function requestGroceryById(searchId) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_GROCERY_BY_ID,
    });

    fetch(`http://localhost:3001/grocery/${searchId}`)
    .then(response => response.json())
    .then(data => 
      dispatch(receiveGroceryById(data))
      )
    .catch(error => dispatch({
        type: RECEIVE_GROCERY__BY_ID_ERROR,
      })
    );
  };
}


export function receiveGroceryById(grocery, isFirstLoaded, isSorting) {
  return {
    type: RECEIVE_GROCERY_BY_ID,
    grocery: grocery,
  };
}


export function requestSaveGrocery(saveObject) {
  return (dispatch, getState) => {
    dispatch({
      type: REQUEST_SAVE_GROCERY,
    });

    let url = "http://localhost:3001/grocery"

    if(saveObject.id)
      url = `http://localhost:3001/grocery/${saveObject.id}`

    fetch(url,{
      method: !saveObject.id? "Post": "Put",
      headers:{
        'Content-Type':'application/json' 
      },
      body: JSON.stringify(
        {itemName: saveObject.itemName,
          price:parseInt(saveObject.price),
          quantity:parseInt(saveObject.quantity),
        })
    }).then(response => response.json())
    .then(data => {
      dispatch({
        type: RECEIVE_SAVE_GROCERY,
      });
      // this.props.history.push("/grocery");
      // console.log(data)
    })
    .catch(error => dispatch({
        type: RECEIVE_SAVE_GROCERY_ERROR,
        loadingGrocery: false,
      })
    );
  };
}


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