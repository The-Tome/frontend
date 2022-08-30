//import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import Cookies from 'js-cookie';

import "./styles.css";

import {buildBoard} from "./compBuilder"

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

function buildPage () {
  const boards = []

  for (let boardInx = 0; boardInx < (query?.data?.boards).length; boardInx++){
    boards.push(buildBoard(boardInx, query))
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

let signal = {"boards":[{"boardId":1,"unit":"rem","left":0,"top":0,"width":50,"height":50,"backgroundColor":"#531fc2"},{"boardId":2,"unit":"rem","left":0,"top":50,"width":50,"height":50,"backgroundColor":"Red"}],"elements":[{"elementId":1,"elementType":"shape","width":7,"height":7,"left":7.2,"top":8,"unit":"rem","className":"pink circle","text":"Drag"},{"elementId":2,"elementType":"shape","width":5.5,"height":5.5,"left":12.5,"top":11,"unit":"rem","className":"blue circle","text":"me"},{"elementId":3,"elementType":"textBlock","width":23.125,"height":4.125,"top":19,"left":10.7875,"unit":"rem","initialText":"Hello Fellows","initialFontColor":"#96ffdc","initialFontSize":0.59,"initialFontName":"andada-pro","initialFontStyle":"twin-color-text"}]}

const postRequest = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
  body: JSON.stringify(signal),
}

const sendSignal = async () => {
  const response = await fetch(`http://localhost:3001/`, postRequest);

  if (!response.ok) {
    throw new Error('Network response for primary data not ok!')
  } else {
    const responseData = await response.json();
    console.log(responseData);
    // setWordChoices([...wordChoices])
  };
}

sendSignal();

setTimeout(function() { pullPage(); }, 5000);
setInterval(function(){
  pullPage()
}, 30000)

return (
  buildPage()
  );
}  