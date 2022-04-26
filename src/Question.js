import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({info, title}) => {
  console.log()
  const [show, setShow] = useState(false);
  const moreInfo = () => {
      show? setShow(false) : setShow(true)
  }
  return(
    <article className='question'>
      <header>
        <h3>{title}</h3>
        <button className='btn' onClick={moreInfo}>
          {show? <AiOutlineMinus /> : <AiOutlinePlus /> }
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>  
  )
};

export default Question;
