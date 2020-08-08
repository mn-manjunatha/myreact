import React, { Component } from 'react';
import './GroceryList.css';
import {DEFAULT_PAGE, PAGE_SIZE} from '../../constants/constants';
import { NavLink } from 'react-router-dom';

class GroceryList extends Component {
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


  redirectToAddCoursePage=()=> {
    this.props.history.push("/grocery");
  }

  renderRows() {
     if(this.props.loadingGrocery)
     {
       return (<tr>
          <td colSpan="3">Loading...</td>
          </tr>
        )
     }
     else if (this.props.groceryList && this.props.groceryList.length > 0) {
      const groceryListInfo = this.props.groceryList.map((props, i) => ( 
        <tr key={props.id}>
                  <td><NavLink to={'/grocery/' + props.id}>{props.itemName}</NavLink> </td>
                  <td>{props.quantity}</td>
                  <td>${props.price}</td>
                </tr>
        ));

      return groceryListInfo;
     } else if(this.props.groceryList && this.props.groceryList.length === 0){

      return (
        <tr>
        <td colSpan="3">No record found</td>
        </tr>
      )
     }
  }

   /**
   * This function renders grocery list
   * @function loadGroceryList
   * @returns {element} This function returns react element.
   * @memberof GroceryList
  */
  loadGroceryList() {
    return (
    <div>
        <table className="grocery-list" >
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
        <button className="add-grocery" onClick={this.redirectToAddCoursePage}>Add Grocery</button>

        
        {this.loadGroceryList()}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </>
    );
  }
}
export default GroceryList;
