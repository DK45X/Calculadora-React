import React from 'react';

const Result = ({num, handleChange}) => {  

  return(    
    <div className='result'>
      <div id="output">
         <input value={num} onChange={handleChange}></input>
      </div>
    </div>      
  )
}

export default Result;