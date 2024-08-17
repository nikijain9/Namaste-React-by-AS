import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        } 
    }

    render() {
        const {component, name, occupation, location} = this.props;
        const {count} = this.state;

        return (
            <div className="user-info">
                <h1>Component : Namaste React {component}</h1>
                <h2>Creator: {name}</h2>
                <h2>Occupation: {occupation}</h2>
                <h2>Location: {location}</h2>
                <h3>Count: {count}</h3>
                <button 
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                > + 
                </button>
                <button 
                    onClick={() => {
                        this.setState({
                            count: this.state.count - 1
                        })
                }}
                > - 
                </button>
            </div>
        )
    }
}

export default UserClass;