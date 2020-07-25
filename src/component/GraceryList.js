import React, { Component } from 'react';
import './GraceryList.css';

class GraceryList extends Component {
    render() {
        return (
            <>
              <h2>Main Column Heading</h2>
              <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
        
              <table className="gracery-list" >
                <thead>
                  <tr>
                    <th className="col-item-name">Item Name</th>
                    <th className="col-quanty">Quantity</th>
                    <th className="col-price">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Oranges</td>
                    <td>5</td>
                    <td>$3.00</td>
                  </tr>
                  <tr>
                    <td>Celery</td>
                    <td>2</td>
                    <td>$2.50</td>
                  </tr>
                  <tr>
                    <td>Garlic</td>
                    <td>2</td>
                    <td>$1.90</td>
                  </tr>
                  <tr>
                    <td>Bananas</td>
                    <td>6</td>
                    <td>$2.99</td>
                  </tr>
                  <tr>
                    <td>Onions</td>
                    <td>4</td>
                    <td>$3.00</td>
                  </tr>
                  <tr>
                    <td>Very long awkwardly named yet still delicious item here</td>
                    <td>4</td>
                    <td>$3.00</td>
                  </tr>
                  <tr>
                    <td>Carrots</td>
                    <td>12</td>
                    <td>$2.99</td>
                  </tr>
                </tbody>
              </table>
        
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
            </>
        );
    }
}
export default GraceryList;