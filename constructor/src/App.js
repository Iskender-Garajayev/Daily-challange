import Main from './Main';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Main testProps="Testing"/>
    </div>
      {/* <Route path='/Home' render={()=> {return <h1>Home Page</h1>}}/> */}
    </Router>
    
  );
}

export default App;
