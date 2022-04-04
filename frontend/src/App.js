import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
// import Words from "./pages/Words";

/**
 * TODO: redirect routing after registration to login page, and then from login to wordlist if successful login
 */
const App = () => {
  return (
      <>
        <Router>
          <div className="container">
            <Header/>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              {/*<Route path='/wordlist' element={<Words/>}/>*/}
            </Routes>
          </div>
        </Router>
      </>
      // <div className="App">

      //
      //   <div>
      //     <h1>Login</h1>
      //     <input placeholder='username' onChange={e => setLoginUsername(e.target.value)}/>
      //     <input placeholder='password' onChange={e => setLoginPassword(e.target.value)}/>
      //     <button onClick={login}>Submit</button>
      //   </div>
      //
      // </div>
  );
}

export default App;
