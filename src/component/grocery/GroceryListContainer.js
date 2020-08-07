import React from 'react';
import { connect } from 'react-redux';
import GroceryList from './GroceryList';
import { requestGrocery } from '../../redux/grocery/groceryAction';

/**
 * This class represents a container component for all grocery related component
 * @class
 * @param {object} props contains all the property
 */
const GroceryContainer = props => (
  <div>
    <GroceryList {...props} />
  </div>
    );

/**
 * This function gets data from the reducer.
 * @function mapStateToProps
 * @param {object} store contains all state information.
 * @returns {object} This function returns all state information.
 * @returns {array} groceryList : Contains an array of grocery object.
 
 * @returns {string} groceryErrorMsg: Contains error message to show to user.
 
 * @returns {number} totalCount : Contains total number of Grocery.
 * @returns {bool} loadingGrocery : Contains bool value whether Grocery list is
 * still loading.
 * @memberof GroceryContainer
*/
function mapStateToProps(store) {
  return {

    groceryList: store.grocery.groceryList,
    totalCount: store.grocery.totalCount,
    loadingGrocery: store.grocery.loadingGrocery,
    isGrocerylActionFailed: store.grocery.isGrocerylActionFailed,
    groceryErrorMsg:store.grocery.groceryErrorMsg,
  };
}

/**
 * This function dispatches actions.
 * @function  matchDispatchToProps
 * @returns {void}
 * @memberof GroceryContainer
*/
const matchDispatchToProps = dispatch => ({
  requestGrocery: (searchParameters, page, pageSize, sortBy, sortDir,
    isFirstLoad, isLoadMore, isUpdated) =>
    dispatch(requestGrocery(searchParameters, page, pageSize, sortBy, sortDir,
   isFirstLoad, isLoadMore, isUpdated))
});


export default connect(mapStateToProps, matchDispatchToProps)(GroceryContainer);
