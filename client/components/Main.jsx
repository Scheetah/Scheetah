import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Column from "./Column.jsx";
import Sticky from './Sticky.jsx';
import CreateSticky from './CreateSticky.jsx';
import Storage from './storage.jsx';

class Main extends Component {

  constructor(){
    super()
    this.state = {
      data: []
      // number: {}
    }
    this.setColumn = this.setColumn.bind(this)
    this.reset = this.reset.bind(this)
    this.fetchfiles = this.fetchfiles.bind(this)
    this.saveData = this.saveData.bind(this)
  }

  // componentDidMount(){
  //   console.log(this.props.username)
  // }

  componentDidUpdate() {
    fetch(`./${this.props.username}`)
      .then((res) => {
        return res.json()
      })
      .then((data)=> {
        if (this.state.data.length !== data.data.length){
          return this.setState({
            data: data.data
          })
        }
      })
  }

  saveData() {
    fetch('/save', {
      method: 'POST', // or 'PUT'
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({ username: this.props.username, data: this.state.data }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      return this.setState({
        data: data.data,
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }



  fetchfiles(){
    fetch(`./${this.props.username}`,{
          method: 'GET', 
          headers: {
              'Content-Type': 'application/json',
          },
          }).then((res) => {
            // console.log(data);
            return res.json()
          }).then((data)=> {
            console.log('this is the res data:  *****', data.data)
            console.log(this.state.data, data.data )
            // if (this.state.data !== data.data){
            //   this.setState({
            //     data: data.data
            //     // number: data
            //   })
            // }
             this.setState({ 
              data: data.data
            })
          })
    
      //       // .then(res => {
      //       //   return res.json();
      //       // })
      //       // .then(data => {
      //         // { column: 'todo', text: 'yerrrr'}
      //       //   console.log(`data ${data}`);
      //       // })
      //       // .catch(err => console.log(`fetch error ${err}`));
   
  }

  addSticky(){
  //  fetch('/createNote')

   fetch('/createNote', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  setColumn(text, column) {
    const copyOfData = this.state.data;
    copyOfData.map((el) => {
      if (el.text === text){
        el.column = column;
      }
    })
    this.setState(() => {
      return{
        data: copyOfData
      }
    })
  }

  reset() {
    const newCopy = this.state.data;
    newCopy.map((copy) => {
      copy.column = 'null'
    })
    this.setState(() => {
      return {
        data: newCopy
      }
    })
  }

  render() {
   console.log(this.state.data,'state!')
   
    return (
      //where the board will render with all the sticky notes
      <div className='columns-container'>
      <button onClick={this.fetchfiles} >Loading files</button>
      {/* <button  onClick={this.saveData}>Saving Progress</button> */}
        <div className='header'>
          <img  src='https://i.ibb.co/4RL4S8S/Screen-Shot-2020-06-26-at-5-02-09-PM-2.png' alt='logo'></img>
          {/* <h1>Cheetah</h1>
          <img src='../../assets/image/cheetah.svg' alt='logo'></img> */}
        </div>
        {/* <h1>This SHOULD SAY: {this.props.info.data.text}</h1> */}
        <div className='boardBody'> 
          <Column column='To Do' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'To Do').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Column>
          <Column column='In The Works' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'In The Works').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Column>
          <Column column='Revising' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'Revising').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Column>
          <Column column='Complete' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'Complete').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Column>

        </div>
        <div className='Footer'>
          <Storage column='Storage' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'Storage').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Storage>
          <CreateSticky username={this.props.username} addSticky={this.addSticky} />
          {/* {console.log(this.props.username)} */}
          
        </div>
      </div>
    );
  }
}

export default Main;
