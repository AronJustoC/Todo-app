import { useState } from 'react'
import { useCookies } from 'react-cookie';

const SERVER_URL = import.meta.env.VITE_SERVERURL;


const Modal = ({ mode, setShowModal, getData, task }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const editMode = mode === 'edit' ? true : false

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : '',
    progress: editMode ? task.progress : 50,
    date: editMode ? task.date : new Date().toISOString().split('T')[0]
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${SERVER_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        console.log('WORKED');
        setShowModal(false);
        getData();
      } else {
        console.error('Error:', response.statusText)
      }
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${SERVER_URL}/todos/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        setShowModal(false);
        getData()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    console.log('changing...', e)
    const { name, value } = e.target

    setData((data => ({
      ...data,
      [name]: value
    })))
    console.log(data);
  }
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Lest {mode} your tasks</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="You task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="range">Drag to select your current progress: </label>
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input className={mode} type="submit" onClick={editMode ? editData : postData} />
        </form>
      </div>
    </div>
  )
}

export default Modal
