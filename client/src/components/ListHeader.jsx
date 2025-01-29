const ListHeader = ({ listName }) => {

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" type="">ADD NEW</button>
        <button className="sign-out" type="">SIGN OUT</button>
      </div>
    </div>
  )
}

export default ListHeader
