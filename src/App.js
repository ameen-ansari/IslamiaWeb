import { Route, Routes } from "react-router-dom";
import style from './App.module.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className={style.parent}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
