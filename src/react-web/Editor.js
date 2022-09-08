//import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import {
  EditableBoard,
  TextEditorBlock,
  StyleEditorBlock
} from "react-web-editor";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

export default function Editor() {

//Gets a JSON file from backend server
const query = useQuery(['example'], async () => {
  const response = await fetch('http://localhost:3001/')
  const data = await response.json()
  return data
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
    <div key={(query?.data?.elements[i].elementId)} id = {"element" + (query?.data?.elements[i].elementId) + "shape"}>
      <StyleEditorBlock  
        width={(query?.data?.elements[i].width)}
        height={(query?.data?.elements[i].height)}
        left={(query?.data?.elements[i].left)}
        top={(query?.data?.elements[i].top)}
        unit={(query?.data?.elements[i].unit)}
        parentStyle={parentStyle}
      >        
        <div className={(query?.data?.elements[i].className)}>{(query?.data?.elements[i].text)}</div>
      </StyleEditorBlock>
    </div>
  )
}

//Builds a TextEditorBlock from information stored in the queried JSON file
function buildTextBlock (i, parentStyle) {
  return (
    <div key={(query?.data?.elements[i].elementId)} id = {"element" + (query?.data?.elements[i].elementId) + "text"}>
      <TextEditorBlock
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
      </div>
  )
}

//Builds EditableBoard, including elements like StyleEditorBlock and TextEditorBlock, from queried JSON file
function buildBoard (i) {
  //Sets boundries so that elements can't move off their boards
  var parentStyle = {width: (query?.data?.boards[i].width),height: (query?.data?.boards[i].height)}

 //Builds all elements from queried Json and adds them to an array
  const elements = []
  for (let elementInx = 0; elementInx < (query?.data?.elements).length; elementInx++) {
      
      //Selects which build function to use
      if ((query?.data?.elements[elementInx].elementType) === "shape") {
        elements.push(buildShape(elementInx, parentStyle))
      } else {
        elements.push(buildTextBlock(elementInx, parentStyle))
      }     
    }

    //Sorts all elements based on their elementId (which was set as the key value in the build functions)
    elements.sort((a, b) => (a.key > b.key) ? 1 : -1)

  return (
      <EditableBoard key={(query?.data?.boards[i].boardId)}        
        unit={(query?.data?.boards[i].unit)}
        width={parentStyle.width}
        height={parentStyle.height}
        left={(query?.data?.boards[i].left)}
        top={(query?.data?.boards[i].top)}
        backgroundColor={(query?.data?.boards[i].backgroundColor)}
      >
        {elements}
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
      {boards}
    </div>
  )
}

function pullPage () {
  var page = document.getElementById("Full Page")
  var elmList = page.firstChild.childNodes
  for(let i=0;i<elmList.length;i++){
    var elm = elmList.item(i)
    if (elm.getAttribute("id").includes("shape")){
      console.log("This is a shape")
      console.log(elm.getAttribute("id"))
      console.log(elm.firstChild.getAttribute("style"))
      console.log(elm.textContent)
      console.log('---')
    } else if (elm.getAttribute("id").includes("text")) {
      console.log("This is a textblock")
      console.log(elm.getAttribute("id"))
      console.log(elm.firstChild.getAttribute("style"))
      console.log(elm.textContent)
      console.log('---')
    }
  }
}

setInterval(function(){
  pullPage()
}, 5000)

{/* function logElement1() {
  console.log (document.getElementById("element1").firstChild.getAttribute("style"))
  ripElement()
}
setInterval(function(){
  logElement1()
}, 5000)

function ripElement() {
  var elementStyle = document.getElementById("element1").firstChild.getAttribute("style")
  var styleArray = elementStyle.split(";")
  var top = styleArray[0].replace(/[^\d.]/g, '');
  var left = styleArray[1].replace(/[^\d.]/g, '');
  var width = styleArray[2].replace(/[^\d.]/g, '');
  var height = styleArray[3].replace(/[^\d.]/g, '');

  console.log(top)
  console.log(left)
  console.log(width)
  console.log(height)
  console.log("---")
} */}


return (
  buildPage()
  );
}  