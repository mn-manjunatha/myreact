import React, { Component } from 'react';
import './GraceryList.css';
import {DEFAULT_PAGE, PAGE_SIZE} from '../../constants/constants';

class GraceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: PAGE_SIZE,
      page: DEFAULT_PAGE,
      error: null,
      isLoaded: false,
      searchParameters: { name: '',  isInitialRequest: true },
    }
  }

  // npm install -g json-server
  // json-server --watch db.json --port 3001
  componentDidMount() {
    //this.state.searchParameters.isInitialRequest = true;

    this.props.requestGrocery(
      this.state.searchParameters,
      DEFAULT_PAGE,
      PAGE_SIZE,
      this.state.sortBy,
      this.state.sortDir,
      true,
      false,
      false);
  }

  renderRows() {
     if(this.props.loadingGracery)
     {
       return ( <td colspan="3">Loading...</td>)
     }
     else if (this.props.graceryList && this.props.graceryList.length > 0) {
      const graceryListInfo = this.props.graceryList.map((props, i) => ( 
        <tr key={props.id}>
                  <td>{props.itemName}</td>
                  <td>{props.quantity}</td>
                  <td>${props.price}</td>
                </tr>
        ));

      return graceryListInfo;
     } else if(this.props.graceryList && this.props.graceryList.length === 0){

      return (
        <td colspan="3">No record found</td>
      )
     }
  }

   /**
   * This function renders gracery list
   * @function loadGraceryList
   * @returns {element} This function returns react element.
   * @memberof GraceryList
  */
  loadGraceryList() {
    return (
    <div>
        {/* <div>{pageBusyIndicator}</div> */}
        <table className="gracery-list" >
          <thead>
              <tr>
                <th className="col-item-name">Item Name</th>
                <th className="col-quanty">Quantity</th>
                <th className="col-price">Price</th>
              </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
    </div>);
  }

  render() {
    return (
      <>
        <h2>Main Column Heading</h2>
        <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>

        {this.loadGraceryList()}


        {/* {Array.isArray(this.state.Items) && this.state.Items.length > 0 ?
          <table className="gracery-list" >
            <thead>
              <tr>
                <th className="col-item-name">Item Name</th>
                <th className="col-quanty">Quantity</th>
                <th className="col-price">Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Items.map((item) => (
                <tr key={item.id}>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          :
          <h3> No record found</h3>
        } */}

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </>
    );
  }
}
export default GraceryList;
