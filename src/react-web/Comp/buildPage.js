import buildBoard from "./buildBoard"

export default function buildPage (data, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput, saveHandleSubmit) {
  const boards = []

  for (let boardInx = 0; boardInx < (data?.boards).length; boardInx++){
    boards.push(buildBoard(boardInx, data, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput, saveHandleSubmit))
  }

  return (
    <div id="Full Page" className="editableBoard">
      {boards.at(0)}
    </div>
  )
}
