import { useState, useEffect } from "react";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

import buildPage from "./Comp/buildPage";

import {sendData} from "./axios"

export default function Editor({noteData}) {
  const [textName, setTextName] = useState("")
  const [circleName, setCircleName] = useState("")
  const [elementCount, setElementCount] = useState(0)
  const [editableItems, setEditableItems] = useState([])
  // const theCode = code.code;
  // const noteData = data.json_file;
  // const noteData = noteData.noteData
  // console.log("Data:", noteData)
  // console.log("Data:", noteData.json_file)
  // console.log("Data:", noteData)
  const data = noteData.json_file;
  const boards = noteData.json_file.boards;
  const note_id = noteData.note_id

  // console.log("Code:", theCode)

  //Sends editableItems to backend everytime editableItems is updated
  useEffect(() => {
    setElementCount(editableItems.length + 1)
    var saveData = {"note": {"boards": boards, "elements": editableItems}, "id": note_id}
    console.log(saveData)
    sendData(saveData);
  }, [editableItems, note_id])

  //Gets a JSON file from backend server
  // var query = useQuery(['example'], async () => {
  //   const response = await fetch('http://localhost:3001/')
  //   const data = await response.json()
  //   //console.log(data);
  //   return data;
  // })

  //Displays to console whether or not the query has loaded
  //console.log(query.status)

  //Send a placeholder output to the main App() until the query has loaded
  //Updates EditableItems only once
  if (editableItems.length === 0) {
    setEditableItems([...data.elements])
  }

  //Pull info from html
  function pullPage () {
    //HTML for the editor
    var page = document.getElementById("Full Page")
    //List of elements (including button/input forms)
    var elmList = page.firstChild.childNodes

    //Array used to return a full list of elements in the return
    var output = []

    //Loop goes through each element on the page
    //Inx skips the first 3 because they are input buttons
    for(var inx = 3; inx < elmList.length; inx++) {
      //Will store each property of an element
      let elementInfo = []

      //Takes the 'style' attribute from the element and splits it into attributes
      var elmStyle = elmList[inx].firstChild.getAttribute("style").split(";")
      //Removes the last part of the array (it is an empty string)
      elmStyle.pop()
      
      //Adds elementId to elementInfo
      elementInfo.push(inx - 2)

      //Trims each string from elmStyle and adds them to elementInfo
      elmStyle.forEach(arrayElm => {
        var newElm = arrayElm.split(': ')      
        elementInfo.push(parseFloat(newElm[1].replace("rem", "")))
      });

      //Used for individual elements
      var element = null

      //Checks if element is a textBlock or shape
      //Pushes attributes to elementInfo
      if (elmList[inx].childNodes[0].childNodes[0].nodeType === 1) {
        //Pushes type of element
        elementInfo.push("textBlock")
        element = elmList[inx].childNodes[0].childNodes[0].childNodes[0]
        //Pushes text from element
        elementInfo.push(element.textContent)
        elementInfo.push(element.getAttribute('color'))
        elementInfo.push(parseFloat(element.getAttribute('font-size')))
        elementInfo.push(element.getAttribute('class').split(' ')[3])
        elementInfo.push(element.getAttribute('class').split(' ')[2])
      } else {
        //Pushes type of element
        elementInfo.push("shape")
        element = elmList[inx].childNodes[0].childNodes[1].childNodes[0]
        //Pushes text from element
        elementInfo.push(element.textContent)
        //Pushes element class
        elementInfo.push(element.getAttribute("class"))
      }
      
      console.log(element)

      //Checks if element is a textBlock or shape
      //Creates new element on 'output' using elementInfo
      if (elementInfo.length === 8) {
        output.push({"elementId":elementInfo[0],"elementType":elementInfo[5],"width":elementInfo[3],"height":elementInfo[4],"left":elementInfo[2],"top":elementInfo[1],"unit":"rem","className":elementInfo[7],"text":elementInfo[6]})
      } else {
        output.push({"elementId":elementInfo[0],"elementType":elementInfo[5],"width":elementInfo[3],"height":elementInfo[4],"left":elementInfo[2],"top":elementInfo[1],"unit":"rem","initialText":elementInfo[6], "initialFontColor":elementInfo[7],"initialFontSize":elementInfo[8],"initialFontName":elementInfo[9],"initialFontStyle":elementInfo[10]})
      }
    }
    return output
  }

  const updateElements = (type) => {
    //Retrieves list of elements from pullPage
    const input = pullPage()

    //New state for editableItems
    const newState = []

    //Push
    for(var i = 0;i < input.length;i++){
      newState.push(input[i])
    }
    
    if (type === "circle"){
      newState.push({
        "elementId":elementCount,
        "elementType":"shape",
        "width":7,
        "height":7,
        "left":7.2,
        "top":8,
        "unit":"rem",
        "className":"pink circle",
        "text":circleName})
    } else if (type === "text") {
      newState.push({
        "elementId": 4,
        "elementType": "textBlock",
        "width": 23.125,
        "height": 4.125,
        "left": 10.7875,
        "top": 19,
        "unit": "rem",
        "initialText": textName,
        "initialFontColor": "#96ffdc",
        "initialFontSize": 0.59,
        "initialFontName": "andada-pro",
        "initialFontStyle": "twin-color-text"}
      )
      
    }
    
    setEditableItems(newState)

  }

  //Used when adding shape
  const circleHandleSubmit = (e) => {
    e.preventDefault();
    updateElements("circle")
    //setEditableItems([...editableItems, {"elementId":elementCount,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":circleName}]);
  }

    //Used to set text when adding shape
  const circleHandleInput = (e) => {
    setCircleName(e.target.value);
  }

  const textHandleSubmit = (e) => {
    e.preventDefault();

    updateElements("text")
    //setEditableItems([...editableItems, {"elementId":elementCount,"elementType":"textBlock","width":23.125,"height":4.125,"top":19,"left":10.7875,"unit":"rem","initialText":textName,"initialFontColor":"#96ffdc","initialFontSize":0.59,"initialFontName":"andada-pro","initialFontStyle":"twin-color-text"}]);
  }

  const textHandleInput = (e) => {
    setTextName(e.target.value);
  }

   //Used when adding shape
   const saveHandleSubmit = (e) => {
    e.preventDefault();
    updateElements()
    //setEditableItems([...editableItems, {"elementId":elementCount,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":circleName}]);
  }

  return (
    buildPage(data, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput, saveHandleSubmit)
    );
  
} 
