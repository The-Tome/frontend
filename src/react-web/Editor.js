//import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import {
    EditableBoard,
    TextEditorBlock,
    StyleEditorBlock
  } from "react-web-editor";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

export default function Editor() {
  const parentStyle = { width: 100, height: 100 };

  //Gets a JSON file from backend server
  const query = useQuery(['example'], async () => {
    const response = await fetch('http://localhost:3001/')
    const data = await response.json()
    console.log(data)
    return data
  })

  //Displays to console whether or not the query has loaded
  console.log(query.status)

  //Send a placeholder output to the main App() until the query has loaded
  if (query.status === "loading") {
    return <p className="loadin-text">Still loading...</p>
  }

  //Builds a StyleEditorBlock from information stored in the queried JSON file
  function buildShape (i) {
    return (
      <StyleEditorBlock key={i}  
        width={(query?.data?.elements[i].width)}
        height={(query?.data?.elements[i].height)}
        left={(query?.data?.elements[i].left)}
        top={(query?.data?.elements[i].top)}
        unit={(query?.data?.elements[i].unit)}
        parentStyle={parentStyle}
      >        
        <div className={(query?.data?.elements[i].className)}>{(query?.data?.elements[i].text)}</div>
      </StyleEditorBlock>
    )
  }

  //Builds a TextEditorBlock from information stored in the queried JSON file
  function buildTextBlock (i) {
    return (
        <TextEditorBlock key={i}  
          width={(query?.data?.elements[i].width)}
          height={(query?.data?.elements[i].height)}
          top={(query?.data?.elements[i].top)}
          left={(query?.data?.elements[i].left)}
          parentStyle={parentStyle}
          unit={(query?.data?.elements[i].unit)}
          initialText={(query?.data?.elements[i].initialText)}
          initialFontColor={(query?.data?.elements[i].initialFontColor)}
          initialFontSize={(query?.data?.elements[i].initialFontSize)}
          initialFontName={(query?.data?.elements[i].initialFontName)}
          initialFontStyle={(query?.data?.elements[i].initialFontStyle)}
        />
    )
  }

  //Builds EditableBoard, including elements like StyleEditorBlock and TextEditorBlock, from queried JSON file
  function buildBoard (i) {

    //Builds all elements from queried Json and adds them to an array
    const elements = []
    for (let elementInx = 0; elementInx < (query?.data?.elements).length; elementInx++) {
        
        //Selects which build function to use
        if ((query?.data?.elements[elementInx].elementType) === "shape") {
          elements.push(buildShape(elementInx))
        } else {
          elements.push(buildTextBlock(elementInx))
        }
        
      }

    return (
      <EditableBoard     
        unit={(query?.data?.boards[i].unit)}
        width={(query?.data?.boards[i].width)}
        height={(query?.data?.boards[i].height)}
        backgroundColor={(query?.data?.boards[i].backgroundColor)}
      >
        {elements}
      </EditableBoard>
    )
  }

  return (
    buildBoard(0)
    );
}  