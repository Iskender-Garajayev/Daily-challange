import './App.css';
import UserList from './UserList';
import {BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        App Component
        <UserList/>
      </div>
    </BrowserRouter>
  );
}

export default App;
