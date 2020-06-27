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
      <div  >
        <h1>{props.column}</h1>
        <Box className='stickyNote' ref={drop} p={2}><h1 className='test' > {props.children}</h1></Box>
        {/* <Box className='box' ref={drop} style={{backgroundColor: isOver ? "#ABABAB" : '#f5f5f1',height:700, width: 300}}   w="30%" p={2} color="black"><h1 className='test'> {props.children}</h1>
        </Box> */}

      </div>
    </div>
  );
}

export default Column;