// import [...props] from '../index'

import { getWorlds } from "../axios";

function Test(code) {
  getWorlds()

  const theCode = code.code;
  let greeting = "You aren't logged in."
  if (localStorage.getItem('displayName') !== null){
    greeting = "Hi " + localStorage.getItem('displayName')
  } else if (localStorage.getItem('firstName') !== null && localStorage.getItem('lastName')!== null ) {
    greeting = "Hi " + localStorage.getItem('firstName') + " " + localStorage.getItem('lastName')
  }
  return (
    <div className="testAbility">
      {
      console.log('I got here')
      }
    {/* I am just a test page lol. Here's my code: {theCode} */}
    {greeting}
    </div>
  )
}

export default Test;