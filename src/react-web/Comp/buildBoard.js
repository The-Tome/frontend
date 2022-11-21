import { useLocation } from "react-router-dom";
import {EditableBoard} from "react-web-editor";

import buildShape from "./buildShape";
import buildTextBlock from "./buildTextBlock";


//Builds EditableBoard, including elements like StyleEditorBlock and TextEditorBlock, from queried JSON file
export default function buildBoard (i, data, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput, saveHandleSubmit) {
  //Sets boundries so that elements can't move off their boards
  var parentStyle = {width: (data?.boards[i].width),height: (data?.boards[i].height)}
  return (
    <EditableBoard        
      unit={(data?.boards[i].unit)}
      width={parentStyle.width}
      height={parentStyle.height}
      left={(data?.boards[i].left)}
      top={(data?.boards[i].top)}
      backgroundColor={(data?.boards[i].backgroundColor)}
    >
      <form onSubmit={circleHandleSubmit}>
        <input type="text" id="circleName" name="circleName" value={circleName} onChange={circleHandleInput} required/>
        <button type="submit">Add note circle</button>
      </form>
      <form onSubmit={textHandleSubmit}>
        <input type="text" id="textName" name="textName" value={textName} onChange={textHandleInput} required/>
        <button type="submit">Add textbox</button>
      </form>
      <form onSubmit={saveHandleSubmit}>
        <button type="submit">Save</button>
      </form>
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
