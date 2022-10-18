import { useState } from "react";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

import buildPage from "./Comp/buildPage";

export default function Editor() {

  const [circleName, setCircleName] = useState("")
  const [textName, setTextName] = useState("")
  const [editableItems, setEditableItems] = useState([]);

  //Gets a JSON file from backend server
  const query = useQuery(['example'], async () => {
    const response = await fetch('http://localhost:3001/')
    const data = await response.json()
    setEditableItems([...data.elements])
    return data;
  })

  //Displays to console whether or not the query has loaded
  console.log(query.status)
  console.log(query)

  //Send a placeholder output to the main App() until the query has loaded
  if (query.status === "loading") {
    return <p className="loadin-text">Still loading...</p>
  }

  //Used when adding shape
  const circleHandleSubmit = (e) => {
    e.preventDefault();

    setEditableItems([...editableItems, {"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":circleName}]);
  }

    //Used to set text when adding shape
  const circleHandleInput = (e) => {
    setCircleName(e.target.value);
  }

  const textHandleSubmit = (e) => {
    e.preventDefault();

    setEditableItems([...editableItems, {"elementType":"textBlock","width":23.125,"height":4.125,"top":19,"left":10.7875,"unit":"rem","initialText":textName,"initialFontColor":"#96ffdc","initialFontSize":0.59,"initialFontName":"andada-pro","initialFontStyle":"twin-color-text"}]);
  }

  const textHandleInput = (e) => {
    setTextName(e.target.value);
  }

  return (
    // buildPage(query, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput)
    <div>
      aosdgkosdagkosdo
    </div>
  );
  }  
  // <div>
  //   {JSON.stringify(query)}
  // </div>