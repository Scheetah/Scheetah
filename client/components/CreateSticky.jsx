import React, { useState } from "react";
import { render } from "react-dom";
// import { render } from "sass";

const CreateSticky = props => {
  const [stickyNote, setStickyNote] = useState("");

  const handleChange = e => {
    console.log(e.target.value, 'changed');
    setStickyNote(e.target.value);
    console.log(`stickyNote ${stickyNote}`);
  };
  
  const onClick = e => {
    
    console.log(stickyNote);

    fetch(`./createNote`,{
          method: 'POST', 
          body: JSON.stringify({username:'user1' , text: 'hello', column: 'To Do'}),
          headers: {
              'Content-Type': 'application/json',
          },
          }).then((res) => {
            return res.json()
          }).then((data)=> {
            console.log(data);
            return data;
          }).catch(err => console.log(`createNote error ${err}`));
        };
        
  return (
    
    
    <div>
      <div
        style={{
          border: "solid 1px black",
          height: "20px",
          width: "200px",
          backgroundColor: "yellow",
        }}
      >
        <input type='text' style={{ border: "none", width: "50%" }} onChange={handleChange}></input>
        <button onClick={onClick}>submit</button>
      </div>
    </div>
  );
};

export default CreateSticky;
