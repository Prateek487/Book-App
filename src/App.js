import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";

function App() {
  console.log(sessionStorage.getItem("catchedValue"));
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            !localStorage.getItem("UserData") ? (
              <Home />
            ) : (
              <Navigate to="/search" replace />
            )
          }
        ></Route>
        <Route
          path="/search"
          element={
            !localStorage.getItem("UserData") ? (
              <Navigate to="/" replace />
            ) : (
              <Search />
            )
          }
        ></Route>
        <Route
          path="/book/:id"
          element={
            !localStorage.getItem("UserData") ? (
              <Navigate to="/" replace />
            ) : (
              <Detail />
            )
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
