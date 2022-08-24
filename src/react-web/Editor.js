//import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import {
    EditableBoard,
    TextEditorBlock,
    StyleEditorBlock
  } from "react-web-editor";
import "./styles.css";

import { useQuery } from "@tanstack/react-query";

export default function Editor() {
  const parentStyle = { width: 100, height: 100 };

  // const query = useQuery(['helloWorld'], async () => {
  //   const response = await fetch('http://localhost:3001/')
  //   const data = await response.json()
  //   return data
  // })

  // var textTest = (query?.data?.hello)
  // //console.log(textTest)

  const query = useQuery(['example'], async () => {
    const response = await fetch('http://localhost:3001/')
    const data = await response.json()
    console.log(data)
    return data
  })

  console.log(query.status)
  
  if (query.status === "loading") {
    return <p>Still loading...</p>
  }

  return (
    <EditableBoard
      unit={(query?.data?.blocks[0].unit)}
      width={(query?.data?.blocks[0].width)}
      height={(query?.data?.blocks[0].height)}
      backgroundColor={(query?.data?.blocks[0].backgroundColor)}

      // unit={"rem"}
      // width={parentStyle.width}
      // height={parentStyle.height}
      // backgroundColor={"#F3F0D1"}
    >
      <TextEditorBlock
        width={16.5}
        height={7}
        top={3}
        left={5.5}
        parentStyle={parentStyle}
        unit={"rem"}
        initialText={"textTest"}
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
      </StyleEditorBlock>
    </EditableBoard>
  );
}  