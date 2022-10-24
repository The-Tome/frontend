import buildBoard from "./buildBoard"

export default function buildPage (query, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput, saveHandleSubmit) {
  const boards = []

  for (let boardInx = 0; boardInx < (query?.data?.boards).length; boardInx++){
    boards.push(buildBoard(boardInx, query, circleName, textName, editableItems, circleHandleSubmit, circleHandleInput, textHandleSubmit, textHandleInput, saveHandleSubmit))
  }

  return (
    <div id="Full Page">
      {boards.at(0)}
    </div>
  )
}
