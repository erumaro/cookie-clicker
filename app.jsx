import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            clicks: 0,
            helpers: 0,
            cost: 10,
            seconds: 0
        };
    }
    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    tick(){
        this.setState({
            clicks: this.state.clicks + this.state.helpers,
        });
    }
    handleClick(e){
		e.preventDefault();
        this.setState({
            clicks: this.state.clicks + 1,
        });
    }
    addHelper(e){
      e.preventDefault();
      var helperCost = Math.floor(10 * Math.pow(1.1,this.state.helpers));
      if(this.state.clicks >= helperCost){
        // this.state.helpers = this.state.helpers + 1;
        this.setState({
          helpers: this.state.helpers + 1,
          clicks: this.state.clicks - helperCost,
          cost: this.state.cost + helperCost,
        });
      }
      //var nextCost = Math.floor(10 * Math.pow(1.1, helperCost));
    }
    render(){
        return <div className="container">
		  <button onClick={(e) =>this.handleClick(e)}>Click</button>
		  <p>{this.state.clicks}</p>
          <button onClick={(e) =>this.addHelper(e)}>Add helper (Costs: {this.state.cost})</button>
          <p>{this.state.helpers}</p>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));