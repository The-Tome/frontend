//import { isValidDateValue } from "@testing-library/user-event/dist/utils";
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

setTimeout(function() { pullPage(); }, 5000);
setInterval(function(){
  pullPage()
}, 30000)

return (
  buildPage()
  );
}  