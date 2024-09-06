import{BrowserRouter as Router,Route,Routes,useRoutes,Navigate} from 'react-router-dom'
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/login';

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      (user && <Route path="/" exact element = {<Login/>}/>)
      <Route path="/signup" exact element={<Signup />} />
			<Route path="/Main" exact element={<Main />} />
      <Route path ="/login" exact element={<Login/>}/>
			<Route path="/" element={<Navigate replace to="/Main" />} />
    </Routes>
  )
}

export default App;
