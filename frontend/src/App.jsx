import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const Logout = () => {
    localStorage.clear()
    setLoggedIn(false)
    return <Navigate to="/login" />
  }

  const RegisterAndLogout = () => {
    localStorage.clear()
    return <Register />
  }

  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} logout={Logout}/>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home loggedIn={loggedIn}/>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
