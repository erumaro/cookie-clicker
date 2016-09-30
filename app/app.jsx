/*
Credits:
JavaScript / React code by Tobias Årud
Vector rpg assets by: https://openclipart.org/user-detail/tzunghaor
Vector sword by: https://openclipart.org/user-detail/zeimusu
Background asset: https://www.pexels.com/photo/landscape-nature-mountain-green-27403/
*/

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            clicks: 0,
            knights: 0,
            //archers: 0,
            //mages: 0,
            knightCost: 10
            //archerCost: 25,
            //mageCost: 100
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
            clicks: this.state.clicks + this.state.knights,
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
      var knightCost = Math.floor(10 * Math.pow(1.1,this.state.knights));
      if(this.state.clicks >= knightCost){
        // this.state.helpers = this.state.helpers + 1;
        this.setState({
          knights: this.state.knights + 1,
          clicks: this.state.clicks - knightCost,
          cost: this.state.cost + knightCost,
        });
      }
      if(this.state.knights >= 10){
          var moreExpensive = knightCost * 10;
          this.setState({
              cost: this.state.cost + moreExpensive,
          });
      }
    }
    render(){
        return <div className="container">
            <h1>Kill the orcs!</h1>
            <div className="wrapper">
                <div className="enemy">
                    <img className="orc" src="images/orc.svg" onClick={(e) =>this.handleClick(e)}/>
                    <p>Orcs killed: {this.state.clicks}</p>
                </div>
                <div className="helpers">
                    <img className="knights" src="images/1303409161.svg" />
                    <p>Knights assisting you in combat: {this.state.knights}</p>
                    <button disabled={this.state.clicks < this.state.knightCost} onClick={(e) =>this.addHelper(e)}>Add knight (Costs: {this.state.knightCost} gold)</button>
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));