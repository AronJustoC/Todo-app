import Modal from "./Modal"

const ListHeader = ({ listName }) => {

  const signOut = () => {
    console.log('signing out...')
  }

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="sign-out" onClick={signOut}>SIGN OUT</button>
      </div>
      <Modal />
    </div>
  )
}

export default ListHeader
