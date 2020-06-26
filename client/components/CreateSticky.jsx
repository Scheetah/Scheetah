import React from "react";
import { render } from "sass";

const CreateSticky = props =>  {
    
    {createInput, inputDone} = this.props;
    return (
        <div>
            <button onClick={inputDone} ></button>
            <input type="text" onChange={createInput}></input>
        </div>
    )
}

export default CreateSticky;
