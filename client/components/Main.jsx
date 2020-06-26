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
    this.setTier = this.setTier.bind(this)
    this.reset = this.reset.bind(this)
  }

  setColumn(sticky, colName){
    const copy = this.state.storage
    copy.map((el) => {
      if (el.image === image){
        el.tier = tier
      }
    })
    this.setState(() => {
      return{
        storage: copy
      }
    })
  }

  render() {
    return (
      //where the board will render with all the sticky notes
      <div className='container'>
        <div className='header'></div>
        <h1>Hummingbird</h1>
        <div className='BoardBody'> </div>
        <Column name='To Do' />
        <Column name='In the Works' />
        <Column name='Revising' />
        <Column name='Complete' />
        <div className='Footer'></div>
        <CreateSticky />
        <button>Logout</button>
      </div>
    );
  }
}

export default Main;
