import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import node from './Ellipse.png';
import node1 from './node1.png';
import node2 from './node2.png';
import node3 from './node3.png';
import node4 from './node4.png';
import node5 from './node5.png';
import node1red from './node1red.png';
import node2red from './node2red.png';
import node3red from './node3red.png';
import node4red from './node4red.png';
import node5red from './node5red.png';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      count: 0
    };
  }

  componentDidUpdate(prevState){
    if ( prevState.count != this.state.count ) {
      if ( this.state.count == 2 && (this.state.three == false)){
        this.setState({three: true, count: this.state.count+1});
      }

      if ( this.state.count < 0 ){
        this.setState({count:0});
      }

      if (this.state.count == 2){

      } else if ( this.state.count == 3 ){
        if ( this.state.one == true && (this.state.two == true)){
          document.getElementById('ruleOne').style.color = "#F50057";
          document.getElementById('ruleTwo').style.color = "#FFEA02";
          document.getElementById('ruleThree').style.color = "#FFEA02";
        } else if ( this.state.one == true && (this.state.four == true)){
          document.getElementById('ruleOne').style.color = "#FFEA02";
          document.getElementById('ruleTwo').style.color = "#FFEA02";
          document.getElementById('ruleThree').style.color = "#FFEA02";
        } else if ( this.state.one == true && (this.state.five == true)){
          document.getElementById('ruleOne').style.color = "#F50057";
          document.getElementById('ruleTwo').style.color = "#FFEA02";
          document.getElementById('ruleThree').style.color = "#FFEA02";
        } else if ( this.state.two == true && (this.state.four == true)){
          document.getElementById('ruleOne').style.color = "#F50057";
          document.getElementById('ruleTwo').style.color = "#FFEA02";
          document.getElementById('ruleThree').style.color = "#FFEA02";
        } else if ( this.state.two == true && (this.state.five == true)){
          document.getElementById('ruleOne').style.color = "#FFEA02";
          document.getElementById('ruleTwo').style.color = "#F50057";
          document.getElementById('ruleThree').style.color = "#FFEA02";
        } else if ( this.state.four == true && (this.state.five == true)){
          document.getElementById('ruleOne').style.color = "#F50057";
          document.getElementById('ruleTwo').style.color = "#FFEA02";
          document.getElementById('ruleThree').style.color = "#FFEA02";
        }
      } else if ( this.state.count < 2 ){
        document.getElementById('ruleOne').style.color = "#FFEA02";
        document.getElementById('ruleTwo').style.color = "#FFEA02";
        document.getElementById('ruleThree').style.color = "#FFEA02";
      }
    }
  }

  onClick = (node) => {
    if ( node == 1 && ((this.state.count < 2) || (this.state.one == true)) ){
      if (this.state.one == true ){
        this.setState({one: false, three: false, count: this.state.count-2});
      } else {
        this.setState({one: true, count: this.state.count+1});
      }

    } else if ( node == 2 && ((this.state.count < 2)||(this.state.two == true))){
      if (this.state.two == true ){
        this.setState({two: false, three: false, count: this.state.count-2});
      } else {
        this.setState({two: true, count: this.state.count+1});
      }
    } else if ( node == 3 && ((this.state.count < 2)||(this.state.three == true))){
      if (this.state.three == true ){
        this.setState({three: false, count: this.state.count-1});
      } else {
        this.setState({three: true, count: this.state.count+1});
      }
    } else if ( node == 4 && ((this.state.count < 2)||(this.state.four == true))){
      if (this.state.four == true ){
        this.setState({four: false, three: false, count: this.state.count-2});
      } else {
        this.setState({four: true, count: this.state.count+1});
      }
    } else if ( node == 5 && ((this.state.count < 2)||(this.state.five == true))){
      if (this.state.five == true ){
        this.setState({five: false, three: false, count: this.state.count-2});
      } else {
        this.setState({five: true, count: this.state.count+1});
      }
    }
  }

  render() {
  console.log(this.state.count)
    return (
      <div className="bg">
        <div className="headerGroup">
          <p className="header">D-SEPARATION</p>
          <p className="description">A path pi is d-seperated if there exists some node z in pi for which one of the following three conditions holds:</p>
          <ol className="rules">
            <li id="ruleOne">a -&gt; z -&gt; b  where z in E (Causal Chain)</li>
            <li id="ruleTwo">a &lt;- z -&gt; b  where z in E (Common Explaination)</li>
            <li id="ruleThree">a -&gt; z &lt;- b  where z and descendants of z are not in E (No common effect)</li>
          </ol>

          <div className="graph">
            <img className="nodes" id="nodeOne" src={this.state.one? node1red: node1} onClick={() => this.onClick(1)}></img>
            <img className="nodes" id="nodeTwo" src={this.state.two? node2red: node2} onClick={() => this.onClick(2)}></img>
          </div>

          <div className="graph">
            <img className="nodes" id="nodeThree" src={this.state.three? node5red: node5} onClick={() => this.onClick(3)}></img>
          </div>

          <div className="graph">
            <img className="nodes" id="nodeFour" src={this.state.four? node4red: node4} onClick={() => this.onClick(4)}></img>
            <img className="nodes" id="nodeFive" src={this.state.five? node3red: node3} onClick={() => this.onClick(5)}></img>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
