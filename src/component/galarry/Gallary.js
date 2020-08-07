import React, { Component } from 'react';
import './Gallary.css';
class Gallary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false 
        };
    }

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
      };

    render() {
        return (
            <div className="Gallary">
                <div className="box"><img 
                src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt=""
                    onClick={this.handleShowDialog}
                 /></div>
                <div className="box"><img src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""/></div>
                <div className="box"><img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""/></div>
                <div className="box"><img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""/></div>
                <div className="box"><img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""/></div>
                <div className="box"><img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""/></div>
                <div className="box"><img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""/></div>
                <div className="box"><img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="" /></div>
                <div className="box"><img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""/></div>

                {this.state.isOpen && (
            <dialog
                className="dialog"
                style={{ position: "absolute" }}
                open
                onClick={this.handleShowDialog}
            >
                <button className="buttonNavigateLeft">Left</button>
                    <img className="dialogImage" src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""
                    onClick={this.handleShowDialog}/>
                <button className="buttonNavigateRight">Right</button>
            </dialog>
            )}
            </div>
        );
    }
}

export default Gallary;