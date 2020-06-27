import React, { Component } from "react";
import { render } from "react-dom";
import Sticky from "./Sticky.jsx";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import  { Box } from '@chakra-ui/core';


const ItemTypes = {
  STICKY:'sticky'
}

const Column = (props) => {

  const [{ isOver }, drop, drop1] = useDrop({
    accept: ItemTypes.STICKY,
    drop: (item, monitor) => 

    props.setColumn(item.text,props.column),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }) 

  return (
    <div>
      <div  style={{border: 'solid'}} className='box'>
        <h1>{props.column}</h1>
        <Box className='box' ref={drop}   w="30%" p={2} color="black"><h1 className='test'> {props.children}</h1>
        </Box>

      </div>
    </div>
  );
}

export default Column;