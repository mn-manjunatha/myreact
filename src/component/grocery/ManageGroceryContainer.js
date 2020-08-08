import React from 'react';
import { connect } from 'react-redux';
import ManageGrocery from './ManageGrocery';
import { requestSaveGrocery ,requestGroceryById } from '../../redux/grocery/groceryAction';

/**
 * This class represents a container component for all grocery related component
 * @class
 * @param {object} props contains all the property
 */
const ManageGroceryContainer = props => (
  <div>
    <ManageGrocery {...props} />
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
    saveSuccess:store.grocery.saveSuccess,
    showBusyIndicator:store.grocery.showBusyIndicator,
    groceryErrorMsg:store.grocery.groceryErrorMsg,
    grocery:store.grocery.grocery,
  };
}

/**
 * This function dispatches actions.
 * @function  matchDispatchToProps
 * @returns {void}
 * @memberof GroceryContainer
*/

const matchDispatchToProps = dispatch => ({
    requestSaveGrocery: (saveObject) =>
      dispatch(requestSaveGrocery(saveObject)), 

    requestGroceryById: id =>
      dispatch(requestGroceryById(id)) 
     });  

export default connect(mapStateToProps, matchDispatchToProps)(ManageGroceryContainer);
