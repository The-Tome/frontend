//import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import {
  EditableBoard,
  TextEditorBlock,
  StyleEditorBlock
} from "react-web-editor";
import { useState } from "react";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

export default function Editor() {

  // const [elements, setElements] = useState([]);
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

  //Builds a StyleEditorBlock from information stored in the queried JSON file
  function buildShape (i, parentStyle) {
    return (
      <StyleEditorBlock key={(editableItems[i].elementId)}  
        width={(editableItems[i].width)}
        height={(editableItems[i].height)}
        left={(editableItems[i].left)}
        top={(editableItems[i].top)}
        unit={(editableItems[i].unit)}
        parentStyle={parentStyle}
      >        
        <div className={(editableItems[i].className)}>{(editableItems[i].text)}</div>
      </StyleEditorBlock>
    )
  }

  //Builds a TextEditorBlock from information stored in the queried JSON file
  function buildTextBlock (i, parentStyle) {
    return (
        <TextEditorBlock key={(editableItems[i].elementId)}
          width={(editableItems[i].width)}
          height={(editableItems[i].height)}
          top={(editableItems[i].top)}
          left={(editableItems[i].left)}
          parentStyle={parentStyle}
          unit={(editableItems[i].unit)}
          initialText={(editableItems[i].initialText)}
          initialFontColor={(editableItems[i].initialFontColor)}
          initialFontSize={(editableItems[i].initialFontSize)}
          initialFontName={(editableItems[i].initialFontName)}
          initialFontStyle={(editableItems[i].initialFontStyle)}
        />
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setEditableItems([...editableItems, {"elementId":1,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":name}]);
  }

  const handleInput = (e) => {
    setName(e.target.value);
  }

  //Builds EditableBoard, including elements like StyleEditorBlock and TextEditorBlock, from queried JSON file
  function buildBoard (i) {
    //Sets boundries so that elements can't move off their boards
    var parentStyle = {width: (query?.data?.boards[i].width),height: (query?.data?.boards[i].height)}

    return (
      <EditableBoard        
        unit={(query?.data?.boards[i].unit)}
        width={parentStyle.width}
        height={parentStyle.height}
        left={(query?.data?.boards[i].left)}
        top={(query?.data?.boards[i].top)}
        backgroundColor={(query?.data?.boards[i].backgroundColor)}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Label:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleInput} required/>
          <button type="submit">Add note circle</button>
        </form>
        {
          console.log("EDITABLEITEMS", editableItems)
        }
        {
          editableItems?.map((element, key) => (
            <div key={key}>
              {
              element.elementType === "shape"
              ?
              buildShape(key, parentStyle)
              :
              buildTextBlock(key, parentStyle)
              }
            </div>
          ))
        }
      </EditableBoard>
    )
  }

  function buildPage () {
    const boards = []

    for (let boardInx = 0; boardInx < (query?.data?.boards).length; boardInx++){
      boards.push(buildBoard(boardInx))
    }

    return (
      <div id="Full Page">
        {boards.at(0)}
        <p>The middle bit</p>
        {boards.at(1)}
      </div>
    )
  }

  return (
    buildPage()
    );
  }  