import { useEffect, useState } from "react";
// import { objects } from '../getData';
// import {getWorlds} from '../react-web/axios'
import { NavLink } from 'react-router-dom';

const axios = require('axios').default;

function Home({ worlds, setWorlds, user, setUser }) {
  //The getWorlds call is async. We need to set it up so nothing else happens until it is done.
  // const objects = getWorlds(localStorage.getItem('uid'))

  // const [worlds, setWorlds] = useState(null)
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Home Use Effect')
    var idData = {'id':localStorage.getItem('uid')}
    axios.post ('http://localhost:3001/getWorlds', idData)
    .then (Response => {
        console.log(Response.data)
        setWorlds(Response.data.worlds)
        setLoading(false);
    })
  }, [setWorlds]);

  if (isLoading) {
    console.log("IS LOADING")
    return <div className="App">Loading...</div>;
  }
  
  const testWorld = {
    'world_name': 'testWorld',
    'notes': [],
  };

  const testBoard = {
    'name': 'note2',
    'code': 'kekekekkekekkeke',
    'data': 
      {
        "boards": [
          {
            "boardId": 1,
            "unit": "rem",
            "left": 0,
            "top": 0,
            "width": 50,
            "height": 50,
            "backgroundColor": "#531fc2"
          },
          {
            "boardId": 2,
            "unit": "rem",
            "left": 0,
            "top": 50,
            "width": 50,
            "height": 50,
            "backgroundColor": "Red"
          }
        ],
        "elements": [
          {
            "elementId": 1,
            "elementType": "shape",
            "width": 5.5,
            "height": 5.5,
            "left": 2.6875,
            "top": 29.625,
            "unit": "rem",
            "className": "blue circle",
            "text": "me"
          },
          {
            "elementId": 2,
            "elementType": "shape",
            "width": 7,
            "height": 7,
            "left": 37.95,
            "top": 28.7875,
            "unit": "rem",
            "className": "pink circle",
            "text": "New"
          },
          {
            "elementId": 3,
            "elementType": "shape",
            "width": 7,
            "height": 7,
            "left": 38.5125,
            "top": 1.625,
            "unit": "rem",
            "className": "pink circle",
            "text": "dsf"
          },
          {
            "elementId": 4,
            "elementType": "textBlock",
            "width": 23.125,
            "height": 4.125,
            "left": 3.35,
            "top": 14,
            "unit": "rem",
            "initialText": " ",
            "initialFontColor": "#96ffdc",
            "initialFontSize": 0.59,
            "initialFontName": "andada-pro",
            "initialFontStyle": "twin-color-text"
          }
        ]
      }
  }

  // const handleLog = (e,) => {
  //   e.preventDefault();

  //   console.log("Gosh what a spooky house!");
  // };

  return (
    <div>
      <p>This is a Landing Page!</p>
      <p>Medicine could do nothing more for Cyrus West, whose greedy relatives, like cats around a canary, had brought him to the verge of madness——</p>

      <button onClick={() => setWorlds([testWorld, ...worlds])}>Add world</button>
      <ul>
        {
          worlds
          ?
          worlds.map((world, key) => (
            <>
            {world.world_name}
            <button key={`button${key}`} onClick={() => {
              const newWorlds = [...worlds];
              console.log(newWorlds[key].notes)
              newWorlds[key].notes.unshift(testBoard)
              setWorlds(newWorlds)
            }
            }>Add note to world</button>
            <li key={key} onClick={() => {
              world.visible === false ? world.visible = true : world.visible = false;
              //We have to do ALL THIS to add make an individual world visible because state is complicated
              const newWorlds = [...worlds]; //duplicate worlds into variable for manipulation outside of state
              newWorlds.splice(key, 1); //delete world at index
              newWorlds.splice(key, 0, world); //add the new world with attribute "visible" switched into the array at that same index
              setWorlds(
                newWorlds // Add manipulated worlds to state
              );
              console.log(worlds)
            }}>
              {world.world_name}
              {
                // world.visible
                // ?
                  (
                    <ul>
                      {
                        world?.notes?.map((note, key) => (
                          <li key={key}>
                            <NavLink to={`/${note.note_id}`}>{note.note_name}</NavLink>
                          </li>
                        ))
                      }
                    </ul>
                  )
                // :
                // ""
              }
            </li>
            </>
          ))
          :
          <p>There's nothing here.</p>
        }
      </ul>
    </div>
  )
}

export default Home;

//* Prop drilling
// * Centralized database
// * You can go serverless, have containers
// * 