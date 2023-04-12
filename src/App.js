import {BrowserRouter} from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllUsers } from './actions/users';
import { Chatbot } from './Components/Chatbot/Chatbot';
function App() {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
        <Chatbot/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;