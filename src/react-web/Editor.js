import { useState } from "react";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

import buildPage from "./Comp/buildPage";

import {sendData} from "./axios"

export default function Editor() {
  const [name, setName] = useState("")
  const [editableItems, setEditableItems] = useState([]);

  //Gets a JSON file from backend server
  const query = useQuery(['example'], async () => {
    const response = await fetch('http://localhost:3001/')
    const data = await response.json()
    //console.log(data);
    return data;
  })

  //Displays to console whether or not the query has loaded
  //console.log(query.status)

  //Send a placeholder output to the main App() until the query has loaded
  //Updates EditableItems only once
  if (query.status === "loading") {
    return <p className="loadin-text">Still loading...</p>
  } else if (editableItems.length === 0){
    setEditableItems([...query.data.elements])  
  }

  // const updateElements = () => {
  //   var list = editableItems
  //   var item1 = JSON.stringify(list.at(0))
  //   console.log("This is the first item " + item1)
  // }

  // const updateElements = () => {
  //   const newState = editableItems.map(obj => {
  //     if (obj.elementId === 1) {
  //       return {...obj, left: 1}
  //     }
  //     return obj
  //   })
  //   setEditableItems(newState)
  // }

  //Used when adding shape
  const circleHandleSubmit = (e) => {
    e.preventDefault();

    setEditableItems([...editableItems, {"elementId":1,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":name}]);
    sendData(editableItems)
  }

    //Used to set text when adding shape
  const circleHandleInput = (e) => {
    setName(e.target.value);
  }

  const textHandleSubmit = (e) => {
    e.preventDefault();

    setEditableItems([...editableItems, {"elementId":3,"elementType":"textBlock","width":23.125,"height":4.125,"top":19,"left":10.7875,"unit":"rem","initialText":"Hello Fellows","initialFontColor":"#96ffdc","initialFontSize":0.59,"initialFontName":"andada-pro","initialFontStyle":"twin-color-text"}]);
    sendData(editableItems)
  }

  const textHandleInput = (e) => {
    setName(e.target.value);
  }

  return (
    buildPage(query, name, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput)
    );
  
} 