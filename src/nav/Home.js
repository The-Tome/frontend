import { useState } from "react";
import { objects } from '../getData';
import { NavLink } from 'react-router-dom';

function Home() {
  const [worlds, setWorlds] = useState(objects)
  console.log(objects)
  
  
  // const handleLog = (e,) => {
  //   e.preventDefault();

  //   console.log("Gosh what a spooky house!");
  // };

  return (
    <div>
      <p>This is a Landing Page!</p>
      <p>Medicine could do nothing more for Cyrus West, whose greedy relatives, like cats around a canary, had brought him to the verge of madness——</p>

      <ul>
        {
          objects
          ?
          objects.map((world, key) => (
            <li key={key} onClick={() => {
              world.visible === false ? world.visible = true : world.visible = false;
              setWorlds(
                [world, ...objects]
              );
            }}>
              {world.name}
              {
                world.visible
                ?
                  (
                    <ul>
                      {
                        world?.notes?.map((note, key) => (
                          <li key={key}>
                            <NavLink to={`/${note.code}`}>{note.name}</NavLink>
                          </li>
                        ))
                      }
                    </ul>
                  )
                :
                ""
              }
            </li>
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
// * Try to throw a t