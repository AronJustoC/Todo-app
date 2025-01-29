import TickIcon from './TickIcon';
import ProgressBar from './ProgressBar';

const ListItem = ({ task }) => {
  return (
    <li className="list-item">

      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <button className="edit" type="">EDIT</button>
        <button className="delete" type="">DELETE</button>
      </div>

    </li>
  )
}

export default ListItem
