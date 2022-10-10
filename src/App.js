import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Components/auth/Signup.jsx"
import Home from './Containers/Home/Home.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/enter" element={<Signup />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
