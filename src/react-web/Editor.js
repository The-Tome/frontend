import { useState } from "react";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

import buildPage from "./Comp/buildPage";

export default function Editor() {

  const [name, setName] = useState("")
  const [editableItems, setEditableItems] = useState([]);

  //Gets a JSON file from backend server
  const query = useQuery(['example'], async () => {
    const response = await fetch('http://localhost:3001/')
    const data = await response.json()
    setEditableItems([...data.elements])
    console.log(data);
    return data;
  })

  //Displays to console whether or not the query has loaded
  console.log(query.status)

  //Send a placeholder output to the main App() until the query has loaded
  if (query.status === "loading") {
    return <p className="loadin-text">Still loading...</p>
  }

  function saveElements () {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editableItems)
    };
    fetch('http://localhost:3001/save', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));

    console.log('did it')
    setTimeout(saveElements, 5000)
  }
  setTimeout(saveElements(),500);

  //Used when adding shape
  const handleSubmit = (e) => {
    e.preventDefault();

    setEditableItems([...editableItems, {"elementId":1,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":name}]);
  }

    //Used to set text when adding shape
  const handleInput = (e) => {
    setName(e.target.value);
  }

  return (
    buildPage(query, name, editableItems, handleSubmit, handleInput)
    );
} 