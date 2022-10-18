import {StyleEditorBlock} from "react-web-editor";

//Builds a StyleEditorBlock from information stored in the queried JSON file
export default function buildShape (key, editableItems, parentStyle) {
    if (!(editableItems[key].elementId)) {
        editableItems[key].elementId = key+1;
    };

    return (
        <StyleEditorBlock key={(editableItems[key].elementId)}  
        width={(editableItems[key].width)}
        height={(editableItems[key].height)}
        left={(editableItems[key].left)}
        top={(editableItems[key].top)}
        unit={(editableItems[key].unit)}
        parentStyle={parentStyle}
        >        
            <div className={(editableItems[key].className)}>{(editableItems[key].text)}</div>
        </StyleEditorBlock>
    )
}