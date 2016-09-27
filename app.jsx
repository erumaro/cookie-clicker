import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            clicks: 0
        };
    }
    handleClick(e) {
		e.preventDefault();
        this.setState({
            clicks: this.state.clicks + 1,
        });
    }
    render(){
        return <div className="container">
		   <button className="btn btn-primary" onClick={(e) =>this.handleClick(e)}>Skicka</button>
		   <p>{this.state.clicks}</p>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));