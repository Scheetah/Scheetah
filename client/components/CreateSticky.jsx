import React, { useState } from "react";
import { render } from "react-dom";
// import { render } from "sass";

const CreateSticky = props => {
  // {createInput, inputDone} = this.props;
  const [stickyNote, setStickyNote] = useState("");

  const handleChange = e => {
    useState(e.target.value);
  };

  const onClick = e => {
    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ stickyNote }),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(`remove data ${data}`);
      })
      .catch(err => console.log(`remove fetch error ${err}`));
  };

  return (
    <div>
      {/* <button></button> */}
      <div
        style={{
          border: "solid 1px black",
          height: "200px",
          width: "200px",
          backgroundColor: "yellow",
        }}
      >
        <input type='text' style={{ border: "none", width: "50%" }} onChange={handleChange}></input>
        <button>submit</button>
      </div>
    </div>
  );
};

export default CreateSticky;
