import ListHeader from "./components/ListHeader"
import { useEffect, useState } from "react"
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookies, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;
  const [tasks, setTasks] = useState(null);


  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json); //SetTask funciona como un setState esto hace que se renderice nuevamente el componente asignando el valor de json a tasks
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  console.log(tasks);

  //sort by date
  const sortedTasks = tasks?.sort((a, b) => {
    new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken &&
        <>
          < ListHeader listName={'🏝️ Holiday tick list'} getData={getData} />
          <p className="user-email">Welcome Back {userEmail}</p>
          {sortedTasks?.map((task) => (<ListItem key={task.id} task={task} getData={getData} />))}
          <p className="copyright">© Creative coding LLC</p>
        </>}
    </div>
  )
}

export default App
