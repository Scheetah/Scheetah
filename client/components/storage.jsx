import { DndProvider, useDrag, useDrop } from 'react-dnd';
import React, { Component } from 'react';


const ItemTypes = {
  STICKY:'sticky',
}

const Storage = props => {


    // fetch(`./${this.props.username}`,{
    //         method: 'GET', 
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         }).then((res) => {
    //           // console.log(data);
    //           return res.json()
    //         }).then((data)=> {
                
    //         })

  // const { setTier } = useContext(CardContext)
  const [{ isOver }, drop, drop1] = useDrop({
    accept: ItemTypes.STICKY,
    drop: (item, monitor) => 

    props.setColumn(item.text,  props.column),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }) 

  return (
    <div className='storage'>
        <div ref={drop} style={{ height: '200px', width: '200px', border: 'solid 1px', backgroundColor: 'grey'}}>
        {props.children}
        </div>
      {/* <Box  ref={drop} style={{backgroundColor: isOver ? "#ABABAB" : '#f5f5f1', borderRadius: 20, height: 300}}  w="100%" p={0} color="black"><h1 className='tests'>{props.children}</h1></Box> */}
    </div>
  )
}

export default Storage;