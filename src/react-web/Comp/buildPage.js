import buildBoard from "./buildBoard"

export default function buildPage (query, name, editableItems, handleSubmit, handleInput) {
    const boards = []

    for (let boardInx = 0; boardInx < (query?.data?.boards).length; boardInx++){
      boards.push(buildBoard(boardInx, query, name, editableItems, handleSubmit, handleInput))
    }

    return (
      <div id="Full Page">
        {boards.at(0)}
      </div>
    )
  }