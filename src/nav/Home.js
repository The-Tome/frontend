import { useState } from "react";
import { objects } from '../getData';

function Home() {
  const [worlds, setWorlds] = useState(objects)
  
  
  const handleLog = (e,) => {
    e.preventDefault();

    console.log("Gosh what a spooky house!");
  };

  return (
    <div>
      <p>This is a Landing Page!</p>
      <p>Medicine could do nothing more for Cyrus West, whose greedy relatives, like cats around a canary, had brought him to the verge of madness——</p>

      <ul>
        {
          objects?.map((world, key) => (
            <li key={key} onClick={() => {
              console.log(world.name, world.visible)
              world.visible === false ? world.visible = true : world.visible = false;
              setWorlds(
                [world, ...objects]
              );
              console.log(world.name, world.visible)
              console.log(worlds)
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
                            {note.name}
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
        }
      </ul>
    </div>
  )
}

export default Home;