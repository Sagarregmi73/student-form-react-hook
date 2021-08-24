import React from 'react';
//import NoteDetail from  './notebook';
const NoteBook = (props) => {
   
    return (
     
        <div>
            {props.note.map((item)=>{
                return(
                    <div key={item.id}>
                        <div className="ui cards">
  <div className="card">
    <div className="content">
      <div className="header">{item.username}</div>
      <div className="meta">Email: {item.email}</div>
      <div className="meta">Age: {item.age}</div>
    </div>
    <button onClick={()=>{props.onRemove(item.id)}}>Remove</button> 
  </div>
  
  
</div>
</div>
                );
            })}

           
        </div>
        
    )
}

export default NoteBook;
