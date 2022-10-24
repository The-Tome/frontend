import {TextEditorBlock} from "react-web-editor";

//Builds a TextEditorBlock from information stored in the queried JSON file
export default function buildTextBlock (key, editableItems, parentStyle) {
    if (!(editableItems[key].elementId)) {
        editableItems[key].elementId = key+1;
    };

    return (
        <TextEditorBlock key={(editableItems[key].elementId)}
            width={(editableItems[key].width)}
            height={(editableItems[key].height)}
            top={(editableItems[key].top)}
            left={(editableItems[key].left)}
            parentStyle={parentStyle}
            unit={(editableItems[key].unit)}
            initialText={(editableItems[key].initialText)}
            initialFontColor={(editableItems[key].initialFontColor)}
            initialFontSize={(editableItems[key].initialFontSize)}
            initialFontName={(editableItems[key].initialFontName)}
            initialFontStyle={(editableItems[key].initialFontStyle)}
        />
    )
}