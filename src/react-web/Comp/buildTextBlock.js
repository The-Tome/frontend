import {TextEditorBlock} from "react-web-editor";

//Builds a TextEditorBlock from information stored in the queried JSON file
export default function buildTextBlock (i, editableItems, parentStyle) {
    return (
        <TextEditorBlock key={(editableItems[i].elementId)}
            width={(editableItems[i].width)}
            height={(editableItems[i].height)}
            top={(editableItems[i].top)}
            left={(editableItems[i].left)}
            parentStyle={parentStyle}
            unit={(editableItems[i].unit)}
            initialText={(editableItems[i].initialText)}
            initialFontColor={(editableItems[i].initialFontColor)}
            initialFontSize={(editableItems[i].initialFontSize)}
            initialFontName={(editableItems[i].initialFontName)}
            initialFontStyle={(editableItems[i].initialFontStyle)}
        />
    )
}