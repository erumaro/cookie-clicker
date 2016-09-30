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
            clicks: 0, // click count
            // Number of each helper/soldier
            knights: 0,
            archers: 0,
            mages: 0,
            // Initial cost of each helper/soldier
            knightCost: 10,
            archerCost: 25,
            mageCost: 100
        };
    }
    componentDidMount(){
        // Interval runs every other second (aka 2 sec)
        this.interval = setInterval(this.tick.bind(this), 2000);
    }
    componentWillUnmount(){
        // Clears interval
        clearInterval(this.interval);
    }
    tick(){
        // Archers and mages do more damage to the orcs (5 times and 20 times the normal click and knights)
        var archerDmg = this.state.archers * 5;
        var mageDmg = this.state.mages * 20;
        // Sets the state for the intervaled "clicks". I've set it so the helpers combines.
        this.setState({
            clicks: this.state.clicks + (this.state.knights+archerDmg+mageDmg),
        });
    }
    // Click handler, each click adds one.
    handleClick(e){
		e.preventDefault();
        this.setState({
            clicks: this.state.clicks + 1,
        });
    }
    // The three below adds a new soldier if the amount clicks have reached the required level. Cost doubles each buy.
    addKnights(e){
      e.preventDefault();
      if(this.state.clicks >= this.state.knightCost){
        this.setState({
          knights: this.state.knights + 1,
          clicks: this.state.clicks - this.state.knightCost,
          knightCost: this.state.knightCost + this.state.knightCost,
        });
      }
    }
    addArcher(e){
      e.preventDefault();
      if(this.state.clicks >= this.state.archerCost){
        this.setState({
          archers: this.state.archers + 1,
          clicks: this.state.clicks - this.state.archerCost,
          archerCost: this.state.archerCost + this.state.archerCost,
        });
      }
    }
    addMage(e){
      e.preventDefault();
      if(this.state.clicks >= this.state.mageCost){
        this.setState({
          mages: this.state.mages + 1,
          clicks: this.state.clicks - this.state.mageCost,
          mageCost: this.state.mageCost + this.state.mageCost,
        });
      }
    }
    // Renders the visual area. If you can't afford the soldiers the button is disabled until you got enough gold.
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
                    <img className="archer" src="images/archer.svg" />
                    <img className="mage" src="images/1320132774.svg" />
                    <p>Soldiers assisting you in combat:</p>
                    <ul>
                        <li>Knights: {this.state.knights}</li>
                        <li>Archers: {this.state.archers}</li>
                        <li>Mages: {this.state.mages}</li>
                    </ul>
                    <button disabled={this.state.clicks < this.state.knightCost} onClick={(e) =>this.addKnights(e)}>Add knight (Costs: {this.state.knightCost} gold)</button>
                    <button disabled={this.state.clicks < this.state.archerCost} onClick={(e) =>this.addArcher(e)}>Add archer (Costs: {this.state.archerCost} gold)</button>
                    <button disabled={this.state.clicks < this.state.mageCost} onClick={(e) =>this.addMage(e)}>Add mage (Costs: {this.state.mageCost} gold)</button>
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));