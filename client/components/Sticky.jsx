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
    <span className='sticky' ref={drag} style={{opacity: isDragging ? '0.5' : '1' }} >
    <p>{props.text}</p>
  </span>
  )
}

export default Sticky;