import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Column from "./Column.jsx";
import CreateSticky from "./CreateSticky.jsx";

class Main extends Component {

  constructor(){
    super()
    this.state = {
      'storage': []
    }
    // this.setTier = this.setTier.bind(this)
    // this.reset = this.reset.bind(this)
  }

  // setColumn(sticky, colName){
  //   const copy = this.state.storage
  //   copy.map((el) => {
  //     if (el.image === image){
  //       el.tier = tier
  //     }
  //   })
  //   this.setState(() => {
  //     return{
  //       storage: copy
  //     }
  //   })
  // }

  render() {
    console.log(this.props.data);
    
    return (
      //where the board will render with all the sticky notes
      <div className='container'>
        
        <div className='header'>
          <img id='flip' src='../../assets/image/cheetah.svg' alt='logo'></img>
          <h1>Hummingbird</h1>
          <img src='../../assets/image/cheetah.svg' alt='logo'></img>
        </div>
        {/* <h1>This SHOULD SAY: {this.props.info.data.text}</h1> */}
        
        <div className='boardBody'> 
          <Column name='To Do' />
          <Column name='In the Works' />
          <Column name='Revising' />
          <Column name='Complete' />
        </div>

        <div className='footer'>
          <CreateSticky className='createSticky' />
          <button>Logout</button>
        </div>

      </div>
    );
  }
}

export default Main;
