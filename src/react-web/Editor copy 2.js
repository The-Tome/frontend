//import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import {
  EditableBoard,
  TextEditorBlock,
  StyleEditorBlock
} from "react-web-editor";
import { useState } from "react";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

export default function Editor() {
  const defaultLabel = "Empty note"
  const [editableItems, setEditableItems] = useState([]);
  const [name, setName] = useState("")
  const parentStyle = { width: 100, height: 100 };

  const query = useQuery(['helloWorld'], async () => {
    const response = await fetch('http://localhost:3001/')
    const data = await response.json()
    return data
  })

  var textTest = (query?.data?.hello)
  //console.log(textTest)

  console.log(query.status)

  if (query.status === "loading") {
    return <>Still loading...</>
  }





  const handleSubmit = (e) => {
    e.preventDefault();

    setEditableItems([...editableItems, {text: name}]);
  }

  const handleInput = (e) => {
    setName(e.target.value);
  }


  return (
    <>
    <EditableBoard
      unit={"rem"}
      width={parentStyle.width}
      height={parentStyle.height}
      backgroundColor={"#F3F0D1"}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Label:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleInput} required/>
        <button type="submit">Add note circle</button>
      </form>
      {
        editableItems.map(editableItem => (
            <>
              <StyleEditorBlock
                width={7}
                height={7}
                left={Math.floor(Math.random() * 35)}
                top={Math.floor(Math.random() * 5) + 10}
                unit={"rem"}
                parentStyle={parentStyle}
              >
                <div className="pink circle">{editableItem.text}</div>
              </StyleEditorBlock>
            </>
         ))
      }
      {/* <TextEditorBlock
        width={16.5}
        height={7}
        top={3}
        left={5.5}
        parentStyle={parentStyle}
        unit={"rem"}
        initialText={textTest}
        initialFontColor={"#ffffff"}
        initialFontSize={0.5}
        initialFontName={"stix-two-text"}
        initialFontStyle={"twin-color-text"}
      />
      <StyleEditorBlock
        width={7}
        height={7}
        left={7.2}
        top={8}
        unit={"rem"}
        parentStyle={parentStyle}
      >
        <div className="pink circle">Drag</div>
      </StyleEditorBlock>
      <StyleEditorBlock
        width={5.5}
        height={5.5}
        left={12.5}
        top={11}
        unit={"rem"}
        parentStyle={parentStyle}
      >
        <div className="blue circle">Me</div>
      </StyleEditorBlock> */}
    </EditableBoard>
    </>
  );
}  