import ListHeader from "./components/ListHeader"
import { useEffect, useState } from "react"
import ListItem from "./components/ListItem";

const App = () => {
  const userEmail = 'arito@test.com';
  const [tasks, setTasks] = useState(null);

  const getData = async (req, res) => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json); //SetTask funciona como un setState esto hace que se renderice nuevamente el componente asignando el valor de json a tasks
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => getData, []);

  console.log(tasks);

  //sort by date
  const sortedTasks = tasks?.sort((a, b) => {
    new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="app">
      <ListHeader listName={'🏝️ Holiday tick list'} />
      {sortedTasks?.map((task) => (<ListItem key={task.id} task={task} />))}
    </div>
  )
}

export default App
