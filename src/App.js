import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllRoutes from './AllRoutes'
import { fetchAllQuestions} from './actions/question'
import { fetchAllUsers } from './actions/users';
import { Chatbot } from './Components/Chatbot/Chatbot';

function App() {
  const dispatch =useDispatch()
  useEffect(() => {
      dispatch(fetchAllQuestions())
      dispatch(fetchAllUsers())
  },  [dispatch])
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <AllRoutes/>
          <Chatbot/>
      </Router>
    </div>
  );
}

export default App;
