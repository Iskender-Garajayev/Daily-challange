import './App.css';
import UserList from './UserList';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        App Comp......
        <Route path="/" />
        <UserList/>
      </div>
    </BrowserRouter>
      // <div className="App">
      //   App Component
      //   {/* <Route path="/Home" render={()=>{return <h1>Home Page</h1>}} /> */}
      //   <UserList/>
      // </div>
  );
}

export default App;
