import {StyleEditorBlock} from "react-web-editor";

//Builds a StyleEditorBlock from information stored in the queried JSON file
export default function buildShape (i, editableItems, parentStyle) {
    return (
        <StyleEditorBlock key={(editableItems[i].elementId)}  
        width={(editableItems[i].width)}
        height={(editableItems[i].height)}
        left={(editableItems[i].left)}
        top={(editableItems[i].top)}
        unit={(editableItems[i].unit)}
        parentStyle={parentStyle}
        >        
        <div className={(editableItems[i].className)}>{(editableItems[i].text)}</div>
        </StyleEditorBlock>
    )
}