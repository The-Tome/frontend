import { useState, useEffect } from "react";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

import buildPage from "./Comp/buildPage";

import {sendData} from "./axios"

export default function Editor() {
  const [textName, setTextName] = useState("")
  const [circleName, setCircleName] = useState("")
  const [elementCount, setElementCount] = useState(0)
  const [editableItems, setEditableItems] = useState([])
  const [newEditableItems, setNewEditableItems] = useState([])

  //Sends editableItems to backend everytime editableItems is updated
  useEffect(() => {
    setElementCount(editableItems.length + 1)
    sendData(editableItems);
  }, [editableItems])

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

  //Pull info from html
  function pullPage () {
    //HTML for the editor
    var page = document.getElementById("Full Page")
    //List of elements (including button/input forms)
    var elmList = page.firstChild.childNodes

    //Loop goes through each element on the page
    //Inx skips the first 2 because they are input buttons
    for(var inx = 2; inx < elmList.length; inx++) {
      //Will store each property of an element
      let elementInfo = []

      //Takes the 'style' attribute from the element and splits it into attributes
      var elmStyle = elmList[inx].firstChild.getAttribute("style").split(";")
      //Removes the last part of the array (it is an empty string)
      elmStyle.pop()
      
      //Adds elementId to elementInfo
      elementInfo.push(inx - 1)

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
      //Creates new element on newEditableItems using elementInfo
      if (elementInfo.length === 8) {
        setNewEditableItems(newEditableItems => [...newEditableItems, {"elementId":elementInfo[0],"elementType":elementInfo[5],"width":elementInfo[3],"height":elementInfo[4],"left":elementInfo[2],"top":elementInfo[1],"unit":"rem","className":elementInfo[7],"text":elementInfo[6]}])
      } else {
        setNewEditableItems(newEditableItems => [...newEditableItems, {"elementId":elementInfo[0],"elementType":elementInfo[5],"width":elementInfo[3],"height":elementInfo[4],"left":elementInfo[2],"top":elementInfo[1],"unit":"rem","initialText":elementInfo[6], "initialFontColor":elementInfo[7],"initialFontSize":elementInfo[8],"initialFontName":elementInfo[9],"initialFontStyle":elementInfo[10]}])
      }

      //list.push(elementInfo)
    }
    //console.log(list)
    console.log(newEditableItems)
  }

  const updateElements = () => {
    pullPage()

    const newState = editableItems.map(obj => {
      if (obj.elementId === 2) {
        return {...obj, text: 'text'}
      }
      return obj
    })

    newState.push({"elementId":elementCount,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":circleName})
    setEditableItems(newState)
  }

  //Used when adding shape
  const circleHandleSubmit = (e) => {
    e.preventDefault();
    updateElements()
    //setEditableItems([...editableItems, {"elementId":elementCount,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":circleName}]);
  }

    //Used to set text when adding shape
  const circleHandleInput = (e) => {
    setCircleName(e.target.value);
  }

  const textHandleSubmit = (e) => {
    e.preventDefault();

    setEditableItems([...editableItems, {"elementId":elementCount,"elementType":"textBlock","width":23.125,"height":4.125,"top":19,"left":10.7875,"unit":"rem","initialText":textName,"initialFontColor":"#96ffdc","initialFontSize":0.59,"initialFontName":"andada-pro","initialFontStyle":"twin-color-text"}]);
  }

  const textHandleInput = (e) => {
    setTextName(e.target.value);
  }

  return (
    buildPage(query, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput)
    );
  
} 