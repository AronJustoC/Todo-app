import { useState } from 'react'

const Modal = () => {
  const mode = 'create'
  const editMode = mode === 'edit' ? true : false
  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: 0,
    date: editMode ? "" : new Date().toISOString().split('T')[0]
  })

  const handleChange = (e) => {
    console.log('changing...', e)
    const { name, value } = e.target
  }
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Lest {mode} your tasks</h3>
          <button type="">X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="You task goes here"
            name="title"
            value={""}
            onChange={handleChange}
          />
          <br />
          <label for="range">Drag to select your current progress: </label>
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Modal
