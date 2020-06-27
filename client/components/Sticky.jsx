import React, { Component } from "react";
import { DndProvider, useDrag, useDrop } from 'react-dnd';

// BOX === STICKY

const ItemTypes = {
  STICKY:'sticky',
}

const Sticky = (props) => {
  const [{isDragging}, drag] = useDrag({
    item: {
      type: ItemTypes.STICKY,
      text: props.text
    }, 
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult()
    //   if (item && dropResult) {
    //     alert(`You dropped ${item.name} into ${dropResult.name}!`)
    //   },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div className='sticky'   ref={drag} style={{opacity: isDragging ? '0.5' : '1', border: "solid", height: '150px', width: '200px' }}>
        <p>{props.text}</p>
  </div>
  ) 
}

export default Sticky;