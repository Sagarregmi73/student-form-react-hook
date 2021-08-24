import React,{useState} from 'react';
import NoteBook from './notebook';
const Form=()=>{
     const [person,setPerson]=useState({username:'',email:'',age:''});
     const [people,setPeople]=useState([]);


     const handleChange=(e)=>{
       const name=e.target.name;
       const value=e.target.value;
       setPerson({ ...person, [name]:value});
             };

     const handleSubmit=(e)=>{
e.preventDefault();
if(person.username && person.email && person.age){
const newPerson={...person, id: new Date().getTime().toString()};
setPeople([...people, newPerson]);
setPerson({username:'',email:'',age:''})
};

     }

     const handleRemove=(id)=>{
        setPeople(items=>{
            return items.filter((item)=>{
                return item.id !== id;
            });
        });
     }
    return(

    <div className="ui container">
        <h1>Student Form Book</h1>
   
   <form className="ui form" onSubmit={handleSubmit}>
  <div className="field">
    <label>Name</label>
    <input type="text" name="username" id="username" onChange={handleChange} value={person.username} />
      
  </div>
  <div className="field">
    <label>Email</label>
    <input type="email" name="email" id="email" onChange={handleChange} value={person.email}  />
       
  </div>
  <div className="field">
    <label>Age</label>
    <input type="text" name="age" id="age" onChange={handleChange} value={person.age}  />
           
  </div>
  <button className="ui button" type="submit">Submit</button>
</form>
<hr />
{people.length >= 1 ? <h3>Biography</h3>:<h3>No Data Listed!( please Insert Data)</h3>}

<br />

<NoteBook note={people} onRemove={handleRemove}  />




    </div>

    );
}

export default Form;