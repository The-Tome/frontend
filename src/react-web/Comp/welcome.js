// import [...props] from '../index'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getWorlds } from "../axios";

function Welcome(code) {
  const nav = useNavigate()

  let greeting = "You aren't logged in."
  if (localStorage.getItem('displayName') !== null){
    greeting = "Hi " + localStorage.getItem('displayName')
  } else if (localStorage.getItem('firstName') !== null && localStorage.getItem('lastName')!== null ) {
    greeting = "Hi " + localStorage.getItem('firstName') + " " + localStorage.getItem('lastName')
  }

  useEffect(() => {
    nav('/home')
  }, []);

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

export default Welcome;