import ListHeader from "./components/ListHeader"

const App = () => {

  const signOut = () => {
    console.log('signing out')
  }

  return (
    <div className="app">
      <ListHeader listName={'🏝️ Holiday tick list'} />
      <div className="button-container">
        <button type="create">ADD NEW</button>
        <button type="signout" onClick={signOut}>SIGN OUT</button>
      </div>
    </div>
  )
}

export default App
