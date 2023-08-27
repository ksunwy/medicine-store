import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/login/Register";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { useSelector } from "react-redux";

function App() {
  const isLogIn = useSelector(state => state.auth.isLogIn)

  return (
    <>
      {isLogIn && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      )}
      {!isLogIn && <Login />}
    </>
  );
}

export default App;
