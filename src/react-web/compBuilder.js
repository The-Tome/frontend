import {
    EditableBoard,
    TextEditorBlock,
    StyleEditorBlock
  } from "react-web-editor";

//Builds EditableBoard, including elements like StyleEditorBlock and TextEditorBlock, from queried JSON file
export function buildBoard (i, query) {
  //Sets boundries so that elements can't move off their boards
  var parentStyle = {width: (query?.data?.boards[i].width),height: (query?.data?.boards[i].height)}
  
  //Builds all elements from queried Json and adds them to an array
  const elements = []
  for (let elementInx = 0; elementInx < (query?.data?.elements).length; elementInx++) {
    
    //Selects which build function to use
    if ((query?.data?.elements[elementInx].elementType) === "shape") {
        elements.push(buildShape(elementInx, parentStyle, query))
    } else {
        elements.push(buildTextBlock(elementInx, parentStyle, query))
    }     
    }

    //Sorts all elements based on their elementId (which was set as the key value in the build functions)
    elements.sort((a, b) => (a.key > b.key) ? 1 : -1)
  
  return (
    <EditableBoard key={(query?.data?.boards[i].boardId)}        
        unit={(query?.data?.boards[i].unit)}
        width={parentStyle.width}
        height={parentStyle.height}
        left={(query?.data?.boards[i].left)}
        top={(query?.data?.boards[i].top)}
        backgroundColor={(query?.data?.boards[i].backgroundColor)}
    >
        {elements}
    </EditableBoard>
  )
}

  //Builds a StyleEditorBlock from information stored in the queried JSON file
function buildShape (i, parentStyle, query) {
  return (
    <div key={(query?.data?.elements[i].elementId)} id = {"element" + (query?.data?.elements[i].elementId) + "shape"}>
      <StyleEditorBlock  
        width={(query?.data?.elements[i].width)}
        height={(query?.data?.elements[i].height)}
        left={(query?.data?.elements[i].left)}
        top={(query?.data?.elements[i].top)}
        unit={(query?.data?.elements[i].unit)}
        parentStyle={parentStyle}
      >        
        <div className={(query?.data?.elements[i].className)}>{(query?.data?.elements[i].text)}</div>
      </StyleEditorBlock>
    </div>
  )
}
  
//Builds a TextEditorBlock from information stored in the queried JSON file
function buildTextBlock (i, parentStyle, query) {
  return (
      <div key={(query?.data?.elements[i].elementId)} id = {"element" + (query?.data?.elements[i].elementId) + "text"}>
      <TextEditorBlock
          width={(query?.data?.elements[i].width)}
          height={(query?.data?.elements[i].height)}
          top={(query?.data?.elements[i].top)}
          left={(query?.data?.elements[i].left)}
          parentStyle={parentStyle}
          unit={(query?.data?.elements[i].unit)}
          initialText={(query?.data?.elements[i].initialText)}
          initialFontColor={(query?.data?.elements[i].initialFontColor)}
          initialFontSize={(query?.data?.elements[i].initialFontSize)}
          initialFontName={(query?.data?.elements[i].initialFontName)}
          initialFontStyle={(query?.data?.elements[i].initialFontStyle)}
      />
      </div>
  )
}

