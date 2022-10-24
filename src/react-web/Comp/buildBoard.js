import {EditableBoard} from "react-web-editor";

import buildShape from "./buildShape";
import buildTextBlock from "./buildTextBlock";


//Builds EditableBoard, including elements like StyleEditorBlock and TextEditorBlock, from queried JSON file
export default function buildBoard (i, query, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput) {
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
      <form onSubmit={circleHandleSubmit}>
        <label htmlFor="circleName">Label:</label>
        <input type="text" id="circleName" name="circleName" value={circleName} onChange={circleHandleInput} required/>
        <button type="submit">Add note circle</button>
      </form>
      <form onSubmit={textHandleSubmit}>
        <label htmlFor="textName">Label:</label>
        <input type="text" id="textName" name="textName" value={textName} onChange={textHandleInput} required/>
        <button type="submit">Add textbox</button>
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
            buildShape(key, editableItems, parentStyle)
            :
            buildTextBlock(key, editableItems, parentStyle)
            }
          </div>
        ))
      }
    </EditableBoard>
  )
}
