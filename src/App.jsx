import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/chatRoom" element={<ChatRoom />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
