import React from 'react';
import { connect } from 'react-redux';
import GraceryList from './GraceryList';
import { requestGrocery } from '../../redux/gracery/graceryAction';

/**
 * This class represents a container component for all gracery related component
 * @class
 * @param {object} props contains all the property
 */
const GraceryContainer = props => (
  <div>
    <GraceryList {...props} />
  </div>
    );

/**
 * This function gets data from the reducer.
 * @function mapStateToProps
 * @param {object} store contains all state information.
 * @returns {object} This function returns all state information.
 * @returns {array} graceryList : Contains an array of gracery object.
 
 * @returns {string} graceryErrorMsg: Contains error message to show to user.
 
 * @returns {number} totalCount : Contains total number of Gracery.
 * @returns {bool} loadingGracery : Contains bool value whether Gracery list is
 * still loading.
 * @memberof GraceryContainer
*/
function mapStateToProps(store) {
  return {

    graceryList: store.gracery.graceryList,
    totalCount: store.gracery.totalCount,
    loadingGracery: store.gracery.loadingGracery,
    isGracerylActionFailed: store.gracery.isGracerylActionFailed,
    graceryErrorMsg:store.gracery.graceryErrorMsg,
  };
}

/**
 * This function dispatches actions.
 * @function  matchDispatchToProps
 * @returns {void}
 * @memberof GraceryContainer
*/
const matchDispatchToProps = dispatch => ({
  requestGrocery: (searchParameters, page, pageSize, sortBy, sortDir,
    isFirstLoad, isLoadMore, isUpdated) =>
    dispatch(requestGrocery(searchParameters, page, pageSize, sortBy, sortDir,
   isFirstLoad, isLoadMore, isUpdated))
});


export default connect(mapStateToProps, matchDispatchToProps)(GraceryContainer);
