import './App.css';
import Main from './Main';
import UserList from './UserList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        App Comp.....
        <Routes>
          <Route path="/" render={()=>{return <h1>Home Page</h1>}}/>
          <Route path="/Home" render={()=>{return <h1>Home Page</h1>}}/>
          <Route path="/Main" exact strict component={Main} />
          <Route path="/Main" exact strict element={<UserList/>} />
        </Routes>       
      </div>
    </Router>
      // <div className="App">
      //   App Component
      //   {/* <Route path="/Home" render={()=>{return <h1>Home Page</h1>}} /> */}
      //   <UserList/>
      // </div>
  );
}

export default App;
