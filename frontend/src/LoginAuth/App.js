import './App.css';
import Form from './Form'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Switch>
            <Route path='/login' element={<Form title="Login" />} />
            <Route path='/register' element={<Form title="Register" />} />
          </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;