import {EditableBoard} from "react-web-editor";

import buildShape from "./buildShape";
import buildTextBlock from "./buildTextBlock";


//Builds EditableBoard, including elements like StyleEditorBlock and TextEditorBlock, from queried JSON file
export default function buildBoard (i, query, name, editableItems, handleSubmit, handleInput) {
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
