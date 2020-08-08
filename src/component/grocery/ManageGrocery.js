import React, { Component } from 'react';
import './ManageGrocery.css';
import { Redirect } from 'react-router';

class ManageGrocery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            quantity: '',
            price: '',
            id: ''
        }
    }

    //https://codesandbox.io/s/react-getderivedstatefromprops-example-rbgny?file=/src/index.js:119-275
    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (!nextProps.grocery || nextProps.grocery.id === prevState.id) {
            return null;
        } else {
            return nextProps.grocery;
            // return {
            //     itemName: nextProps.grocery.itemName,
            //     quantity: nextProps.grocery.quantity,
            //     price: nextProps.grocery.price,
            //     id: nextProps.grocery.id
            // }
        }
    }

    updateInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (event) => {
        this.props.requestSaveGrocery(this.state)
        event.preventDefault();
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            this.props.requestGroceryById(this.props.match.params.id);
        }
    }

    render() {
        const { from } = { from: { pathname: '/groceries' } }
        const isSaved = this.props.saveSuccess;
//        console.log('render', 'render');

        if (isSaved) {
            return <Redirect to={from} />
        }

        let submitButtonString = 'Save';

        if (this.state.id) {
            submitButtonString = this.props && this.props.showBusyIndicator ? 'Updating...' : 'Update'

        } else {
            submitButtonString = this.props && this.props.showBusyIndicator ? 'Saving...' : 'Save'
        }

        return (
            <div className="formMain">
                <h2>Main Column Heading</h2>
                <p>This is the main area (or column). Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="itemName" >Item Name</label>
                    <input type="text" name="itemName" id="itemName" placeholder="Item Name" onChange={this.updateInput} value={this.state.itemName} />
                    {/* {error && <div className="alert alert-danger">{error}</div>}  */}
                    <label htmlFor="quantity" >Quantity</label>
                    <input type="number" name="quantity" id="quantity" placeholder="Quantity" onChange={this.updateInput} value={this.state.quantity} />
                    <label htmlFor="price" >Price</label>
                    <input type="number" name="price" id="price" placeholder="Price" onChange={this.updateInput} value={this.state.price} />
                    <input type="submit" value={submitButtonString} />
                </form>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    }
}

export default ManageGrocery;