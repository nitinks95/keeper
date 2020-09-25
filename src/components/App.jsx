import React, { useState } from "react";
import ListItem from "./ListeItem";

function App() {
  const [data, setData] = useState({
    input: "",
    list: []
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setData(prevVal => {
      return {
        ...prevVal,
        [name]: value
      }
    });
  }

  function handleClick() {
    setData(prevVal => {
      return {
        input: "",
        list: [...prevVal.list, prevVal.input]
      }
    });
  }

  function deleteItem(id) {
    console.log(id);
    setData(prevVal => {
      return {
        ...prevVal,
        list: prevVal.list.filter((item, index) => {
          return index !== id;
        })
      }
    })
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="input" onChange={handleChange} value={data.input} />
        <button onClick={handleClick} >
          <span>+</span>
        </button>
      </div>
      <div>
        <ul>
          {
            data.list.map((item, index) => {
              return <ListItem key={index} id={index} item={item} onStrike={deleteItem}/>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
