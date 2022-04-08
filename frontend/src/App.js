import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Words from "./pages/Words";
import Game from "./pages/Game";

const App = () => {
  return (
      <>
        <Router>
          <div className="w-full max-w-screen-lg mx-auto py-0 px-1.25 text-center">
            <Header/>
            <Routes>
              <Route path='/' element={<Game/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/wordlist' element={<Words/>}/>
            </Routes>
          </div>
        </Router>
      </>
  );
}

export default App;
